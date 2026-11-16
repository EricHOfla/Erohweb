"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Subnav, companySubnavItems } from "@/components/subnav";

const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Company", href: "/about", matchRoutes: ["/about", "/team", "/training", "/faq"] },
];

const mobileSubLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Training", href: "/training" },
  { label: "FAQs", href: "/faq" },
];

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const isCompanySection = ["/about", "/team", "/training", "/faq"].some((route) => path.startsWith(route));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setProgress(Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)));
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 2px Ambient Reading Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      <header className={`header ${scrolled ? "scrolled" : ""} ${isCompanySection ? "has-subnav" : ""}`}>
        <div className="container nav-wrap">
          <Link href="/" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark">E</span>
            <span className="brand-title">
              <b>EROH</b>
              <small>TECHNOLOGY</small>
            </span>
          </Link>

          {/* Desktop: Streamlined 4 Pillars + Company in Capsule Dock */}
          <nav className="nav-desktop" aria-label="Main Navigation">
            <div className="nav-capsule">
              {primaryNav.map((item) => {
                const isActive = item.matchRoutes
                  ? item.matchRoutes.some((r) => (r === "/" ? path === "/" : path.startsWith(r)))
                  : item.href === "/"
                  ? path === "/"
                  : path.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`nav-link ${isActive ? "active" : ""}`}
                  >
                    {item.label}
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

        {/* Unified Subnavbar Dock (Company & Learning sections) */}
        {!open && isCompanySection && (
          <Subnav items={companySubnavItems} label="Company sections" />
        )}

        {/* Mobile Drawer (Organized Pillars + Subnav Groups) */}
        <div className={`mobile-nav-panel ${open ? "open" : ""}`} aria-hidden={!open}>
          <div className="mobile-nav-links">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={`mobile-nav-link ${path === "/" ? "active" : ""}`}
            >
              <span>Home</span>
              {path === "/" && <span className="active-dot" />}
            </Link>
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className={`mobile-nav-link ${path.startsWith("/services") ? "active" : ""}`}
            >
              <span>Services</span>
              {path.startsWith("/services") && <span className="active-dot" />}
            </Link>
            <Link
              href="/products"
              onClick={() => setOpen(false)}
              className={`mobile-nav-link ${path.startsWith("/products") ? "active" : ""}`}
            >
              <span>Products & Innovation</span>
              {path.startsWith("/products") && <span className="active-dot" />}
            </Link>
            <Link
              href="/projects"
              onClick={() => setOpen(false)}
              className={`mobile-nav-link ${path.startsWith("/projects") ? "active" : ""}`}
            >
              <span>Projects</span>
              {path.startsWith("/projects") && <span className="active-dot" />}
            </Link>

            <div className="mobile-nav-divider">
              <small>COMPANY & LEARNING</small>
            </div>
            {mobileSubLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`mobile-nav-link sub ${path === item.href ? "active" : ""}`}
              >
                <span>{item.label}</span>
                {path === item.href && <span className="active-dot" />}
              </Link>
            ))}
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
    </>
  );
}
