"use client";

import { useState } from "react";
import ScrollReveal from "@/components/scroll-reveal";
import { defaultRecruitmentTabs } from "@/lib/cms/default-content";

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

function normalizeJob(job) {
  return {
    ...job,
    image: job.image || job.imageUrl,
    details:
      job.details ||
      [
        { label: "Số lượng:", value: job.quantity, icon: "quantity" },
        { label: "Lương:", value: job.salary, icon: "salary" },
        { label: "Địa chỉ:", value: job.location, icon: "location" },
        { label: "Phỏng vấn:", value: job.interviewDateLabel, icon: "interview" }
      ].filter((detail) => detail.value)
  };
}

function normalizeTabs(tabs) {
  return tabs.map((tab) => ({
    ...tab,
    type: tab.type || tab.kind,
    cards: tab.cards || tab.aviationCards || [],
    jobs: (tab.jobs || []).map(normalizeJob)
  }));
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
            <div key={`${job.field}-${detail.label}-${detail.value}`}>
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
          <li key={item.text || item}>- {item.text || item}</li>
        ))}
      </ul>
    </article>
  );
}

export default function RecruitmentSection({ content, tabs = defaultRecruitmentTabs }) {
  const sectionContent = {
    ctaHref: "#contact",
    ctaLabel: "Ứng tuyển ngay",
    eyebrow: "Tuyển dụng",
    title: "Thông tin tuyển dụng mới nhất",
    ...(content || {})
  };
  const normalizedTabs = normalizeTabs(tabs.length ? tabs : defaultRecruitmentTabs);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = normalizedTabs[activeIndex] || normalizedTabs[0];

  return (
    <section className="section recruitment-section" id="process">
      <div className="shell">
        <ScrollReveal animation="fade-up" className="recruitment-heading">
          <p className="eyebrow">{sectionContent.eyebrow}</p>
          <h2>{sectionContent.title}</h2>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" stagger className="recruitment-tabs" role="tablist" aria-label="Nhóm tuyển dụng">
          {normalizedTabs.map((tab, index) => (
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
            {activeTab.jobs.slice(0, 8).map((job, index) => (
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
          <a className="button button--primary recruitment-cta__button" href={sectionContent.ctaHref || "#contact"}>
            {sectionContent.ctaLabel}
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
