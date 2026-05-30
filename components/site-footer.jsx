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
                ♪
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
            <a href="/license/2026-04-06 Giay CNDKDN lan 3.pdf" target="_blank" rel="noopener noreferrer">
              <img src="/Archive%20(1)/Vmas.png" alt="VAMAS 5 sao" />
              <strong>5 sao</strong>
            </a>
            <a href="/license/2026-04-06 Giay CNDKDN lan 3.pdf" target="_blank" rel="noopener noreferrer">
              <span className="site-footer__cert-icon" aria-hidden="true">
                <svg viewBox="0 0 64 64" focusable="false">
                  <path d="M24.8 22.8 18 29.6c-1.6 1.6-4.1 1.6-5.7 0l-3.5-3.5 9.7-9.7c2.2-2.2 5.2-3.4 8.3-3.4h5.7l5.3 5.3-5.5 5.5c-2.1 2.1-5.4 2.1-7.5 0Z" />
                  <path d="M39.2 22.8 46 29.6c1.6 1.6 4.1 1.6 5.7 0l3.5-3.5-9.7-9.7c-2.2-2.2-5.2-3.4-8.3-3.4h-5.7l-5.3 5.3 5.5 5.5c2.1 2.1 5.4 2.1 7.5 0Z" />
                  <path d="m18.4 30.2 8.2 8.2 2.4-2.4 7.1 7.1c1.4 1.4 3.6 1.4 5 0 .8-.8 1.1-1.8 1-2.8 1 .1 2-.2 2.8-1 1.1-1.1 1.3-2.8.6-4.1.9 0 1.9-.3 2.6-1 1.4-1.4 1.4-3.6 0-5l-8.8-8.8" />
                  <path d="m25.2 37 5.8 5.8m2.1-9.5 7.8 7.8m-2.5-13.4 7.1 7.1" />
                </svg>
              </span>
              <strong>Đối tác</strong>
            </a>
            <a href="/license/2026-04-06 Giay CNDKDN lan 3.pdf" target="_blank" rel="noopener noreferrer">
              <img src="/Archive%20(1)/license.png" alt="Quy trình" />
              <strong>Quy trình</strong>
            </a>
            <a href="/license/2026-04-06 Giay CNDKDN lan 3.pdf" target="_blank" rel="noopener noreferrer">
              <img src="/Archive%20(1)/license.png" alt="Đăng ký doanh nghiệp" />
              <strong>Đăng ký doanh nghiệp</strong>
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
