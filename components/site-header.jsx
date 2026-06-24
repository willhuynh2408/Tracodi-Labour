"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/lib/site-data";

export default function SiteHeader() {
  const [expanded, setExpanded] = useState(false);
  const [compact, setCompact] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const scrollLockRef = useRef(null);

  const getHeaderOffset = () => {
    const header = document.querySelector("[data-header]");
    if (!header) return 120;

    return Math.ceil(header.getBoundingClientRect().bottom + 12);
  };

  const updateHash = (href) => {
    if (window.location.hash === href) return;
    window.history.pushState(null, "", href);
  };

  const handleNavClick = (event, href) => {
    const section = document.querySelector(href);
    if (!section) return;

    event.preventDefault();
    setExpanded(false);
    setActiveLink(href);
    updateHash(href);

    if (scrollLockRef.current) {
      window.clearTimeout(scrollLockRef.current);
    }

    const targetTop = section.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: "smooth"
    });

    scrollLockRef.current = window.setTimeout(() => {
      scrollLockRef.current = null;
      setActiveLink(href);
    }, 800);
  };

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
    const updateActiveByScroll = () => {
      if (scrollLockRef.current) return;

      const headerOffset = getHeaderOffset();
      let current = "";

      for (const link of navLinks) {
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
      if (scrollLockRef.current) {
        window.clearTimeout(scrollLockRef.current);
      }
    };
  }, []);

  return (
    <header className={`site-header${compact ? " is-compact" : ""}`} data-header>
      <div className="shell site-header__shell">
        <a className="brand" href="#top" aria-label="Trang chủ Tracodi Labour">
          <span className="brand-mark" aria-hidden="true">
            <img src="/Logo_Tracodilabour_V3.png" alt="" width="152" height="134" />
          </span>
        </a>

        <nav className="site-nav" aria-label="Điều hướng chính">
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
                  onClick={(event) => handleNavClick(event, link.href)}
                >
                  {link.label}
                </a>
              </div>
            ))}
          </div>

          <div className="language-menu nav-language">
            <button className="language-menu__button" type="button" aria-label="Chọn ngôn ngữ">
              <span className="language-menu-flag" aria-hidden="true">
                <img src="/img_Tracodi/Icon VN.png" alt="" />
              </span>
              <span>Tiếng Việt</span>
              <span className="language-menu__chevron" aria-hidden="true">
                <svg viewBox="0 0 20 20" focusable="false">
                  <path d="m5.5 7.5 4.5 4.5 4.5-4.5" />
                </svg>
              </span>
            </button>
            <div className="language-menu__panel">
              <a href="#top">
                <span className="language-menu-flag" aria-hidden="true">
                  <img src="/img_Tracodi/Icon .png" alt="" />
                </span>
                <span>English</span>
              </a>
              <a href="#top">
                <span className="language-menu-flag" aria-hidden="true">
                  <img src="/img_Tracodi/Icon JP.png" alt="" />
                </span>
                <span>日本語</span>
              </a>
            </div>
          </div>

          <div className="nav-hotline" aria-label="Hotline hỗ trợ">
            <span className="nav-hotline__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.3-.3.74-.39 1.13-.26 1.24.41 2.57.63 3.96.63.61 0 1.1.49 1.1 1.1v3.85c0 .61-.49 1.1-1.1 1.1C10.51 21.6 2.4 13.49 2.4 3.5c0-.61.49-1.1 1.1-1.1h3.86c.61 0 1.1.49 1.1 1.1 0 1.39.22 2.72.63 3.96.12.39.04.82-.27 1.13l-2.2 2.2Z" />
              </svg>
            </span>
            <span>
              <small>Hotline hỗ trợ</small>
              <a href="tel:+842838330316">028 3833 0316</a>
              <a href="tel:+84963222837">0963 222 837</a>
            </span>
          </div>
        </nav>
      </div>

      {!expanded ? null : (
        <div className="mobile-menu shell" id="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeLink === link.href ? "is-active" : ""}
              onClick={(event) => handleNavClick(event, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a className="button button--primary" href="#contact" onClick={() => setExpanded(false)}>
            Đăng ký tư vấn
          </a>
        </div>
      )}
    </header>
  );
}
