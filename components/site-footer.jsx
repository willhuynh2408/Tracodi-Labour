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
              <strong>TEL:</strong> 028 3833 0316
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
              <img src="/Archive%20(1)/Emblem_of_Vietnam.svg.png" alt="Đối tác" />
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
