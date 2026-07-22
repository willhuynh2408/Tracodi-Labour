import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { createLead } from "@/lib/cms/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const attempts = new Map();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 5;

function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip) {
  const now = Date.now();
  const entry = attempts.get(ip) || { count: 0, resetAt: now + WINDOW_MS };

  if (entry.resetAt <= now) {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  attempts.set(ip, entry);

  return entry.count > MAX_ATTEMPTS;
}

function validateLead(body) {
  const name = String(body.name || "").trim();
  const telephone = String(body.telephone || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const sector = String(body.sector || "").trim();
  const message = String(body.message || "").trim();
  const sourcePage = String(body.sourcePage || "/").slice(0, 200);
  const website = String(body.website || "").trim();

  if (website) {
    return { spam: true };
  }

  if (!name || !email || !sector || !message) {
    return { error: "Vui lòng điền đầy đủ các trường bắt buộc." };
  }

  if (name.length > 120 || telephone.length > 40 || sector.length > 120 || message.length > 3000) {
    return { error: "Nội dung gửi quá dài." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Địa chỉ email không hợp lệ." };
  }

  return {
    data: {
      email,
      message,
      name,
      sector,
      sourcePage,
      status: "new",
      telephone
    }
  };
}

async function notifyLead(lead) {
  if (!process.env.SMTP_HOST || !process.env.LEAD_NOTIFY_EMAIL) return;

  const transporter = nodemailer.createTransport({
    auth:
      process.env.SMTP_USER && process.env.SMTP_PASS
        ? {
            pass: process.env.SMTP_PASS,
            user: process.env.SMTP_USER
          }
        : undefined,
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true"
  });

  await transporter.sendMail({
    from: process.env.EMAIL_FROM || process.env.SMTP_USER || "website@tracodilabour.local",
    subject: `Lead tư vấn mới: ${lead.name} - ${lead.sector}`,
    text: [
      `Tên: ${lead.name}`,
      `Số điện thoại: ${lead.telephone || ""}`,
      `Email: ${lead.email}`,
      `Thị trường: ${lead.sector}`,
      `Nguồn: ${lead.sourcePage || "/"}`,
      "",
      lead.message
    ].join("\n"),
    to: process.env.LEAD_NOTIFY_EMAIL
  });
}

export async function POST(request) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json({ message: "Bạn đã gửi quá nhiều yêu cầu. Vui lòng thử lại sau." }, { status: 429 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Dữ liệu gửi không hợp lệ." }, { status: 400 });
  }

  const validated = validateLead(body);

  if (validated.spam) {
    return NextResponse.json({ ok: true });
  }

  if (validated.error) {
    return NextResponse.json({ message: validated.error }, { status: 400 });
  }

  try {
    const lead = await createLead(validated.data);
    await notifyLead(validated.data);

    return NextResponse.json({ id: lead.id, ok: true });
  } catch {
    return NextResponse.json(
      { message: "Hệ thống đang tạm thời chưa nhận được yêu cầu. Vui lòng liên hệ hotline." },
      { status: 503 }
    );
  }
}
