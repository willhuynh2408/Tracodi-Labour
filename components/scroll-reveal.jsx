"use client";

import { useEffect, useRef } from "react";

/**
 * ScrollReveal — wraps children and reveals them when they scroll into view.
 *
 * Props:
 *   animation  — "fade-up" | "fade-in" | "scale-in" | "slide-left" | "slide-right" | "fade-down"
 *   delay      — base delay in ms (default: 0)
 *   threshold  — visibility fraction to trigger (default: 0.15)
 *   stagger    — if true, staggers direct children via CSS custom property
 *   className  — extra classes forwarded to wrapper
 *   as         — wrapper element tag (default: "div")
 */
export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  threshold = 0.15,
  stagger = false,
  className = "",
  as: Tag = "div",
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      el.classList.add("is-revealed");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-revealed");
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  const style = delay > 0 ? { "--reveal-delay": `${delay}ms` } : undefined;

  return (
    <Tag
      ref={ref}
      className={`scroll-reveal scroll-reveal--${animation}${stagger ? " scroll-reveal--stagger" : ""} ${className}`.trim()}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
