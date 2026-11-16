"use client";

import { useEffect, useState } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { site } from "@/data/content";

const prefilledWhatsApp = `${site.whatsapp}?text=${encodeURIComponent(
  "Hello EROH Technology, I would like to discuss a project."
)}`;

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="floating-actions" aria-label="Quick actions">
      {/* Back to top button */}
      <button
        type="button"
        className={`btn-scroll-top ${showTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll back to top"
      >
        <ArrowUp size={18} />
      </button>

      {/* Direct WhatsApp Action Pill */}
      <a
        href={prefilledWhatsApp}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float-pill"
        aria-label="Chat directly with EROH Technology on WhatsApp"
      >
        <span className="whatsapp-pulse" aria-hidden="true" />
        <MessageCircle size={18} />
        <span className="whatsapp-label">WhatsApp</span>
      </a>
    </div>
  );
}
