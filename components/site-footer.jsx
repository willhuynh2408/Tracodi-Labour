import { defaultSiteSettings } from "@/lib/cms/default-content";

export default function SiteFooter({ siteSettings = defaultSiteSettings }) {
  const phones = siteSettings.phones?.map((phone) => phone.number).filter(Boolean).join(" - ");
  const facebookUrl = siteSettings.facebookUrl || "https://www.facebook.com/tracodi.labour";
  const tiktokUrl = siteSettings.tiktokUrl || facebookUrl;

  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="shell site-footer__shell">
          <section className="site-footer__info" aria-label="Thông tin công ty">
            <h2>{siteSettings.companyName}</h2>
            <p>
              <strong>Địa chỉ:</strong> {siteSettings.address}
            </p>
            <p>
              <strong>TEL:</strong> {phones}
            </p>
            <p>
              <strong>MAIL:</strong> {siteSettings.email}
            </p>
            <p>
              <strong>MST:</strong> {siteSettings.taxCode}
            </p>

            <div className="site-footer__socials" aria-label="Liên kết mạng xã hội">
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook Tracodi Labour">
                f
              </a>
              <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" aria-label="TikTok Tracodi Labour">
                <svg className="site-footer__social-icon" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                  <path d="M16.6 3c.35 2.55 1.78 4.18 4.4 4.35v3.25a7.55 7.55 0 0 1-4.32-1.32v6.18c0 3.12-1.98 5.54-5.32 5.54-3.1 0-5.36-2.06-5.36-4.96 0-3.34 2.85-5.48 6.28-4.86v3.38c-1.48-.45-2.84.2-2.84 1.42 0 .92.72 1.5 1.7 1.5 1.1 0 1.78-.66 1.78-2.14V3h3.68Z" />
                </svg>
              </a>
            </div>
          </section>

          <section className="site-footer__facebook" aria-label="Facebook Tracodi Labour">
            <iframe
              className="site-footer__facebook-plugin"
              title="Tracodi Labour Facebook timeline"
              src={siteSettings.facebookEmbedUrl}
              width="338"
              height="298"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
            <p>{siteSettings.footerNote}</p>
          </section>

          <section className="site-footer__certs" aria-label="Chứng nhận và giấy phép">
            {siteSettings.certifications?.map((cert, index) => {
              const content = (
                <>
                  <img src={cert.imageUrl} alt={cert.imageAlt || cert.title} />
                  <strong>{cert.title}</strong>
                </>
              );

              if (cert.url) {
                return (
                  <a className="site-footer__certs-license" href={cert.url} target="_blank" rel="noopener noreferrer" key={cert.title}>
                    {content}
                  </a>
                );
              }

              return (
                <div className={index === 1 ? "site-footer__certs-government" : ""} key={cert.title}>
                  {content}
                </div>
              );
            })}
          </section>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>Copyright 2026 © Tracodi Labour</p>
      </div>
    </footer>
  );
}
