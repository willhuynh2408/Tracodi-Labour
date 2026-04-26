"use client";

import { useState } from "react";

const emptyForm = {
  name: "",
  telephone: "",
  email: "",
  sector: "",
  message: ""
};

const companyEmail = "tracodilabour@tracodi.com.vn";

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("");

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.sector || !form.message) {
      setStatus("Vui lòng điền vào các trường bắt buộc trước khi gửi yêu cầu.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      setStatus("Vui lòng nhập địa chỉ email hợp lệ.");
      return;
    }

    const subject = `${form.name.toUpperCase()} YÊU CẦU TƯ VẤN ${form.sector.toUpperCase()}`;
    const body = [
      `Tên: ${form.name}`,
      `Số điện thoại: ${form.telephone}`,
      `Email: ${form.email}`,
      `Lĩnh vực tuyển dụng: ${form.sector}`,
      "",
      "Tóm tắt yêu cầu:",
      form.message
    ].join("\n");

    const gmailUrl = new URL("https://mail.google.com/mail/");
    gmailUrl.searchParams.set("view", "cm");
    gmailUrl.searchParams.set("fs", "1");
    gmailUrl.searchParams.set("to", companyEmail);
    gmailUrl.searchParams.set("su", subject);
    gmailUrl.searchParams.set("body", body);

    setStatus("Đang mở Gmail để gửi yêu cầu tư vấn.");
    window.open(gmailUrl.toString(), "_blank", "noopener,noreferrer");
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="field-grid">
        <label>
          <span>Họ và tên</span>
          <input type="text" name="name" autoComplete="name" required value={form.name} onChange={onChange} />
        </label>
        <label>
          <span>Số điện thoại</span>
          <input type="tel" name="telephone" autoComplete="organization" value={form.telephone} onChange={onChange} />
        </label>
      </div>

      <div className="field-grid">
        <label>
          <span>Email</span>
          <input type="email" name="email" autoComplete="email" required value={form.email} onChange={onChange} />
        </label>
        <label>
          <span>Lĩnh vực tuyển dụng</span>
          <select name="sector" required value={form.sector} onChange={onChange}>
            <option value="">Chọn lĩnh vực</option>
            <option value="Xây dựng">Xây dựng</option>
            <option value="Chăm sóc sức khỏe">Chăm sóc sức khỏe</option>
            <option value="Sản xuất">Sản xuất</option>
            <option value="Logistics">Logistics</option>
          </select>
        </label>
      </div>

      <label>
        <span>Tóm tắt yêu cầu</span>
        <textarea
          name="message"
          rows="5"
          required
          placeholder="Hãy cho chúng tôi biết về khu vực tuyển dụng của bạn, số lượng dự kiến và thời gian triển khai."
          value={form.message}
          onChange={onChange}
        />
      </label>

      <div className="contact-form__actions">
        <button className="button button--light" type="submit">
          Gửi yêu cầu
        </button>
        <p className="form-status" aria-live="polite">
          {status}
        </p>
      </div>
    </form>
  );
}
