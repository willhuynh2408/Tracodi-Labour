"use client";

import { useEffect, useState } from "react";

import { navLinks } from "@/lib/site-data";

export default function SiteHeader() {
  const [expanded, setExpanded] = useState(false);
  const [compact, setCompact] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const updateHeader = () => {
      setCompact(window.scrollY > 12);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateHeader);
    };
  }, []);

  useEffect(() => {
    const collapseMenu = () => {
      if (window.innerWidth > 992) {
        setExpanded(false);
      }
    };

    window.addEventListener("resize", collapseMenu);

    return () => {
      window.removeEventListener("resize", collapseMenu);
    };
  }, []);

  useEffect(() => {
  const sectionLinks = navLinks.filter((link) => link.href.startsWith("#"));

  const updateActiveByScroll = () => {
    const headerOffset = 120;
    let current = "";

    for (const link of sectionLinks) {
      const section = document.querySelector(link.href);
      if (!section) continue;

      const rect = section.getBoundingClientRect();

      if (rect.top <= headerOffset && rect.bottom >= headerOffset) {
        current = link.href;
      }
    }

    if (!current && window.scrollY < 100) {
      current = "#top";
    }

    setActiveLink(current);
  };

  updateActiveByScroll();
  window.addEventListener("scroll", updateActiveByScroll, { passive: true });
  window.addEventListener("resize", updateActiveByScroll);

  return () => {
    window.removeEventListener("scroll", updateActiveByScroll);
    window.removeEventListener("resize", updateActiveByScroll);
  };
}, []);

  return (
    <header className={`site-header${compact ? " is-compact" : ""}`} data-header>
      <div className="shell site-header__shell">
        <a className="brand" href="#top" aria-label="Trang chủ Tracodi">
          <span className="brand-mark" aria-hidden="true">
            TCD
          </span>
          <span className="brand-copy">
            <span className="brand-name">Tracodi</span>
            <span className="brand-tag">Tracodi Labour</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={expanded}
            aria-controls="mobile-menu"
            onClick={() => setExpanded((open) => !open)}
          >
            <span />
            <span />
            <span />
            <span className="sr-only">Bật/tắt thanh điều hướng</span>
          </button>

          <div className="nav-links nav-links--desktop">
            {navLinks.map((link) => (
              <div className="nav-link-item" key={link.href}>
                <a
                  href={link.href}
                  className={activeLink === link.href ? "is-active" : ""}
                >
                  {link.label}
                </a>
              </div>
            ))}
          </div>

          <a className="button button--primary nav-cta" href="#contact">
            Yêu cầu tư vấn
          </a>
        </nav>
      </div>

      {!expanded ? null : (
        <div className="mobile-menu shell" id="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeLink === link.href ? "is-active" : ""}
                onClick={() => {
                  setExpanded(false);
              }}
            >
              {link.label}
            </a>
          ))}
          <a className="button button--primary" href="#contact" onClick={() => setExpanded(false)}>
            Yêu cầu tư vấn
          </a>
        </div>
      )}
    </header>
  );
}
