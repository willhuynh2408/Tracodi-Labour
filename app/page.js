import ContactForm from "@/components/contact-form";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import {
  activeSectors,
  academyModules,
  academyTracks,
  assuranceCards,
  contactDetails,
  demandSnapshot,
  heroGallery,
  heroStats,
  markets,
  processSteps,
  proofMetrics
} from "@/lib/site-data";

export default function HomePage() {
  const [heroFeature, ...heroSecondary] = heroGallery;

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
              <p className="eyebrow">Xuất khẩu lao động có giấy phép cho các ngành công nghiệp</p>
              <h1>Từ nhân tài địa phương đến công trường toàn cầu.</h1>
              <p className="hero__lead">
                Tracodi thiết kế các hệ thống triển khai lao động chuẩn mực cho cả nhà tuyển dụng và người lao động, kết hợp tuyển dụng, đào tạo, điều phối visa và hỗ trợ sau khi đến thành một mô hình vận hành kỷ luật.
              </p>
              <div className="hero__actions">
                <a className="button button--primary" href="#contact">
                  Trò chuyện với đội tư vấn
                </a>
                <a className="button button--ghost" href="#process">
                  Xem quy trình triển khai
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
                  <h2>Tầm nhìn tương lai</h2>
                  <p>
                    Theo đuổi sự phong phú về cả vật chất lẫn tinh thần cho thực tập sinh, đồng thời đóng góp vào sự phát triển bền vững của cộng đồng.
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
                    <p className="eyebrow eyebrow--soft">Trọng tâm tuyển dụng hiện tại</p>
                    <h3>Các luồng tuyển dụng xây dựng, chăm sóc, sản xuất và logistics.</h3>
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
                    <h3>Kiểm soát tài liệu sẵn sàng cho kiểm toán.</h3>
                    <p>
                      Hợp đồng, y tế, chứng chỉ và hồ sơ visa được sắp xếp thông qua một trình tự được tài liệu hóa để giảm thiểu sự chậm trễ.
                    </p>
                  </article>
                  <article className="surface-card surface-card--large">
                    <p className="eyebrow eyebrow--muted">Lấy con người làm trung tâm</p>
                    <h3>Chuẩn bị cho người lao động để cải thiện tỷ lệ gắn bó.</h3>
                    <p>
                      Sẵn sàng về ngôn ngữ, định hướng văn hóa và hỗ trợ khi đến được coi là các giá trị cốt lõi chứ không phải những yếu tố phụ.
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
                    <p className="eyebrow eyebrow--soft">Trải nghiệm được chăm chút</p>
                    <h3>Giao diện phản ánh hoạt động kinh doanh: chuyên nghiệp, trật tự và chính xác.</h3>
                    <p>
                      Mọi giai đoạn, từ lúc tìm hiểu đến khi triển khai, đều được thiết kế để giảm thiểu rủi ro và làm rõ các bước tiếp theo.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--tinted" id="markets">
          <div className="shell">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">Thị trường đích</p>
                <h2>Chương trình xuất khẩu phù hợp với các ngành có nhu cầu thực tế.</h2>
              </div>
              <p>
                Lựa chọn thị trường dựa trên lộ trình hồ sơ, chất lượng nhà tuyển dụng và sự hỗ trợ người lao động cần thiết sau khi đến. Kết quả là sự phù hợp chặt chẽ hơn giữa hồ sơ ứng viên và bối cảnh điểm đến.
              </p>
            </div>

            <div className="market-grid">
              {markets.map((market) => (
                <article className="surface-card market-card" key={market.region}>
                  <p className="eyebrow eyebrow--muted">{market.region}</p>
                  <h3>{market.title}</h3>
                  <p>{market.description}</p>
                </article>
              ))}
            </div>

            <div className="market-lower">
              <article className="network-panel">
                <div className="network-panel__body">
                  <p className="eyebrow eyebrow--soft">Mạng lưới di chuyển</p>
                  <h3>Lộ trình rõ ràng từ tìm kiếm ứng viên đến tiếp nhận ở nước ngoài.</h3>
                  <p>
                    Thay vì hiển thị một bản đồ qua loa trang trí, chúng tôi phác họa logic thị trường: nơi có nhu cầu, các lĩnh vực đang hoạt động và mức độ hỗ trợ thay đổi theo mỗi khu vực.
                  </p>
                </div>
                <img src="/img/network-map.svg" alt="" width="900" height="760" aria-hidden="true" />
              </article>

              <article className="surface-card demand-card">
                <p className="eyebrow eyebrow--muted">Tóm tắt nhu cầu hiện tại</p>
                <div className="demand-list">
                  {demandSnapshot.map((item) => (
                    <div className="demand-item" key={item.label}>
                      <div className="demand-item__top">
                        <span>{item.label}</span>
                        <strong>{item.roles}</strong>
                      </div>
                      <div className={`progress${item.accent === "secondary" ? " progress--secondary" : ""}`}>
                        <span style={{ width: `${item.progress}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="process">
          <div className="shell">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">Luồng tuyển dụng</p>
                <h2>Mỗi bước đi giúp việc tin tưởng bước tiếp theo dễ dàng hơn.</h2>
              </div>
              <p>
                Hành trình diễn ra minh bạch cho cả hai bên. Nhà tuyển dụng thấy trạng thái nguồn và sự sẵn sàng của tài liệu. Người lao động thấy chính xác cách thức đánh giá, đào tạo, chuẩn bị tại đại sứ quán và triển khai diễn ra thế nào.
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
              <h2>Các chương trình đào tạo mang tính kỷ luật chứ không rập khuôn.</h2>
              <p className="section-lead section-lead--dark">
                Trải nghiệm học viện được thiết kế giống như các phần còn lại của hệ thống: có chiều sâu, rõ ràng và xây dựng sự tự tin. Ứng viên vượt qua các lộ trình tập trung với các cột mốc rõ ràng và sự chuẩn bị thực tế.
              </p>

              <div className="module-panel">
                <p className="eyebrow eyebrow--soft">Học phần tiêu biểu</p>
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
                <p className="eyebrow">Bằng chứng và sự đảm bảo</p>
                <h2>Dịch vụ mang lại cảm giác cao cấp khi niềm tin có thể nhận thấy rõ ràng.</h2>
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
                &ldquo;Tracodi đã mang đến cho chúng tôi một danh sách ngắn có cấu trúc và một vòng đời triển khai chuyên nghiệp. Trải nghiệm hệ thống phản ánh đúng tính chất dịch vụ: nghiêm túc, rõ ràng và hiệu quả.&rdquo;
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
              <p>
                Hệ thống được thiết kế để dễ dàng mở rộng nội dung, tích hợp CMS, phân tích dữ liệu và quy trình gửi thông tin thông qua API trong tương lai.
              </p>
            </div>

            <div className="contact-layout">
              <ContactForm />

              <aside className="contact-card">
                {contactDetails.map((item) => (
                  <div key={item.label}>
                    <span className="contact-card__label">{item.label}</span>
                    {item.href ? <a href={item.href}>{item.value}</a> : <p>{item.value}</p>}
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


