"use client";

import { useState } from "react";
import ScrollReveal from "@/components/scroll-reveal";

const asiaJobs = [
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
];

const europeJobs = [
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
];

const aviationCards = [
  {
    title: "Nhóm tiếp viên hàng không",
    items: [
      "Lương: 18 - 80 triệu/ tháng",
      "Làm việc trong môi trường quốc tế",
      "Cơ hội bay trong và ngoài nước",
      "Đào tạo cơ bản đến nâng cao"
    ]
  },
  {
    title: "Nhóm nhân viên sân bay",
    items: [
      "Lương: 8 - 80 triệu/ tháng",
      "Vị trí: Nhân viên mặt đất, an ninh, vé, chăm sóc khách hàng, kỹ thuật...",
      "Làm việc tại các sân bay lớn",
      "Cơ hội phát triển trong ngành hàng không"
    ]
  },
  {
    title: "Nhóm phi công hàng không",
    items: [
      "Lương: 180 - 300 triệu/ tháng",
      "Đào tạo 3 - 4 năm theo chuẩn quốc tế",
      "Làm việc tại hãng hàng không quốc tế",
      "Cơ hội phát triển và định cư lâu dài"
    ]
  },
  {
    title: "Đối tượng tuyển sinh",
    wide: true,
    items: [
      "Từ 18 - 30 tuổi",
      "Tốt nghiệp THPT trở lên",
      "Ngoại hình & sức khỏe tốt",
      "Không tiền án hình sự"
    ]
  },
  {
    title: "Học phí",
    wide: true,
    items: [
      "Từ 50 - 200 Triệu (tùy ngành)",
      "Phi công: 5-7 tỷ (liên kết đào tạo)",
      "Khóa ngắn hạn: 8 - 15 triệu",
      "Đã bao gồm thi Toeic lần 1"
    ]
  }
];

const tabs = [
  { label: "Thị trường Châu Á", type: "jobs", jobs: [...asiaJobs] },
  { label: "Thị trường Châu Âu", type: "jobs", jobs: [...europeJobs] },
  { label: "Tuyển sinh Hàng Không", type: "aviation", cards: aviationCards }
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

function JobCard({ job, index }) {
  return (
    <article className="recruitment-card">
      <img className="recruitment-card__image" src={job.image} alt={`${job.title} ${job.field}`} loading={index < 4 ? "eager" : "lazy"} />

      <div className="recruitment-card__body">
        <h3>
          <span>{job.title}</span>
          <span>{job.field}</span>
        </h3>

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
      </div>
    </article>
  );
}

function AviationCard({ card }) {
  return (
    <article className={`aviation-card${card.wide ? " aviation-card--wide" : ""}`}>
      <h3>{card.title}</h3>
      <ul>
        {card.items.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
    </article>
  );
}

export default function RecruitmentSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = tabs[activeIndex];

  return (
    <section className="section recruitment-section" id="process">
      <div className="shell">
        <ScrollReveal animation="fade-up" className="recruitment-heading">
          <p className="eyebrow">Tuyển dụng</p>
          <h2>Thông tin tuyển dụng mới nhất</h2>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" stagger className="recruitment-tabs" role="tablist" aria-label="Nhóm tuyển dụng">
          {tabs.map((tab, index) => (
            <button
              className={`recruitment-tab${index === activeIndex ? " recruitment-tab--active" : ""}`}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-controls="recruitment-panel"
              id={`recruitment-tab-${index}`}
              key={tab.label}
              onClick={() => setActiveIndex(index)}
            >
              {tab.label}
            </button>
          ))}
        </ScrollReveal>

        {activeTab.type === "jobs" ? (
          <ScrollReveal
            animation="fade-up"
            stagger
            className="recruitment-grid"
            role="tabpanel"
            id="recruitment-panel"
            aria-labelledby={`recruitment-tab-${activeIndex}`}
            key={activeTab.label}
          >
            {activeTab.jobs.map((job, index) => (
              <JobCard job={job} index={index} key={`${activeTab.label}-${job.title}-${job.field}-${index}`} />
            ))}
          </ScrollReveal>
        ) : (
          <ScrollReveal
            animation="fade-up"
            stagger
            className="aviation-grid"
            role="tabpanel"
            id="recruitment-panel"
            aria-labelledby={`recruitment-tab-${activeIndex}`}
            key={activeTab.label}
          >
            {activeTab.cards.map((card) => (
              <AviationCard card={card} key={card.title} />
            ))}
          </ScrollReveal>
        )}

        <ScrollReveal animation="fade-up" delay={120} className="recruitment-cta">
          <a className="button button--primary recruitment-cta__button" href="#contact">
            Ứng tuyển ngay
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

