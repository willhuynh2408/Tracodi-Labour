"use client";

import { useState } from "react";

const emptyForm = {
  name: "",
  telephone: "",
  email: "",
  sector: "",
  message: "",
  website: ""
};

export default function ContactForm({ sectors = ["Thị trường Châu Á", "Thị trường Châu Âu", "Tuyển sinh Hàng Không"] }) {
  const [form, setForm] = useState({ ...emptyForm, sector: sectors[0] || "" });
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.sector || !form.message) {
      setStatus("Vui lòng điền vào các trường bắt buộc trước khi gửi yêu cầu.");
      setStatusType("error");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      setStatus("Vui lòng nhập địa chỉ email hợp lệ.");
      setStatusType("error");
      return;
    }

    setSubmitting(true);
    setStatus("Đang gửi yêu cầu tư vấn...");
    setStatusType("");

    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify({
          ...form,
          sourcePage: window.location.pathname
        }),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || "Không thể gửi yêu cầu lúc này.");
      }

      setForm({ ...emptyForm, sector: sectors[0] || "" });
      setStatus("Yêu cầu tư vấn đã được ghi nhận. Tracodi Labour sẽ liên hệ lại sớm.");
      setStatusType("success");
    } catch (error) {
      setStatus(error.message || "Không thể gửi yêu cầu lúc này. Vui lòng thử lại sau.");
      setStatusType("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <input
        type="text"
        name="website"
        tabIndex="-1"
        autoComplete="off"
        value={form.website}
        onChange={onChange}
        style={{ display: "none" }}
        aria-hidden="true"
      />

      <div className="field-grid">
        <label>
          <span>Họ và tên</span>
          <input type="text" name="name" autoComplete="name" required value={form.name} onChange={onChange} />
        </label>
        <label>
          <span>Số điện thoại</span>
          <input type="tel" name="telephone" autoComplete="tel" value={form.telephone} onChange={onChange} />
        </label>
      </div>

      <div className="field-grid">
        <label>
          <span>Email</span>
          <input type="email" name="email" autoComplete="email" required value={form.email} onChange={onChange} />
        </label>
        <label>
          <span>Thị trường</span>
          <select name="sector" required value={form.sector} onChange={onChange}>
            {sectors.map((sector) => (
              <option value={sector} key={sector}>
                {sector}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label>
        <span>Nội dung cần hỗ trợ</span>
        <textarea name="message" rows="5" required value={form.message} onChange={onChange} />
      </label>

      <div className="contact-form__actions">
        <button className="button button--primary" type="submit" style={{ textTransform: "uppercase" }} disabled={submitting}>
          {submitting ? "Đang gửi..." : "Đăng ký ngay"}
        </button>
        <p className={`form-status${statusType ? ` form-status--${statusType}` : ""}`} aria-live="polite">
          {status}
        </p>
      </div>
    </form>
  );
}
