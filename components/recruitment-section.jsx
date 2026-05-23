"use client";

import { useState } from "react";
import ScrollReveal from "@/components/scroll-reveal";

const recruitmentGroups = [
  {
    label: "Thị trường Châu Á",
    jobs: [
      {
        title: "Tuyển 40 nữ",
        field: "Chế biến thực phẩm",
        image: "/img_Tracodi/chế biến thực phẩm.png",
        details: [
          { label: "Số lượng:", value: "18", icon: "quantity" },
          { label: "Lương:", value: "179.000 Yên + Làm thêm", icon: "salary" },
          { label: "Địa chỉ:", value: "Hokkaido", icon: "location" },
          { label: "Phỏng vấn:", value: "29/05/2026", icon: "interview" }
        ]
      },
      {
        title: "Tuyển 24 nam",
        field: "Cơ khí chế tạo",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        details: [
          { label: "Số lượng:", value: "24", icon: "quantity" },
          { label: "Lương:", value: "185.000 Yên + Làm thêm", icon: "salary" },
          { label: "Địa chỉ:", value: "Aichi", icon: "location" },
          { label: "Phỏng vấn:", value: "08/06/2026", icon: "interview" }
        ]
      },
      {
        title: "Tuyển 18 nữ",
        field: "May mặc công nghiệp",
        image:
          "https://images.unsplash.com/photo-1618587194716-40490bdba417?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        details: [
          { label: "Số lượng:", value: "18", icon: "quantity" },
          { label: "Lương:", value: "172.000 Yên + Làm thêm", icon: "salary" },
          { label: "Địa chỉ:", value: "Osaka", icon: "location" },
          { label: "Phỏng vấn:", value: "15/06/2026", icon: "interview" }
        ]
      },
      {
        title: "Tuyển 01 nam",
        field: "Linh kiện ô tô",
        image: "/img_Tracodi/linh kiện ô tô.png",
        details: [
          { label: "Số lượng:", value: "18", icon: "quantity" },
          { label: "Lương:", value: "29.500 ĐT + Làm thêm", icon: "salary" },
          { label: "Địa chỉ:", value: "Đào Viên", icon: "location" },
          { label: "Phỏng vấn:", value: "12/05/2026", icon: "interview" }
        ]
      }
    ]
  },
  {
    label: "Thị trường Châu Âu",
    jobs: [
      {
        title: "Tuyển 30 nam nữ",
        field: "Điều dưỡng viên",
        image:
          "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=720&q=80",
        details: [
          { label: "Số lượng:", value: "30", icon: "quantity" },
          { label: "Lương:", value: "2.300 EUR + Phụ cấp", icon: "salary" },
          { label: "Địa chỉ:", value: "Đức", icon: "location" },
          { label: "Phỏng vấn:", value: "18/06/2026", icon: "interview" }
        ]
      },
      {
        title: "Tuyển 20 nam",
        field: "Nhà hàng khách sạn",
        image:
          "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=720&q=80",
        details: [
          { label: "Số lượng:", value: "20", icon: "quantity" },
          { label: "Lương:", value: "2.000 EUR + Làm thêm", icon: "salary" },
          { label: "Địa chỉ:", value: "Ba Lan", icon: "location" },
          { label: "Phỏng vấn:", value: "25/06/2026", icon: "interview" }
        ]
      },
      {
        title: "Tuyển 16 nam",
        field: "Xây dựng dân dụng",
        image:
          "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=720&q=80",
        details: [
          { label: "Số lượng:", value: "16", icon: "quantity" },
          { label: "Lương:", value: "2.200 EUR + Phụ cấp", icon: "salary" },
          { label: "Địa chỉ:", value: "Romania", icon: "location" },
          { label: "Phỏng vấn:", value: "02/07/2026", icon: "interview" }
        ]
      },
      {
        title: "Tuyển 12 nữ",
        field: "Chế biến thực phẩm",
        image:
          "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&w=720&q=80",
        details: [
          { label: "Số lượng:", value: "12", icon: "quantity" },
          { label: "Lương:", value: "1.950 EUR + Làm thêm", icon: "salary" },
          { label: "Địa chỉ:", value: "Hungary", icon: "location" },
          { label: "Phỏng vấn:", value: "10/07/2026", icon: "interview" }
        ]
      }
    ]
  },
  {
    label: "Tuyển sinh Hàng Không",
    jobs: [
      {
        title: "Nhóm tuyển sinh",
        field: "Tiếp viên hàng không",
        image:
          "https://images.unsplash.com/photo-1540339832862-474599807836?auto=format&fit=crop&w=720&q=80",
        details: [
          { label: "Thu nhập:", value: "18 - 80 triệu/tháng", icon: "salary" },
          { label: "Môi trường:", value: "Làm việc quốc tế", icon: "location" },
          { label: "Cơ hội:", value: "Bay trong và ngoài nước", icon: "quantity" },
          { label: "Đào tạo:", value: "Cơ bản đến nâng cao", icon: "interview" }
        ]
      },
      {
        title: "Nhóm tuyển sinh",
        field: "Nhân viên sân bay",
        image:
          "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=720&q=80",
        details: [
          { label: "Thu nhập:", value: "8 - 80 triệu/tháng", icon: "salary" },
          { label: "Vị trí:", value: "Mặt đất, an ninh, vé, CSKH, kỹ thuật...", icon: "quantity" },
          { label: "Nơi làm:", value: "Các sân bay lớn", icon: "location" },
          { label: "Lộ trình:", value: "Phát triển trong ngành hàng không", icon: "interview" }
        ]
      },
      {
        title: "Nhóm tuyển sinh",
        field: "Phi công hàng không",
        image:
          "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=720&q=80",
        details: [
          { label: "Thu nhập:", value: "180 - 300 triệu/tháng", icon: "salary" },
          { label: "Đào tạo:", value: "3 - 4 năm theo chuẩn quốc tế", icon: "interview" },
          { label: "Làm việc:", value: "Hãng hàng không quốc tế", icon: "location" },
          { label: "Cơ hội:", value: "Phát triển và định cư lâu dài", icon: "quantity" }
        ]
      },
      {
        title: "Điều kiện",
        field: "Đối tượng tuyển sinh",
        variant: "info",
        image:
          "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=720&q=80",
        details: [
          { label: "Độ tuổi", value: "Từ 18 - 30 tuổi", icon: "quantity" },
          { label: "Học vấn", value: "Tốt nghiệp THPT trở lên", icon: "interview" },
          { label: "Sức khỏe", value: "Ngoại hình & sức khỏe tốt", icon: "location" },
          { label: "Lý lịch", value: "Không tiền án hình sự", icon: "salary" }
        ]
      },
      {
        title: "Chi phí",
        field: "Học phí chương trình",
        variant: "info",
        image:
          "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=720&q=80",
        details: [
          { label: "Theo ngành", value: "Từ 50 - 200 triệu", icon: "salary" },
          { label: "Phi công", value: "5 - 7 tỷ liên kết đào tạo", icon: "interview" },
          { label: "Ngắn hạn", value: "8 - 15 triệu", icon: "quantity" },
          { label: "Bao gồm", value: "Thi TOEIC lần 1", icon: "location" }
        ]
      }
    ]
  }
];

function JobInfoIcon({ type }) {
  const icons = {
    quantity: (
      <path d="M7.2 10.6a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2Zm9.6 0a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2ZM2.9 18.7c.25-2.7 2.02-4.55 4.3-4.55s4.05 1.85 4.3 4.55H2.9Zm9.6 0c.25-2.7 2.02-4.55 4.3-4.55s4.05 1.85 4.3 4.55h-8.6Z" />
    ),
    salary: (
      <path d="M4.2 6.2h15.6v11.6H4.2V6.2Zm1.8 2v7.6h12V8.2H6Zm6 6.2a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8Z" />
    ),
    location: (
      <path d="M12 2.8a6.2 6.2 0 0 0-6.2 6.2c0 4.65 6.2 12.2 6.2 12.2S18.2 13.65 18.2 9A6.2 6.2 0 0 0 12 2.8Zm0 8.65A2.45 2.45 0 1 1 12 6.55a2.45 2.45 0 0 1 0 4.9Z" />
    ),
    interview: (
      <path d="M7 3.2h2v2h6v-2h2v2h2.2v15H4.8v-15H7v-2Zm10.2 7.2H6.8v7.8h10.4v-7.8ZM6.8 7.2v1.4h10.4V7.2H6.8Z" />
    )
  };

  return (
    <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
      {icons[type] ?? icons.quantity}
    </svg>
  );
}

export default function RecruitmentSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeGroup = recruitmentGroups[activeIndex];

  return (
    <section className="section recruitment-section" id="process">
      <div className="shell">
        <ScrollReveal animation="fade-up" className="recruitment-heading">
          <p className="eyebrow">Tuyển dụng</p>
          <h2>Thông tin tuyển dụng mới nhất</h2>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" stagger className="recruitment-tabs" role="tablist" aria-label="Nhóm tuyển dụng">
          {recruitmentGroups.map((group, index) => (
            <button
              className={`recruitment-tab${index === activeIndex ? " recruitment-tab--active" : ""}`}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-controls="recruitment-panel"
              id={`recruitment-tab-${index}`}
              key={group.label}
              onClick={() => setActiveIndex(index)}
            >
              {group.label}
            </button>
          ))}
        </ScrollReveal>

        <ScrollReveal
          animation="fade-up"
          stagger
          className="recruitment-grid"
          role="tabpanel"
          id="recruitment-panel"
          aria-labelledby={`recruitment-tab-${activeIndex}`}
          key={activeGroup.label}
        >
          {activeGroup.jobs.map((job, index) => (
            <article
              className={`recruitment-card${job.variant ? ` recruitment-card--${job.variant}` : ""}`}
              key={`${activeGroup.label}-${job.title}-${job.field}-${index}`}
            >
              {job.variant === "info" ? (
                <>
                  <h3 className="recruitment-card__ribbon">
                    {job.title} {job.field}
                  </h3>
                  <img className="recruitment-card__image" src={job.image} alt={job.field} loading="lazy" />
                </>
              ) : (
                <img className="recruitment-card__image" src={job.image} alt={`${job.title} ${job.field}`} loading="lazy" />
              )}

              <div className="recruitment-card__body">
                {job.variant === "info" ? null : (
                  <h3>
                    <span>{job.title}</span>
                    <span>{job.field}</span>
                  </h3>
                )}

                {job.variant === "info" ? (
                  <div className="recruitment-info-details">
                    {job.details.map((detail) => (
                      <div className="recruitment-info-detail" key={`${job.field}-${detail.label}`}>
                        <span className="recruitment-info-detail__icon" aria-hidden="true">
                          <JobInfoIcon type={detail.icon} />
                        </span>
                        <strong>{detail.label}</strong>
                        <span>{detail.value}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <dl className="recruitment-card__details">
                    {job.details.map((detail) => (
                      <div key={`${job.field}-${detail.label}`}>
                        <dt>
                          <JobInfoIcon type={detail.icon} />
                          {detail.label}
                        </dt>
                        <dd>{detail.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
