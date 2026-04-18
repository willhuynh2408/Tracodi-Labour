import ContactForm from "@/components/contact-form";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import {
  activeSectors,
  academyModules,
  academyTracks,
  assuranceCards,
  contactDetails,
  heroGallery,
  heroStats,
  markets,
  processSteps,
  proofMetrics
} from "@/lib/site-data";

export default function HomePage() {
  const [heroFeature, ...heroSecondary] = heroGallery;
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
            <div className="hero__copy">
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

              <div className="stats-grid">
                {heroStats.map((stat) => (
                  <article className={`stat-block stat-block--${stat.accent}`} key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </article>
                ))}
              </div>
            </div>

            <aside className="hero-showcase" aria-label="Employment and labor placement gallery">
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
            </aside>
          </div>
        </section>

        <section className="section" id="why">
          <div className="shell">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">Lý do chọn Tracodi</p>
                <h2>Nền tảng xuất khẩu lao động toàn diện.</h2>
              </div>
              <p>
                Chúng tôi định vị xuất khẩu lao động như một hệ điều hành. Mỗi lần triển khai được xử lý thông qua các quy trình chuẩn hóa: tìm kiếm, sàng lọc, tài liệu, chuẩn bị hồ sơ, lên lịch và chăm sóc tại điểm đến. Sự kỷ luật đó giảm thiểu khó khăn cho nhà tuyển dụng và tạo trải nghiệm rõ ràng hơn cho người lao động.
              </p>
            </div>

            <div className="tone-panel">
              <div className="why-grid">
                <div className="card-grid">
                  <article className="surface-card surface-card--large">
                    <p className="eyebrow eyebrow--muted">Ưu tiên tuân thủ</p>
                    <h3>Hệ thống hồ sơ chặt chẽ, sẵn sàng kiểm tra đối chiếu.</h3>
                    <p>
                      Hợp đồng, hồ sơ sức khỏe, chứng chỉ và giấy tờ visa được chuẩn bị theo quy trình rõ ràng nhằm hạn chế sai sót và rút ngắn thời gian xử lý.
                    </p>
                  </article>
                  <article className="surface-card surface-card--large">
                    <p className="eyebrow eyebrow--muted">Trọng tâm là con người</p>

                    <h3>Chuẩn bị kỹ cho người lao động để nâng cao khả năng thích nghi.</h3>

                    <p>
                      Năng lực ngoại ngữ, định hướng văn hóa và hỗ trợ sau xuất cảnh được xem là những yếu tố cốt lõi trong toàn bộ chương trình.
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
                </div>

                <article className="image-callout">
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
                </article>
              </div>
            </div>
          </div>
        </section>

      <section className="section section--tinted" id="markets">
        <div className="shell">
          <div className="markets-overview">
            <div className="markets-copy">
              <p className="eyebrow">Thị trường tiếp nhận</p>
              <h2>Chương trình xuất khẩu lao động phù hợp với nhu cầu tuyển dụng thực tế.</h2>
              <p>
                Việc lựa chọn thị trường được cân nhắc trên lộ trình hồ sơ, tiêu chuẩn đối tác tuyển dụng và mức độ hỗ trợ cần thiết dành cho người lao động sau khi làm việc ở nước ngoài. Nhờ đó, hồ sơ ứng viên được kết nối phù hợp hơn với yêu cầu của từng thị trường.
              </p>
            </div>
            <div className="market-grid">
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
            </div>
          </div>
        </div>
      </section>

        <section className="section" id="process">
          <div className="shell">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">Quy trình tuyển chọn</p>

                <h2>Mỗi bước rõ ràng để củng cố niềm tin cho bước tiếp theo.</h2>
              </div>
              <p>
                Toàn bộ hành trình được triển khai minh bạch cho cả đối tác tuyển dụng và người lao động. Doanh nghiệp nắm được tiến độ nguồn ứng viên và tình trạng hồ sơ, trong khi người lao động hiểu rõ cách thức kiểm tra, đào tạo, hoàn thiện thủ tục và xuất cảnh.
              </p>
            </div>

            <div className="process-grid">
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
            </div>
          </div>
        </section>

        <section className="section section--dark" id="academy">
          <div className="shell academy-grid">
            <div>
              <p className="eyebrow eyebrow--soft">Trung tâm đào tạo</p>

              <h2>Chương trình đào tạo bài bản, kỷ luật và sát thực tế.</h2>

              <p className="section-lead section-lead--dark">
                Mô hình đào tạo được thiết kế đồng bộ với toàn bộ hệ thống vận hành: rõ ràng, thực chất và tạo nền tảng tự tin cho ứng viên. Người lao động được học theo lộ trình tập trung với các cột mốc cụ thể và nội dung chuẩn bị sát với môi trường làm việc thực tế.
              </p>

              <div className="module-panel">
                <p className="eyebrow eyebrow--soft">Nội dung đào tạo tiêu biểu</p>
                <div className="module-grid">
                  {academyModules.map((module) => (
                    <span key={module}>{module}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="track-grid">
              {academyTracks.map((track) => (
                <article className="track-card" key={track.title}>
                  <h3>{track.title}</h3>
                  <p>{track.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell proof-grid">
            <div className="tone-panel">
              <div className="section-heading">
                <p className="eyebrow">Năng lực và cam kết</p>

                <h2>Giá trị dịch vụ được khẳng định bằng tính minh bạch và độ tin cậy.</h2>
              </div>
              <div className="proof-cards">
                {assuranceCards.map((card) => (
                  <article className="surface-card" key={card.title}>
                    <p className="eyebrow eyebrow--muted">{card.title}</p>
                    <p>{card.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="testimonial-card">
              <p className="testimonial-quote">
                &ldquo;Tracodi mang đến quy trình tuyển chọn rõ ràng, danh sách ứng viên phù hợp và cách triển khai chuyên nghiệp. Toàn bộ trải nghiệm thể hiện đúng bản chất dịch vụ: nghiêm túc, minh bạch và hiệu quả.&rdquo;
              </p>
              <div className="testimonial-meta">
                <strong>Lê Huỳnh Thương Minh</strong>
                <span>Tổng Giám đốc, Công ty CP Tập đoàn Xây Dựng Tracodi</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="section section--compact" id="contact">
          <div className="shell cta-band">
            <div className="cta-band__copy">
              <p className="eyebrow eyebrow--soft">Bắt đầu cuộc trò chuyện</p>
              <h2>Xây dựng cổng thông tin xuất khẩu lao động đáng tin cậy như chính chất lượng dịch vụ của chúng tôi.</h2>
              
            </div>

            <div className="contact-layout">
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
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
