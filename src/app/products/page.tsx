import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Check, Layers, Cpu, Sparkles } from "lucide-react";
import { products, site } from "@/data/content";

export const metadata: Metadata = {
  title: "Products & Innovation",
  description:
    "Explore proprietary digital products and SaaS initiatives engineered by EROH Technology in Kigali, Rwanda.",
};

export default function Products() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow light">OUR PRODUCTS & INNOVATION</span>
          <h1>
            Building ideas into <em>digital products.</em>
          </h1>
          <p>
            Alongside client engineering, we architect and operate our own proprietary software products,
            shaped around real market needs and enterprise workflows.
          </p>
          <div className="crumb">
            <Link href="/">Home</Link> / Products
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">EROH PRODUCT PORTFOLIO</span>
            <h2>Proprietary platforms & SaaS solutions.</h2>
            <p>
              Scalable, user-focused digital products conceived, engineered, and maintained by EROH Technology.
              Explore our live platforms and upcoming initiatives below.
            </p>
          </div>

          <div className="product-showcase-grid">
            {products.map((p) => {
              const whatsappText = encodeURIComponent(
                `Hello EROH Tech, I am interested in learning more about your product ${p.name}.`
              );
              const whatsappUrl = `https://wa.me/250785263931?text=${whatsappText}`;

              return (
                <article className="product-feature-card" key={p.slug}>
                  <div className="product-card-media">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                      className="product-img"
                    />
                    <div className="product-card-badge-row">
                      <span className="product-status-pill">{p.badge}</span>
                      <span className="product-kind-tag">{p.status}</span>
                    </div>
                  </div>

                  <div className="product-card-content">
                    <div className="product-header">
                      <small className="product-label">{p.kind}</small>
                      <h2>{p.name}</h2>
                      <p className="product-desc">{p.description}</p>
                    </div>

                    <div className="product-features-box">
                      <h4>
                        <Sparkles size={15} /> Core Capabilities
                      </h4>
                      <ul className="product-feature-list">
                        {p.features.map((feat) => (
                          <li key={feat}>
                            <Check size={14} className="feature-check-icon" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="product-tech-stack">
                      <span className="tech-label">
                        <Cpu size={14} /> Technology Architecture:
                      </span>
                      <div className="tech-chips">
                        {p.technologies.map((tech) => (
                          <span className="tech-chip" key={tech}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="product-card-actions">
                      {p.demoUrl && (
                        <a
                          href={p.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="button"
                        >
                          Launch Platform <ExternalLink size={15} />
                        </a>
                      )}
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="button outline"
                      >
                        Quick WhatsApp Inquiry <ArrowUpRight size={15} />
                      </a>
                      <Link
                        href={`/contact?service=${encodeURIComponent(p.name + " product enquiry")}`}
                        className="text-link"
                      >
                        Send email brief <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Innovation CTA */}
      <section className="cta">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow light">HAVE A PRODUCT IDEA OR PARTNERSHIP?</span>
            <h2>
              Let&apos;s build something <em>extraordinary together.</em>
            </h2>
            <p>
              We collaborate with founders and enterprises to co-create digital products, validate MVP concepts,
              and license our technology.
            </p>
          </div>
          <Link
            href="/contact?service=Product%20development%20or%20partnership"
            className="button button-light"
          >
            Discuss a partnership <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
