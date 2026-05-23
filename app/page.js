import ContactForm from "@/components/contact-form";
import RecruitmentSection from "@/components/recruitment-section";
import ScrollReveal from "@/components/scroll-reveal";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import {
  academyGallery,
  academyModules,
  academyTracks,
  assuranceCards,
  contactDetails,
  journeyMilestones,
  proofMetrics
} from "@/lib/site-data";

const academyModuleIcons = ["language", "school", "handshake", "workspace_premium"];

const featuredMarkets = [
  {
    region: "Nhật Bản",
    image:
      "/img_Tracodi/nhật bản.png",
    description:
      "Thu nhập ổn định, môi trường chuyên nghiệp. Cơ hội nâng cao tay nghề và tích lũy tài chính."
  },
  {
    region: "Đài Loan",
    image:
      "/img_Tracodi/đài loan.png",
    description:
      "Chi phí thấp, xuất cảnh nhanh. Nhiều đơn hàng ổn định và quy trình đơn giản."
  },
  {
    region: "Châu Âu",
    image:
      "/img_Tracodi/châu âu.png",
    description:
      "Vừa học vừa làm, cơ hội phát triển lâu dài. Nâng cao thu nhập và định cư tại châu Âu."
  }
];

function AcademyIcon({ name }) {
  const icons = {
    language: (
      <path d="M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19Zm6.85 8h-3.03a15.8 15.8 0 0 0-1.28-4.61A7.54 7.54 0 0 1 18.85 10.5ZM12 4.14c.78.95 1.73 3.08 2.13 6.36H9.87C10.27 7.22 11.22 5.09 12 4.14ZM9.46 5.89A15.8 15.8 0 0 0 8.18 10.5H5.15a7.54 7.54 0 0 1 4.31-4.61ZM5.15 13.5h3.03a15.8 15.8 0 0 0 1.28 4.61 7.54 7.54 0 0 1-4.31-4.61ZM12 19.86c-.78-.95-1.73-3.08-2.13-6.36h4.26c-.4 3.28-1.35 5.41-2.13 6.36Zm2.54-1.75a15.8 15.8 0 0 0 1.28-4.61h3.03a7.54 7.54 0 0 1-4.31 4.61Z" />
    ),
    school: (
      <path d="m12 3.2 9 4.65-9 4.65-9-4.65 9-4.65Zm5.9 6.79v3.15c0 1.86-2.62 3.36-5.9 3.36s-5.9-1.5-5.9-3.36V9.99L12 13.1l5.9-3.11Zm2.1 1.06v5.55h-1.8v-4.62l1.8-.93Z" />
    ),
    handshake: (
      <path d="M7.18 5.5 4.4 8.27a1.9 1.9 0 0 0 0 2.69l2.29 2.29 2.83-2.82a2.82 2.82 0 0 1 3.98 0l.85.84a1.1 1.1 0 0 0 1.56 0l2.49-2.49a1.87 1.87 0 0 0 0-2.65L16.26 4.99a2.76 2.76 0 0 0-3.9 0l-.68.68-.66-.67a2.73 2.73 0 0 0-3.84 0Zm7.45 7.43-1.96-1.96a1.23 1.23 0 0 0-1.73 0l-3.82 3.8a1.9 1.9 0 0 0 2.69 2.69l.77-.77.43.43a1.81 1.81 0 0 0 2.56 0l1.06-1.06.42.42a1.81 1.81 0 0 0 2.56 0 1.81 1.81 0 0 0 0-2.56l-2.98-2.99Z" />
    ),
    workspace_premium: (
      <path d="m12 2.8 2.58 5.23 5.77.84-4.17 4.06.98 5.73L12 15.96l-5.16 2.7.98-5.73-4.17-4.06 5.77-.84L12 2.8Zm-3.1 17.6h6.2v1.6H8.9v-1.6Z" />
    )
  };

  return (
    <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
      {icons[name] ?? icons.language}
    </svg>
  );
}

export default function HomePage() {
  const academyBubbles = academyGallery.slice(0, 3);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Chuyển tới nội dung
      </a>

      <SiteHeader />

      <main id="main-content">
        <section className="hero section" id="top">
          <div className="hero__backdrop" aria-hidden="true">
            <img src="/img_Tracodi/Baner_main.png" alt="" />
          </div>
          <div className="shell hero__grid">
            <ScrollReveal animation="fade-up" className="hero__copy">
              <p className="eyebrow">Đào tạo quốc tế</p>
              <h1>Kết nối nghề nghiệp toàn cầu</h1>
              <span className="hero__rule" aria-hidden="true" />
              <p className="hero__lead">
                Định hướng nghề nghiệp - Đào tạo quốc tế
                <br />
                Đồng hành cùng tương lai bền vững của bạn
              </p>
              <div className="hero__actions">
                <a className="button button--light" href="#contact">
                  Nhận tư vấn miễn phí
                </a>

                <a className="button button--primary" href="#contact">
                  Gọi ngay để được hỗ trợ
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="section" id="why">
          <div className="shell">
            <ScrollReveal animation="fade-up" className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">Tổng quan</p>
                <h2>Nền tảng xuất khẩu lao động toàn diện.</h2>
              </div>

              <p>
                TRACODI LABOUR là tổ chức giáo dục định hướng và tư vấn nghề nghiệp quốc tế, 
                hỗ trợ người lao động Việt Nam học tập và làm việc ở nước ngoài. Phát triển từ hệ thống 
                <a href="#" className="about-link"> TRACODI Group</a> với kinh nghiệm từ năm 1993, 
                Tracodi Labour đã hỗ trợ hơn 21.000 lao động đến các thị trường như Nhật Bản và Đài Loan 
                thông qua quy trình minh bạch, lộ trình rõ ràng. 
                Từ năm 2026, Tracodi Labour tiếp tục mở rộng sang các thị trường Châu Á và Châu Âu, 
                đồng thời nâng cao tiêu chuẩn đào tạo theo định hướng quốc tế.
              </p>
            </ScrollReveal>

            <div className="tone-panel">
              <div className="why-grid">
                <ScrollReveal animation="scale-in" as="article" className="overview-gallery" aria-label="Hình ảnh tổng quan Tracodi Labour">
                  {[
                    { src: "/img/Picture1.jpg", alt: "Hoạt động đào tạo và chuẩn bị nguồn lao động tại Tracodi Labour" },
                    { src: "/img/Picture2.jpg", alt: "Người lao động trong chương trình đào tạo và định hướng nghề nghiệp" },
                    { src: "/img/Picture3.jpg", alt: "Không gian kết nối và vận hành chương trình xuất khẩu lao động" }
                  ].map((item, index) => (
                    <figure className={`overview-gallery__slide overview-gallery__slide--${index + 1}`} key={item.src}>
                      <img src={item.src} alt={item.alt} width="900" height="680" loading="lazy" />
                    </figure>
                  ))}
                  <div className="overview-gallery__dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                </ScrollReveal>

                <ScrollReveal animation="slide-left" delay={150} as="div" className="overview-side">
                  <div className="overview-card-slider" aria-label="Trọng tâm vận hành">
                    <article className="surface-card surface-card--large overview-card overview-card--first">
                      <p className="eyebrow eyebrow--muted">Ưu tiên tuân thủ</p>
                      <h3>Quy trình khép kín với kiểm soát chất lượng.</h3>
                      <p>
                        Vận hành quy trình đồng bộ từ tuyển chọn, đào tạo đến phái cử và hỗ trợ sau xuất cảnh, đảm bảo tính nhất quán, minh bạch và kiểm soát chất lượng trong toàn bộ quá trình.
                      </p>
                    </article>
                    <article className="surface-card surface-card--large overview-card overview-card--second">
                      <p className="eyebrow eyebrow--muted">Trọng tâm là con người</p>
                      <h3>Chuẩn bị kỹ cho người lao động để nâng cao khả năng thích nghi.</h3>
                      <p>
                        Năng lực ngoại ngữ, kỹ năng nghề, tác phong chuyên nghiệp được xem là những yếu tố cốt lõi trong toàn bộ chương trình.
                      </p>
                    </article>
                  </div>

                  <article className="surface-card surface-card--metrics overview-metrics" aria-label="Chỉ số đào tạo">
                    {proofMetrics.map((metric) => (
                      <div className={`metric metric--${metric.accent}`} key={metric.label}>
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                      </div>
                    ))}
                  </article>
                </ScrollReveal>
              </div>

              <ScrollReveal animation="fade-up" delay={150} className="why-video">
                <video
                  className="why-video__media"
                  src="/Tracodilabour.mp4"
                  controls
                  preload="metadata"
                  playsInline
                >
                  Trình duyệt của bạn không hỗ trợ phát video.
                </video>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="section journey-section" id="journey">
          <div className="shell journey-layout">
            <ScrollReveal animation="fade-up" className="journey-intro">
              <p className="eyebrow">Chặng đường phát triển</p>
              <h2>Dấu mốc hình thành và mở rộng năng lực của Tracodi Labour.</h2>
              <p>
                Hành trình phát triển của công ty được xây dựng qua từng giai đoạn,
                từ nền tảng doanh nghiệp ban đầu đến mô hình cung ứng lao động ngày
                càng chuyên nghiệp, minh bạch và bền vững hơn.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="slide-left" stagger className="journey-timeline">
              {journeyMilestones.map((milestone) => (
                <article className="journey-card" key={milestone.year}>
                  <span className="journey-card__year">{milestone.year}</span>
                  <div className="journey-card__body">
                    <h3>{milestone.title}</h3>
                    <p>{milestone.description}</p>
                  </div>
                </article>
              ))}
            </ScrollReveal>
          </div>
        </section>

        <section className="section markets-section" id="markets">
          <div className="shell">
            <div className="markets-overview">
              <ScrollReveal animation="fade-up" className="markets-copy">
                <div>
                  <p className="eyebrow">Thị trường</p>
                  <h2>Chọn thị trường phù hợp với bạn</h2>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="slide-right" stagger className="market-grid">
                {featuredMarkets.map((market) => (
                  <article className="market-card" key={market.region}>
                    <img
                      className="market-card__image"
                      src={market.image}
                      alt={`Thị trường ${market.region}`}
                    />
                    <div className="market-card__body">
                      <h3>{market.region}</h3>
                      <p>{market.description}</p>
                    </div>
                  </article>
                ))}
              </ScrollReveal>
              <ScrollReveal animation="fade-up" className="markets-cta">
                <h3>Bạn đang muốn phát triển sự nghiệp quốc tế nhưng chưa biết bắt đầu từ đâu?</h3>
                <p>
                  Chi phí bao nhiêu? Chọn thị trường phù hợp? Đội ngũ Tracodi Labour sẽ hỗ trợ tư vấn và định hướng lộ trình phù hợp cho bạn.
                </p>
                <a className="button markets-cta__button" href="#contact">
                  Nhận tư vấn ngay
                </a>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <RecruitmentSection />

        <section className="section section--dark academy-section" id="academy">
          <div className="shell academy-shell">
            <ScrollReveal animation="fade-up" className="academy-intro">
              <p className="eyebrow eyebrow--soft">Lộ trình &amp; đào tạo</p>

              <h2>Đào tạo bài bản - vững bước toàn cầu</h2>

              <ul className="academy-checklist" aria-label="Nội dung đào tạo">
                <li>
                  <span className="academy-checklist__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" focusable="false">
                      <path d="M9.2 16.4 4.8 12l1.7-1.7 2.7 2.7 8.3-8.3L19.2 6 9.2 16.4Z" />
                    </svg>
                  </span>
                  Đào tạo tiếng Nhật, tiếng Đức, tiếng Trung theo nhu cầu thị trường
                </li>
                <li>
                  <span className="academy-checklist__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" focusable="false">
                      <path d="M9.2 16.4 4.8 12l1.7-1.7 2.7 2.7 8.3-8.3L19.2 6 9.2 16.4Z" />
                    </svg>
                  </span>
                  Tập trung giao tiếp thực tế và thuật ngữ chuyên ngành
                </li>
                <li>
                  <span className="academy-checklist__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" focusable="false">
                      <path d="M9.2 16.4 4.8 12l1.7-1.7 2.7 2.7 8.3-8.3L19.2 6 9.2 16.4Z" />
                    </svg>
                  </span>
                  Lộ trình đào tạo theo chuẩn đầu ra
                </li>
                <li>
                  <span className="academy-checklist__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" focusable="false">
                      <path d="M9.2 16.4 4.8 12l1.7-1.7 2.7 2.7 8.3-8.3L19.2 6 9.2 16.4Z" />
                    </svg>
                  </span>
                  Đánh giá định kỳ nhằm đảm bảo chất lượng học viên
                </li>
              </ul>
            </ScrollReveal>

            <ScrollReveal animation="scale-in" delay={200} as="aside" className="academy-side">
              <div className="academy-bubbles">
                {academyBubbles.map((item, index) => (
                  <figure className={`academy-bubble academy-bubble--${index + 1}`} key={item.image}>
                    <img
                      className="academy-bubble__image"
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                    />
                  </figure>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100} className="academy-modules">
              <div className="academy-modules__heading">
                <h3 className="academy-modules__title">Quy trình tư vấn nghề nghiệp quốc tế</h3>
              </div>

              <div className="academy-module-showcase">
                <ScrollReveal animation="fade-up" stagger className="academy-module-grid">
                  {academyModules.map((module, index) => (
                    <article
                      className={`academy-module-card${index === 0 ? " academy-module-card--featured" : ""}`}
                      key={module}
                    >
                      <span className="academy-module-card__icon">
                        <AcademyIcon name={academyModuleIcons[index % academyModuleIcons.length]} />
                      </span>

                      <div className="academy-module-card__content">
                        <h3>{module}</h3>
                        <p>{academyTracks[index]?.description}</p>
                      </div>

                      <span className="academy-module-card__glow" aria-hidden="true" />
                    </article>
                  ))}
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="section" id="proof">
          <ScrollReveal animation="fade-up" className="shell proof-grid">
            <div className="tone-panel">
              <ScrollReveal animation="fade-up" className="section-heading">
                <p className="eyebrow">Năng lực và cam kết</p>

                <h2>Giá trị dịch vụ được khẳng định bằng tính minh bạch và độ tin cậy.</h2>
              </ScrollReveal>
              <ScrollReveal animation="scale-in" stagger className="proof-cards">
                {assuranceCards.map((card) => (
                  <article className="surface-card" key={card.title}>
                    <p className="eyebrow eyebrow--muted">{card.title}</p>
                    <p>{card.description}</p>
                  </article>
                ))}
              </ScrollReveal>
            </div>

            <ScrollReveal animation="slide-left" delay={200} as="aside" className="testimonial-card">
              <p className="testimonial-quote">
                &ldquo;Tracodi Labour cam kết nâng cao chất lượng dịch vụ, duy trì sự ổn định và minh bạch trong hoạt động, hướng tới trở thành đối tác cung ứng nhân lực đáng tin cậy trên thị trường toàn cầu.&rdquo;
              </p>
              <figure className="testimonial-portrait">
                <img
                  src="/img/CEO.png"
                  alt="Chân dung Tổng Giám đốc Lê Huỳnh Thương Minh"
                  width="320"
                  height="320"
                />
              </figure>
              <div className="testimonial-meta">
                <strong>Lê Huỳnh Thương Minh</strong>
                <span>Tổng Giám đốc, Công ty CP Xuất khẩu Lao động Tracodi</span>
              </div>
            </ScrollReveal>
          </ScrollReveal>
        </section>

        <section className="section section--compact" id="contact">
          <ScrollReveal animation="fade-up" className="shell cta-band">
            <div className="cta-band__copy">
              <p className="eyebrow eyebrow--soft">Đăng kí tư vấn</p>
              <h2>Đăng kí tư vấn miễn phí</h2>

            </div>

            <ScrollReveal animation="fade-up" delay={150} className="contact-layout">
              <ContactForm />

              <aside className="contact-card">
                {contactDetails.map((item) => (
                  <div key={item.label}>
                    <span className="contact-card__label">{item.label}</span>
                    {item.href ? (
                      <a className="contact-card__value" href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      <p className={`contact-card__value${item.label === "Trụ sở chính" ? " contact-card__address" : ""}`}>
                        {item.value}
                      </p>
                    )}
                  </div>
                ))}
              </aside>
            </ScrollReveal>
          </ScrollReveal>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
