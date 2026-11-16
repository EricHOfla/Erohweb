import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Home, Mail } from "lucide-react";
import { site } from "@/data/content";

export default function NotFound() {
  return (
    <section className="not-found-page">
      <div className="container not-found-inner">
        <div className="not-found-eyebrow">
          <span className="eyebrow">404 · PAGE NOT FOUND</span>
        </div>

        <div className="not-found-num" aria-hidden="true">404</div>

        <h1 className="not-found-heading">
          This page seems to have <em>moved on.</em>
        </h1>

        <p className="not-found-desc">
          The link may be out of date, or the page no longer exists. Try navigating from the homepage
          or get in touch if you think something is broken.
        </p>

        <div className="not-found-actions">
          <Link className="button" href="/">
            <Home size={16} /> Back to home
          </Link>
          <Link className="button outline" href="/contact">
            <Mail size={16} /> Contact us
          </Link>
        </div>

        <div className="not-found-links">
          <span>Or explore:</span>
          <Link href="/services">Services <ArrowUpRight size={14} /></Link>
          <Link href="/projects">Projects <ArrowUpRight size={14} /></Link>
          <Link href="/products">Products <ArrowUpRight size={14} /></Link>
          <Link href="/faq">FAQ <ArrowUpRight size={14} /></Link>
        </div>

        <div className="not-found-contact">
          <p>
            Need help? Reach us at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
            <a href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
