"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { nav } from "@/data/content";

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-wrap">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">E</span>
          <span className="brand-title">
            <b>EROH</b>
            <small>TECHNOLOGY</small>
          </span>
        </Link>

        <nav className="nav-desktop" aria-label="Main Navigation">
          <div className="nav-capsule">
            {nav.map(([label, href]) => {
              const active = href === "/" ? path === "/" : path.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`nav-link ${active ? "active" : ""}`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="nav-actions">
          <Link href="/contact" className="nav-cta" onClick={() => setOpen(false)}>
            <span className="status-dot" aria-hidden="true" />
            <span>Let&apos;s talk</span>
            <ArrowUpRight size={15} />
          </Link>
          <button
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Modern Island Panel) */}
      <div className={`mobile-nav-panel ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="mobile-nav-links">
          {nav.map(([label, href]) => {
            const active = href === "/" ? path === "/" : path.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`mobile-nav-link ${active ? "active" : ""}`}
              >
                <span>{label}</span>
                {active && <span className="active-dot" />}
              </Link>
            );
          })}
        </div>
        <div className="mobile-nav-footer">
          <Link href="/contact" className="button button-small" onClick={() => setOpen(false)}>
            <span className="status-dot" aria-hidden="true" />
            <span>Let&apos;s talk</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </header>
  );
}
