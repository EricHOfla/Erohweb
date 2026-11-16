import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, Compass, Layers, ShieldCheck, Zap } from "lucide-react";
import { services, engineeringProcess } from "@/data/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development, custom software, mobile applications, UI/UX design, cloud DevOps and IT consulting by EROH Technology in Kigali.",
};

const processIcons = [Compass, Layers, Zap, ShieldCheck];

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow light">WHAT WE DO</span>
          <h1>
            Digital solutions, <em>built around you.</em>
          </h1>
          <p>
            Choose the technical support you need today, engineered with clean code and room to scale
            into what comes next.
          </p>
          <div className="crumb">
            <Link href="/">Home</Link> / Services
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">OUR CAPABILITIES</span>
            <h2>Practical skills. Connected thinking.</h2>
            <p>
              We combine system strategy, interface design, and modern full-stack development to create
              solutions that serve real business needs.
            </p>
          </div>

          <div className="service-list">
            {services.map((s, i) => (
              <article key={s.title}>
                <b>0{i + 1}</b>
                <div>
                  <small>{s.group}</small>
                  <h2>{s.title}</h2>
                  <p>{s.text}</p>
                  <ul className="checks compact">
                    {s.items.map((x) => (
                      <li key={x}>
                        <Check />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={`/contact?service=${encodeURIComponent(s.title)}`}
                  aria-label={`Enquire about ${s.title}`}
                >
                  <ArrowUpRight />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Engineering Process: How We Work */}
      <section className="section muted">
        <div className="container">
          <div className="section-head center-head">
            <span className="eyebrow">OUR METHODOLOGY</span>
            <h2>How we take projects from idea to production.</h2>
            <p>
              A proven, milestone-driven delivery process designed to eliminate guesswork, ensure total
              transparency, and guarantee high-velocity execution.
            </p>
          </div>

          <div className="process-timeline-grid">
            {engineeringProcess.map((step, idx) => {
              const Icon = processIcons[idx] || Compass;
              return (
                <div className="process-card" key={step.step}>
                  <div className="process-card-top">
                    <span className="process-step-num">{step.step}</span>
                    <div className="process-icon-wrap">
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3>{step.title}</h3>
                  <small className="process-tagline">{step.tagline}</small>
                  <p>{step.description}</p>

                  <div className="process-deliverables">
                    <strong>Key Deliverables:</strong>
                    <ul>
                      {step.deliverables.map((item) => (
                        <li key={item}>
                          <Check size={13} className="deliverable-check" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow light">NOT SURE WHERE TO START?</span>
            <h2>
              Tell us what you <em>want to achieve.</em>
            </h2>
            <p>We analyze your requirements and recommend a clear, practical roadmap.</p>
          </div>
          <Link href="/contact" className="button button-light">
            Discuss your needs <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
