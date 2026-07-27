import ContactForm from "@/components/contact-form";
import RecruitmentSection from "@/components/recruitment-section";
import ScrollReveal from "@/components/scroll-reveal";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { zaloHrefForPhone } from "@/lib/contact-links";
import { getFormSectors, getSiteData } from "@/lib/cms/server";

export const supportedLocales = ["vi", "en", "ja"];

export async function generateSiteMetadata(locale = "vi") {
  const { siteSettings } = await getSiteData(locale);
  const seo = siteSettings.seo || {};

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords?.map((item) => item.keyword).filter(Boolean),
    icons: {
      icon: siteSettings.logoUrl || "/Logo_Tracodilabour_V3.png"
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description
    }
  };
}

export async function renderHomePage(locale = "vi") {
  const { homePage, navigation, recruitmentTabs, siteSettings } = await getSiteData(locale);
  const formSectors = getFormSectors(recruitmentTabs);
  const floatingContactPhone = siteSettings.floatingContact?.phone || "0963222837";
  const floatingContactHref = zaloHrefForPhone(floatingContactPhone);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Chuyển tới nội dung
      </a>

      <SiteHeader locale={locale} navigation={navigation} siteSettings={siteSettings} />

      <main id="main-content">
        <section className="hero section" id="top">
          <div className="hero__backdrop" aria-hidden="true">
            <img src={homePage.hero.backgroundImageUrl} alt="" />
          </div>
          <div className="shell hero__grid">
            <ScrollReveal animation="fade-up" className="hero__copy">
              <p className="hero__eyebrow">{homePage.hero.eyebrow}</p>
              <h1>{homePage.hero.title}</h1>
              <span className="hero__rule" aria-hidden="true" />
              <p className="hero__lead">
                {homePage.hero.leadLines?.map((line) => (
                  <span key={line.text}>{line.text}</span>
                ))}
              </p>
              <div className="hero__actions">
                {homePage.hero.actions?.map((action) => (
                  <a className={`button button--${action.style || "primary"}`} href={action.href} key={action.label}>
                    {action.label}
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="section overview-section" id="why">
          <div className="shell">
            <div className="overview-layout">
              <ScrollReveal animation="scale-in" as="figure" className="overview-image">
                {homePage.overview.images?.map((item, index) => (
                  <img
                    className={`overview-image__slide overview-image__slide--${index + 1}`}
                    src={item.imageUrl}
                    alt={item.imageAlt}
                    width="598"
                    height="666"
                    loading={index === 0 ? "eager" : "lazy"}
                    key={`${item.imageUrl}-${index}`}
                  />
                ))}
              </ScrollReveal>

              <ScrollReveal animation="slide-left" delay={120} className="overview-copy">
                <p className="eyebrow">{homePage.overview.eyebrow}</p>
                <h2>{homePage.overview.title}</h2>
                <p className="overview-intro">{homePage.overview.intro}</p>
                {homePage.overview.body?.map((paragraph) => (
                  <p key={paragraph.text}>{paragraph.text}</p>
                ))}

                <div className="overview-metric-grid" aria-label="Chỉ số Tracodi Labour">
                  {homePage.overview.metrics?.map((metric) => (
                    <div className="overview-metric-card" key={metric.label}>
                      <strong className="overview-stars" aria-label={metric.stars ? `${metric.value} sao` : metric.value}>
                        <span>{metric.value}</span>
                        {metric.stars ? (
                          <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                            <defs>
                              <linearGradient id="overview-star-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#0c5fae" />
                                <stop offset="100%" stopColor="#c8272f" />
                              </linearGradient>
                            </defs>
                            <path
                              fill="url(#overview-star-gradient)"
                              d="m12 2.8 2.75 5.58 6.16.9-4.46 4.34 1.05 6.13L12 16.86l-5.5 2.89 1.05-6.13-4.46-4.34 6.16-.9L12 2.8Z"
                            />
                          </svg>
                        ) : null}
                      </strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal animation="fade-up" delay={150} className="why-video">
              <video
                className="why-video__media"
                src={homePage.overview.videoUrl}
                poster={homePage.overview.videoPosterUrl}
                controls
                preload="metadata"
                playsInline
              >
                Trình duyệt của bạn không hỗ trợ phát video.
              </video>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={180} className="overview-process-image">
              <img
                src={homePage.overview.processImageUrl}
                alt={homePage.overview.processImageAlt}
                width="1280"
                height="647"
                loading="lazy"
              />
            </ScrollReveal>
          </div>
        </section>

        <section className="section markets-section" id="markets">
          <div className="shell">
            <div className="markets-overview">
              <ScrollReveal animation="fade-up" className="markets-copy">
                <div>
                  <p className="eyebrow">{homePage.markets.eyebrow}</p>
                  <h2>{homePage.markets.title}</h2>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="slide-right" stagger className="market-grid">
                {homePage.markets.cards?.map((market) => (
                  <article className="market-card" key={market.region}>
                    <img className="market-card__image" src={market.imageUrl} alt={market.imageAlt || `Thị trường ${market.region}`} />
                    <div className="market-card__body">
                      <h3>{market.region}</h3>
                      <p>{market.description}</p>
                    </div>
                  </article>
                ))}
              </ScrollReveal>
              <ScrollReveal animation="fade-up" className="markets-cta">
                <h3>{homePage.markets.ctaTitle}</h3>
                <p>{homePage.markets.ctaText}</p>
                <a className="button markets-cta__button" href={homePage.markets.ctaHref || "#contact"}>
                  {homePage.markets.ctaLabel}
                </a>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <RecruitmentSection content={homePage.recruitment} tabs={recruitmentTabs} />

        <section className="section section--dark academy-section" id="academy">
          <div className="shell academy-shell">
            <div className="academy-top">
              <ScrollReveal animation="fade-up" className="academy-intro">
                <div className="academy-inline-heading">
                  <p className="eyebrow eyebrow--soft">{homePage.academy.eyebrow}</p>
                  <h2>{homePage.academy.title}</h2>
                </div>

                <p className="academy-lead">{homePage.academy.lead}</p>
                <span className="academy-rule" aria-hidden="true" />

                <ul className="academy-checklist" aria-label="Nội dung đào tạo">
                  {homePage.academy.checklist?.map((item) => (
                    <li key={item.text}>{item.text}</li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal animation="scale-in" delay={140} as="div" className="academy-visual" aria-label="Hình ảnh đào tạo và tư vấn">
                {homePage.academy.visuals?.map((item, index) => (
                  <figure
                    className={`academy-visual__bubble ${
                      ["academy-visual__bubble--main", "academy-visual__bubble--side", "academy-visual__bubble--bottom"][index] ||
                      "academy-visual__bubble--side"
                    }`}
                    key={`${item.imageUrl}-${index}`}
                  >
                    <img src={item.imageUrl} alt={item.imageAlt} loading="lazy" />
                  </figure>
                ))}
              </ScrollReveal>
            </div>

            <ScrollReveal animation="fade-up" delay={100} className="academy-modules">
              <div className="academy-modules__heading">
                <h3 className="academy-modules__title">{homePage.academy.modulesTitle}</h3>
              </div>

              <div className="academy-module-showcase">
                <ScrollReveal animation="fade-up" stagger className="academy-module-grid">
                  {homePage.academy.modules?.map((module, index) => (
                    <article className="academy-module-card" key={module.title}>
                      <span className="academy-module-card__number" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="academy-module-card__content">
                        <h3>{module.title}</h3>
                        <p>{module.description}</p>
                      </div>
                    </article>
                  ))}
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="section section--compact" id="contact">
          <ScrollReveal animation="fade-up" className="shell cta-band">
            <div className="cta-band__copy">
              <p className="eyebrow eyebrow--soft">{homePage.contactCta.eyebrow}</p>
              <h2>
                {homePage.contactCta.titleLines?.map((line) => (
                  <span key={line.text}>{line.text}</span>
                ))}
              </h2>
            </div>

            <ScrollReveal animation="fade-up" delay={150} className="contact-layout">
              <ContactForm sectors={formSectors} labels={homePage.contactCta.formLabels} />
            </ScrollReveal>
          </ScrollReveal>
        </section>
      </main>

      <SiteFooter siteSettings={siteSettings} />

      <aside className="floating-contact" aria-label="Liên hệ nhanh">
        <a className="floating-contact__top" href="#top" aria-label="Quay về đầu trang">
          <span aria-hidden="true" />
        </a>
        <a
          className="floating-contact__bubble"
          href={floatingContactHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Liên hệ Zalo hotline ${floatingContactPhone}`}
        >
          <span>{siteSettings.floatingContact?.label}</span>
          <strong>{siteSettings.floatingContact?.cta}</strong>
          <small>{floatingContactPhone}</small>
        </a>
      </aside>
    </>
  );
}

export default async function HomePage() {
  return renderHomePage("vi");
}
