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

const defaultFormLabels = {
  name: "Họ và tên",
  telephone: "Số điện thoại",
  email: "Email",
  sector: "Chương trình",
  message: "Nội dung cần hỗ trợ",
  submit: "Đăng ký ngay",
  submitting: "Đang gửi...",
  requiredError: "Vui lòng điền vào các trường bắt buộc trước khi gửi yêu cầu.",
  invalidEmailError: "Vui lòng nhập địa chỉ email hợp lệ.",
  submitStatus: "Đang gửi yêu cầu tư vấn...",
  successMessage: "Yêu cầu tư vấn đã được ghi nhận. Tracodi Labour sẽ liên hệ lại sớm.",
  genericError: "Không thể gửi yêu cầu lúc này. Vui lòng thử lại sau."
};

const defaultSectors = ["Tuyển sinh Hàng Không"];
const hiddenSectors = new Set(["Thị trường Châu Á", "Thị trường Châu Âu"]);

export default function ContactForm({ sectors = defaultSectors, labels = defaultFormLabels }) {
  const formLabels = { ...defaultFormLabels, ...(labels || {}) };
  const visibleSectors = (sectors.length ? sectors : defaultSectors).filter((sector) => !hiddenSectors.has(sector));
  const formSectors = visibleSectors.length ? visibleSectors : defaultSectors;
  const [form, setForm] = useState({ ...emptyForm, sector: formSectors[0] || "" });
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
      setStatus(formLabels.requiredError);
      setStatusType("error");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      setStatus(formLabels.invalidEmailError);
      setStatusType("error");
      return;
    }

    setSubmitting(true);
    setStatus(formLabels.submitStatus);
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
        throw new Error(result?.message || formLabels.genericError);
      }

      setForm({ ...emptyForm, sector: formSectors[0] || "" });
      setStatus(formLabels.successMessage);
      setStatusType("success");
    } catch (error) {
      setStatus(error.message || formLabels.genericError);
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
          <span>{formLabels.name}</span>
          <input type="text" name="name" autoComplete="name" required value={form.name} onChange={onChange} />
        </label>
        <label>
          <span>{formLabels.telephone}</span>
          <input type="tel" name="telephone" autoComplete="tel" value={form.telephone} onChange={onChange} />
        </label>
      </div>

      <div className="field-grid">
        <label>
          <span>{formLabels.email}</span>
          <input type="email" name="email" autoComplete="email" required value={form.email} onChange={onChange} />
        </label>
        <label>
          <span>{formLabels.sector}</span>
          <select name="sector" required value={form.sector} onChange={onChange}>
            {formSectors.map((sector) => (
              <option value={sector} key={sector}>
                {sector}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label>
        <span>{formLabels.message}</span>
        <textarea name="message" rows="5" required value={form.message} onChange={onChange} />
      </label>

      <div className="contact-form__actions">
        <button className="button button--primary" type="submit" style={{ textTransform: "uppercase" }} disabled={submitting}>
          {submitting ? formLabels.submitting : formLabels.submit}
        </button>
        <p className={`form-status${statusType ? ` form-status--${statusType}` : ""}`} aria-live="polite">
          {status}
        </p>
      </div>
    </form>
  );
}
