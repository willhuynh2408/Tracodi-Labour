import ContactForm from "@/components/contact-form";
import ScrollReveal from "@/components/scroll-reveal";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import {
  activeSectors,
  academyGallery,
  academyModules,
  academyTracks,
  assuranceCards,
  contactDetails,
  heroGallery,
  heroStats,
  journeyMilestones,
  markets,
  processSteps,
  proofMetrics
} from "@/lib/site-data";

const academyModuleIcons = ["language", "school", "handshake", "workspace_premium"];

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
  const [heroFeature, ...heroSecondary] = heroGallery;
  const academyBubbles = academyGallery.slice(0, 3);
  const marketFlagSources = [
    "/img/flags/japan.svg",
    "/img/flags/korea.png",
    "/img/flags/taiwan.png",
    "/img/flags/malaysia.png"
  ];

  return (
    <>
      <a className="skip-link" href="#main-content">
        Chuyển tới nội dung
      </a>

      <SiteHeader />

      <main id="main-content">
        <section className="hero section" id="top">
          <div className="hero__backdrop" aria-hidden="true" />
          <div className="shell hero__grid">
            <ScrollReveal animation="fade-up" className="hero__copy">
              <p className="eyebrow">Doanh nghiệp xuất khẩu lao động được cấp phép cho nhiều lĩnh vực trọng điểm</p>
              <h1>Từ nguồn nhân lực Việt Nam đến thị trường lao động toàn cầu.</h1>
              <p className="hero__lead">
                Tracodi xây dựng quy trình cung ứng lao động bài bản cho đối tác tuyển dụng và người lao động, kết hợp tuyển chọn, đào tạo, hoàn thiện hồ sơ, điều phối visa và hỗ trợ sau xuất cảnh trong một mô hình vận hành chặt chẽ.
              </p>
              <div className="hero__actions">
                <a className="button button--primary" href="#contact">
                  Trao đổi với đội ngũ tư vấn
                </a>

                <a className="button button--ghost" href="#process">
                  Xem quy trình tuyển chọn
                </a>
              </div>

              <ScrollReveal animation="fade-up" delay={300} stagger className="stats-grid">
                {heroStats.map((stat) => (
                  <article className={`stat-block stat-block--${stat.accent}`} key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </article>
                ))}
              </ScrollReveal>
            </ScrollReveal>

            <ScrollReveal animation="slide-left" delay={200} as="aside" className="hero-showcase" aria-label="Employment and labor placement gallery">
              <article className="hero-showcase__feature">
                <img
                  src={heroFeature?.image ?? "/img/hero-structure.svg"}
                  alt={heroFeature?.alt ?? "Labour and employment showcase"}
                  width="1200"
                  height="900"
                />
                <div className="hero-showcase__feature-body">
                  <p className="eyebrow eyebrow--soft">{heroFeature?.label ?? "Employment pathways"}</p>
                  <h2>Tầm nhìn phát triển</h2>

                  <p>
                    Hướng tới sự phát triển toàn diện về vật chất và tinh thần cho người lao động, đồng thời đóng góp tích cực vào sự phát triển bền vững của cộng đồng.
                  </p>
                </div>
              </article>

              <div className="hero-showcase__rail">
                {heroSecondary.map((item) => (
                  <article className="hero-showcase__card" key={item.title}>
                    <img src={item.image} alt={item.alt} width="900" height="640" />
                    <div className="hero-showcase__card-body">
                      <p className="eyebrow eyebrow--soft">{item.label}</p>
                      <h3>{item.title}</h3>
                    </div>
                  </article>
                ))}
              </div>

              <div className="hero-showcase__summary">
                <div className="hero-showcase__summary-head">
                  <div>
                    <p className="eyebrow eyebrow--soft">Trọng tâm tuyển dụng hiện nay</p>

                    <h3>Các nhóm ngành trọng điểm gồm xây dựng, điều dưỡng, sản xuất và logistics.</h3>
                  </div>

                </div>
                <div className="pill-grid hero-pill-grid">
                  {activeSectors.map((sector) => (
                    <span key={sector}>{sector}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="section" id="why">
          <div className="shell">
            <ScrollReveal animation="fade-up" className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">Lý do chọn Tracodi Labour</p>
                <h2>Nền tảng xuất khẩu lao động toàn diện.</h2>
              </div>
              <p>
                Chúng tôi vận hành quy trình cung ứng nhân lực khép kín, minh bạch
                từ tuyển chọn, đào tạo đến quản lý và hỗ trợ trong suốt quá trình làm
                việc tại nước ngoài. Với định hướng đề cao tính tuân thủ, ổn định và
                trách nhiệm, Tracodi Labour cam kết mang đến giải pháp nhân lực
                đáng tin cậy, đồng thời xây dựng mối quan hệ hợp tác lâu dài với các
                đối tác quốc tế.
              </p>
            </ScrollReveal>

            <div className="tone-panel">
              <div className="why-grid">
                <ScrollReveal animation="scale-in" stagger className="card-grid">
                  <article className="surface-card surface-card--large">
                    <p className="eyebrow eyebrow--muted">Ưu tiên tuân thủ</p>
                    <h3>Quy trình khép kín với kiểm soát chất lượng.</h3>
                    <p>
                      Vận hành quy trình đồng bộ từ tuyển chọn, đào tạo đến
                      phái cử và hỗ trợ sau xuất cảnh, đảm bảo tính nhất quán,
                      minh bạch và kiểm soát chất lượng trong toàn bộ quá
                      trình                    </p>
                  </article>
                  <article className="surface-card surface-card--large">
                    <p className="eyebrow eyebrow--muted">Trọng tâm là con người</p>

                    <h3>Chuẩn bị kỹ cho người lao động để nâng cao khả năng thích nghi.</h3>

                    <p>
                      Năng lực ngoại ngữ, kỹ năng nghề, tác phong chuyên nghiệp được xem là những yếu tố cốt lõi trong toàn bộ chương trình.
                    </p>
                  </article>
                  <article className="surface-card surface-card--metrics">
                    {proofMetrics.map((metric) => (
                      <div className={`metric metric--${metric.accent}`} key={metric.label}>
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                      </div>
                    ))}
                  </article>
                </ScrollReveal>

                <ScrollReveal animation="slide-left" delay={150} as="article" className="image-callout">
                  <img
                    src="/img/network-map.svg"
                    alt="Bản đồ minh họa cho mạng lưới di chuyển lao động toàn cầu"
                    width="820"
                    height="760"
                  />
                  <div className="image-callout__body">
                    <p className="eyebrow eyebrow--soft">Trải nghiệm được đầu tư</p>

                    <h3>Giao diện thể hiện đúng tinh thần dịch vụ: chuyên nghiệp, mạch lạc và chuẩn xác.</h3>

                    <p>
                      Mỗi giai đoạn, từ lúc tìm hiểu đến khi xuất cảnh, đều được xây dựng để giảm rủi ro và giúp khách hàng nắm rõ từng bước tiếp theo.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
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

        <section className="section section--tinted" id="markets">
          <div className="shell">
            <div className="markets-overview">
              <ScrollReveal animation="fade-up" className="markets-copy">
                <div>
                  <p className="eyebrow">Thị trường tiếp nhận</p>
                  <h2>Chương trình xuất khẩu lao động phù hợp với nhu cầu tuyển dụng thực tế.</h2>
                </div>
                <p>
                  Việc lựa chọn thị trường được cân nhắc trên lộ trình hồ sơ, tiêu chuẩn đối tác tuyển dụng và mức độ hỗ trợ cần thiết dành cho người lao động sau khi làm việc ở nước ngoài. Nhờ đó, hồ sơ ứng viên được kết nối phù hợp hơn với yêu cầu của từng thị trường.
                </p>
              </ScrollReveal>
              <ScrollReveal animation="slide-right" stagger className="market-grid">
                {markets.map((market, index) => (
                  <article className="surface-card market-card" key={market.region}>
                    <img
                      className="market-card__flag"
                      src={marketFlagSources[index % marketFlagSources.length]}
                      alt=""
                      aria-hidden="true"
                    />
                    <p className="eyebrow eyebrow--muted">{market.region}</p>
                    <h3>{market.title}</h3>
                    <p>{market.description}</p>
                  </article>
                ))}
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="section" id="process">
          <div className="shell">
            <ScrollReveal animation="fade-up" className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">Quy trình tuyển chọn</p>

                <h2>Mỗi bước rõ ràng để củng cố niềm tin cho bước tiếp theo.</h2>
              </div>

              <div>
                <p>
                  Toàn bộ hành trình được triển khai minh bạch cho cả đối tác tuyển dụng và người lao động. Doanh nghiệp nắm được tiến độ nguồn ứng viên và tình trạng hồ sơ, trong khi người lao động hiểu rõ cách thức kiểm tra, đào tạo, hoàn thiện thủ tục và xuất cảnh.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" stagger className="process-grid">
              {processSteps.map((step) => (
                <article
                  className={`flow-card${step.accent === "secondary" ? " flow-card--secondary" : ""}`}
                  key={step.number}
                >
                  <strong>{step.number}</strong>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </ScrollReveal>
          </div>
        </section>

        <section className="section section--dark academy-section" id="academy">
          <div className="shell academy-shell">
            <ScrollReveal animation="fade-up" className="academy-intro">
              <p className="eyebrow eyebrow--soft">Trung tâm đào tạo</p>

              <h2>Chương trình đào tạo bài bản, kỷ luật và sát thực tế.</h2>

              <p className="section-lead section-lead--dark">
                Mô hình đào tạo được thiết kế đồng bộ với toàn bộ hệ thống vận hành: rõ ràng, thực chất và tạo nền tảng tự tin cho ứng viên. Người lao động được học theo lộ trình tập trung với các cột mốc cụ thể và nội dung chuẩn bị sát với môi trường làm việc thực tế.
              </p>
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
                <h3 className="academy-modules__title">Nội dung đào tạo tiêu biểu</h3>
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
              <p className="eyebrow eyebrow--soft">Bắt đầu cuộc trò chuyện</p>
              <h2>Xây dựng cổng thông tin xuất khẩu lao động đáng tin cậy như chính chất lượng dịch vụ của chúng tôi.</h2>

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
