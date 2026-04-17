import { navLinks } from "@/lib/site-data";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__shell">
        <div>
          <p className="site-footer__brand">Tracodi</p>
          <p className="site-footer__copy">
            Hệ thống xuất khẩu lao động dành cho nhà tuyển dụng cần nguồn nhân tài ở nước ngoài và người lao động cần một lộ trình minh bạch đến với cơ hội toàn cầu.
          </p>
        </div>
        <div className="site-footer__links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
