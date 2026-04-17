"use client";

import { useState } from "react";

const emptyForm = {
  name: "",
  company: "",
  email: "",
  sector: "",
  message: ""
};

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

    const subject = `Yêu cầu tư vấn Tracodi từ ${form.name}`;
    const body = [
      `Tên: ${form.name}`,
      `Công ty: ${form.company || "Không cung cấp"}`,
      `Email: ${form.email}`,
      `Lĩnh vực tuyển dụng: ${form.sector}`,
      "",
      "Tóm tắt yêu cầu:",
      form.message
    ].join("\n");

    setStatus("Đang mở hộp thư của bạn để gửi yêu cầu.");
    window.location.href = `mailto:hello@Tracodi.Labour?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="field-grid">
        <label>
          <span>Họ và tên</span>
          <input type="text" name="name" autoComplete="name" required value={form.name} onChange={onChange} />
        </label>
        <label>
          <span>Công ty</span>
          <input type="text" name="company" autoComplete="organization" value={form.company} onChange={onChange} />
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
