import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, Compass, Layers, ShieldCheck, Zap, BadgeCheck, Clock, MessageSquare } from "lucide-react";
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

      {/* Pricing Transparency Section */}
      <section className="section">
        <div className="container">
          <div className="section-head center-head">
            <span className="eyebrow">PRICING & PROCESS</span>
            <h2>Transparent, project-based pricing.</h2>
            <p>
              Every project is different. We quote based on scope, complexity and timeline — no hidden
              fees, no surprises. Here is how it typically works.
            </p>
          </div>

          <div className="pricing-tier-grid">
            <article className="pricing-tier">
              <div className="pricing-tier-top">
                <span className="pricing-tier-label">Starter</span>
                <h3 className="pricing-tier-name">Landing Page or Brochure Site</h3>
                <p className="pricing-tier-desc">
                  A clean, responsive website for individuals, small businesses or new ventures that need a credible online presence fast.
                </p>
              </div>
              <ul className="pricing-includes">
                <li><Check size={14} /> Up to 5 pages</li>
                <li><Check size={14} /> Mobile-responsive design</li>
                <li><Check size={14} /> Contact form</li>
                <li><Check size={14} /> Basic SEO setup</li>
                <li><Check size={14} /> 1 round of revisions</li>
              </ul>
              <div className="pricing-timeline">
                <Clock size={14} /> Typical delivery: <b>1 – 2 weeks</b>
              </div>
              <Link href="/contact?service=Starter+website" className="button outline pricing-cta">
                Get a quote <ArrowUpRight size={15} />
              </Link>
            </article>

            <article className="pricing-tier pricing-tier-featured">
              <div className="pricing-tier-badge">Most Popular</div>
              <div className="pricing-tier-top">
                <span className="pricing-tier-label">Professional</span>
                <h3 className="pricing-tier-name">Custom Web or Mobile Application</h3>
                <p className="pricing-tier-desc">
                  Purpose-built software with custom features, user authentication, dashboards, or third-party integrations shaped around your workflow.
                </p>
              </div>
              <ul className="pricing-includes">
                <li><Check size={14} /> Full discovery and planning phase</li>
                <li><Check size={14} /> Custom UI/UX design</li>
                <li><Check size={14} /> Web or mobile development</li>
                <li><Check size={14} /> API and database integration</li>
                <li><Check size={14} /> Testing and staged rollout</li>
                <li><Check size={14} /> 2 rounds of revisions</li>
              </ul>
              <div className="pricing-timeline">
                <Clock size={14} /> Typical delivery: <b>4 – 8 weeks</b>
              </div>
              <Link href="/contact?service=Custom+application" className="button pricing-cta">
                Start a conversation <ArrowUpRight size={15} />
              </Link>
            </article>

            <article className="pricing-tier">
              <div className="pricing-tier-top">
                <span className="pricing-tier-label">Enterprise</span>
                <h3 className="pricing-tier-name">Ongoing Support & DevOps</h3>
                <p className="pricing-tier-desc">
                  Continuous delivery, infrastructure management, and technical partnership for teams that need a reliable technology partner long-term.
                </p>
              </div>
              <ul className="pricing-includes">
                <li><Check size={14} /> Server and cloud management</li>
                <li><Check size={14} /> CI/CD pipeline setup</li>
                <li><Check size={14} /> Security and uptime monitoring</li>
                <li><Check size={14} /> Feature development retainer</li>
                <li><Check size={14} /> Priority response SLA</li>
              </ul>
              <div className="pricing-timeline">
                <Clock size={14} /> Engagement: <b>Monthly retainer</b>
              </div>
              <Link href="/contact?service=Enterprise+retainer" className="button outline pricing-cta">
                Discuss your needs <ArrowUpRight size={15} />
              </Link>
            </article>
          </div>

          <div className="pricing-note-row">
            <div className="pricing-note-item">
              <BadgeCheck size={18} />
              <span><b>Fixed-price quotes</b> — agreed in writing before work starts, no surprise invoices.</span>
            </div>
            <div className="pricing-note-item">
              <MessageSquare size={18} />
              <span><b>Free initial consultation</b> — tell us what you need, we will scope it honestly.</span>
            </div>
            <div className="pricing-note-item">
              <Clock size={18} />
              <span><b>Phased payment</b> — milestone-based payments available on larger projects.</span>
            </div>
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
