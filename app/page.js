import ContactForm from "@/components/contact-form";
import RecruitmentSection from "@/components/recruitment-section";
import ScrollReveal from "@/components/scroll-reveal";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { academyModules, academyTracks, overviewMetrics } from "@/lib/site-data";

const featuredMarkets = [
  {
    region: "Nhật Bản",
    image: "/img_Tracodi/nhật bản.png",
    description:
      "Thu nhập ổn định - Môi trường chuyên nghiệp. Cơ hội nâng cao tay nghề và tích luỹ tài chính tương lai"
  },
  {
    region: "Đài Loan",
    image: "/img_Tracodi/đài loan.png",
    description:
      "Chi phí thấp - Dễ đăng ký - Xuất cảnh nhanh. Phù hợp cho người mới bắt đầu với nhiều đơn hàng ổn định và quy trình đơn giản"
  },
  {
    region: "Châu Âu",
    image: "/img_Tracodi/châu âu.png",
    description:
      "Vừa học vừa làm - Có cơ hội phát triển lâu dài. Phù hợp cho người muốn học nghề, nâng cao thu nhập và định cư tại châu âu"
  }
];

export default function HomePage() {
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
              <p className="hero__eyebrow">Đào tạo quốc tế</p>
              <h1>Kết nối nghề nghiệp toàn cầu</h1>
              <span className="hero__rule" aria-hidden="true" />
              <p className="hero__lead">
                <span>Định hướng nghề nghiệp - Đào tạo quốc tế</span>
                <span>Đồng hành cùng tương lai bền vững của bạn</span>
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

        <section className="section overview-section" id="why">
          <div className="shell">
            <div className="overview-layout">
              <ScrollReveal animation="scale-in" as="figure" className="overview-image">
                {[
                  {
                    src: "/img/Picture1.jpg",
                    alt: "Hoạt động đào tạo và chuẩn bị nguồn lao động tại Tracodi Labour"
                  },
                  {
                    src: "/img/Picture2.jpg",
                    alt: "Người lao động trong chương trình đào tạo và định hướng nghề nghiệp"
                  },
                  {
                    src: "/img/Picture3.jpg",
                    alt: "Không gian kết nối và vận hành chương trình xuất khẩu lao động"
                  }
                ].map((item, index) => (
                  <img
                    className={`overview-image__slide overview-image__slide--${index + 1}`}
                    src={item.src}
                    alt={item.alt}
                    width="598"
                    height="666"
                    loading={index === 0 ? "eager" : "lazy"}
                    key={item.src}
                  />
                ))}
              </ScrollReveal>

              <ScrollReveal animation="slide-left" delay={120} className="overview-copy">
                <p className="eyebrow">Tổng quan</p>
                <h2>Về Tracodi Labour</h2>
                <p className="overview-intro">Hơn 30 năm kết nối nguồn nhân lực Việt Nam với thị trường quốc tế.</p>
                <p>
                  TRACODI LABOUR là tổ chức giáo dục định hướng và tư vấn nghề nghiệp quốc tế, không chỉ dừng lại ở lĩnh vực giới thiệu việc làm hay xuất khẩu lao động phổ thông. Được phát triển từ hệ thống TRACODI Group với nền tảng kinh nghiệm từ năm 1993 trong lĩnh vực cung ứng nguồn nhân lực quốc tế, Tracodi Labour đã hỗ trợ hơn 21.000 lao động Việt Nam học tập và làm việc tại Nhật Bản, Đài Loan thông qua quy trình minh bạch và lộ trình rõ ràng.
                  <br />
                  Hiện nay, Tracodi Labour mở rộng hoạt động không chỉ tại các nước Châu Á như Nhật Bản, Hàn Quốc, Đài Loan mà còn hướng đến thị trường Châu Âu như Đức, Pháp, Đan Mạch và Latvia, đồng thời nâng cao tiêu chuẩn đào tạo theo định hướng quốc tế từ năm 2026.
                </p>

                <div className="overview-metric-grid" aria-label="Chỉ số Tracodi Labour">
                  {overviewMetrics.map((metric) => (
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
                src="/Tracodilabour.mp4"
                poster="/thumbnail.png"
                controls
                preload="metadata"
                playsInline
              >
                Trình duyệt của bạn không hỗ trợ phát video.
              </video>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={180} className="overview-process-image">
              <img
                src="/img_Tracodi/process.png"
                alt="Quy trình tư vấn nghề nghiệp quốc tế của Tracodi Labour"
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
            <div className="academy-top">
              <ScrollReveal animation="fade-up" className="academy-intro">
                <div className="academy-inline-heading">
                  <p className="eyebrow eyebrow--soft">Đào tạo &amp; quy trình</p>
                  <h2>Đào tạo bài bản - vững bước toàn cầu</h2>
                </div>

                <p className="academy-lead">
                  Tracodi Labour luôn hỗ trợ người lao động từ tuyển chọn, đào tạo, phỏng vấn đến hoàn thiện hồ sơ và xuất cảnh với quy trình rõ ràng.
                </p>
                <span className="academy-rule" aria-hidden="true" />

                <ul className="academy-checklist" aria-label="Nội dung đào tạo">
                  <li>Đào tạo tiếng Nhật, tiếng Đức, tiếng Trung theo nhu cầu thị trường</li>
                  <li>Tập trung giao tiếp thực tế và thuật ngữ chuyên ngành</li>
                  <li>Lộ trình đào tạo theo chuẩn đầu ra ( Nhật: N4, Đức: B1)</li>
                  <li>Đánh giá định kỳ nhằm đảm bảo chất lượng học viên</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal animation="scale-in" delay={140} as="div" className="academy-visual" aria-label="Hình ảnh đào tạo và tư vấn">
                <figure className="academy-visual__bubble academy-visual__bubble--main">
                  <img
                    src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=80"
                    alt="Buổi đào tạo và định hướng người lao động"
                    loading="lazy"
                  />
                </figure>
                <figure className="academy-visual__bubble academy-visual__bubble--side">
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=720&q=80"
                    alt="Tư vấn quy trình hồ sơ và phỏng vấn"
                    loading="lazy"
                  />
                </figure>
                <figure className="academy-visual__bubble academy-visual__bubble--bottom">
                  <img
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=720&q=80"
                    alt="Người lao động chuẩn bị xuất cảnh"
                    loading="lazy"
                  />
                </figure>
              </ScrollReveal>
            </div>

            <ScrollReveal animation="fade-up" delay={100} className="academy-modules">
              <div className="academy-modules__heading">
                <h3 className="academy-modules__title">Quy trình tư vấn nghề nghiệp quốc tế</h3>
              </div>

              <div className="academy-module-showcase">
                <ScrollReveal animation="fade-up" stagger className="academy-module-grid">
                  {academyModules.map((module, index) => (
                    <article className="academy-module-card" key={module}>
                      <span className="academy-module-card__number" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="academy-module-card__content">
                        <h3>{module}</h3>
                        <p>{academyTracks[index]?.description}</p>
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
              <p className="eyebrow eyebrow--soft">Đăng ký</p>
              <h2>
                <span>ĐĂNG KÝ TƯ VẤN MIỄN PHÍ</span>
                <span>NHẬN ĐƠN HÀNG PHÙ HỢP 24H</span>
              </h2>
            </div>

            <ScrollReveal animation="fade-up" delay={150} className="contact-layout">
              <ContactForm />
            </ScrollReveal>
          </ScrollReveal>
        </section>
      </main>

      <SiteFooter />

      <aside className="floating-contact" aria-label="Liên hệ nhanh">
        <a className="floating-contact__top" href="#top" aria-label="Quay về đầu trang">
          <span aria-hidden="true" />
        </a>
        <a
          className="floating-contact__bubble"
          href="https://zalo.me/0963222837"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Liên hệ Zalo hotline 0963222837"
        >
          <span>Luôn sẵn sàng tư vấn 24/7</span>
          <strong>LIÊN HỆ NGAY</strong>
          <small>0963222837</small>
        </a>
      </aside>
    </>
  );
}
