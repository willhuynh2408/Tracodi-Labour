export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="shell site-footer__shell">
          <section className="site-footer__info" aria-label="Thông tin công ty">
            <h2>Công ty Cổ phần Xuất khẩu Lao động Tracodi (Tracodi Labour)</h2>
            <p>
              <strong>Địa chỉ:</strong> 89 Cách Mạng Tháng 8, Phường Bến Thành, TP. Hồ Chí Minh
            </p>
            <p>
              <strong>TEL:</strong> 0963222837
            </p>
            <p>
              <strong>MAIL:</strong> tracodilabour@tracodi.com.vn
            </p>
            <p>
              <strong>MST:</strong> 0314385382
            </p>

            <div className="site-footer__socials" aria-label="Liên kết mạng xã hội">
              <a href="https://www.facebook.com/tracodi.labour" target="_blank" rel="noopener noreferrer" aria-label="Facebook Tracodi Labour">
                f
              </a>
              <a href="https://www.facebook.com/tracodi.labour" target="_blank" rel="noopener noreferrer" aria-label="TikTok Tracodi Labour">
                <svg className="site-footer__social-icon" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                  <path d="M16.6 3c.35 2.55 1.78 4.18 4.4 4.35v3.25a7.55 7.55 0 0 1-4.32-1.32v6.18c0 3.12-1.98 5.54-5.32 5.54-3.1 0-5.36-2.06-5.36-4.96 0-3.34 2.85-5.48 6.28-4.86v3.38c-1.48-.45-2.84.2-2.84 1.42 0 .92.72 1.5 1.7 1.5 1.1 0 1.78-.66 1.78-2.14V3h3.68Z" />
                </svg>
              </a>
            </div>
          </section>

          <section className="site-footer__facebook" aria-label="Facebook Tracodi Labour">
            <a className="site-footer__facebook-card" href="https://www.facebook.com/tracodi.labour" target="_blank" rel="noopener noreferrer">
              <img src="/TracodiFacebook.png" alt="Tracodi Labour Facebook" />
              <div>
                <span className="site-footer__facebook-logo">
                  <img src="/Logo_Tracodilabour_V3.png" alt="" />
                </span>
                <strong>Tracodi Labour</strong>
                <small>Kết nối công việc, nâng tầm tương lai</small>
              </div>
            </a>
            <p>Follow Facebook để cập nhật workshop định hướng miễn phí hằng tháng.</p>
          </section>

          <section className="site-footer__certs" aria-label="Chứng nhận và giấy phép">
            <div>
              <img src="/Archive%20(1)/Vmas.png" alt="VAMAS 5 sao" />
              <strong>HIỆP HỘI XUẤT KHẨU LAO ĐỘNG VIỆT&nbsp;NAM</strong>
            </div>
            <div className="site-footer__certs-government">
              <img src="/Archive%20(1)/Emblem_of_Vietnam.svg.png" alt="Cục quản lý lao động ngoài nước" />
              <strong>CỤC QUẢN LÝ LAO ĐỘNG NGOÀI NƯỚC</strong>
            </div>
            <a className="site-footer__certs-license" href="/license/2026-04-06 Giay CNDKDN lan 3.pdf" target="_blank" rel="noopener noreferrer">
              <img src="/Archive%20(1)/license.png" alt="Giấy phép đưa người lao động làm việc ở nước ngoài" />
              <strong>GIẤY PHÉP ĐƯA NLĐ làm việc ở nước ngoài.</strong>
            </a>
          </section>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>Copyright 2026 © Tracodi Labour</p>
      </div>
    </footer>
  );
}
