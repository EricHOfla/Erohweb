import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  MonitorSmartphone,
  Palette,
  Settings2,
  Smartphone,
  TrendingUp,
  Sparkles,
  Boxes,
} from "lucide-react";
import { services, projects, impactMetrics } from "@/data/content";
import { TechStack } from "@/components/tech-stack";

const icons = [MonitorSmartphone, Code2, Smartphone, Settings2, Palette, TrendingUp];

export default function Home() {
  return (
    <>
      {/* 1. Hero: Dark Obsidian Foundation */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow light">
              <i /> DIGITAL SOLUTIONS FROM KIGALI, RWANDA
            </span>
            <h1>
              Good ideas deserve <em>great technology.</em>
            </h1>
            <p>
              We are a technology company working across digital services, products, training and innovation.
              We help turn real needs into useful technology.
            </p>
            <div className="hero-actions">
              <Link className="button button-light" href="/contact">
                Discuss your project <ArrowUpRight size={17} />
              </Link>
              <Link className="hero-secondary" href="/services">
                Explore our services <ArrowRight size={17} />
              </Link>
            </div>
            <div className="hero-proof">
              <span className="avatar">E</span>
              <span className="avatar">R</span>
              <span className="avatar">T</span>
              <small>People-first. Solution-focused. Built for growth.</small>
            </div>
          </div>
          <div className="hero-art">
            <div className="orbit one" />
            <div className="orbit two" />
            <div className="hero-photo">
              <Image
                src="/images/p4.jpg"
                alt="Creative technology workspace"
                fill
                priority
                sizes="(max-width:760px) 100vw, 50vw"
              />
            </div>
            <div className="float-note">
              <Sparkles size={19} />
              <span>
                <b>Ideas into impact</b>
                <small>One thoughtful solution at a time</small>
              </span>
            </div>
          </div>
        </div>
        <div className="container hero-tags">
          <span>SERVICES</span>
          <span>PRODUCTS</span>
          <span>TRAINING</span>
          <span>INNOVATION</span>
        </div>

        {/* Enterprise Impact Metrics Strip */}
        <div className="container hero-impact-bar">
          <div className="impact-metrics-strip">
            {impactMetrics.map((m) => (
              <div className="impact-metric-box" key={m.label}>
                <span className="metric-num">{m.value}</span>
                <b className="metric-title">{m.label}</b>
                <small className="metric-desc">{m.detail}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Intro: Light Canvas */}
      <section className="section">
        <div className="container intro">
          <div>
            <span className="eyebrow">A TECHNOLOGY PARTNER</span>
            <h2>
              Make technology work <em>for your business.</em>
            </h2>
          </div>
          <div>
            <p>
              At EROH Technology, we bring software, design and practical IT thinking together. Our focus is
              to understand the challenge, build the right solution and make the experience better for the
              people using it.
            </p>
            <Link className="text-link" href="/about">
              Get to know us <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
        <div className="container stats">
          <div>
            <b>Digital services</b>
            <small>technology shaped around your needs</small>
          </div>
          <div>
            <b>Our products</b>
            <small>ideas we develop beyond client projects</small>
          </div>
          <div>
            <b>Learning & innovation</b>
            <small>building skills and exploring what is next</small>
          </div>
        </div>
        <div className="container">
          <TechStack />
        </div>
      </section>

      {/* 3. Services: Muted Surface */}
      <section className="section muted">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">WHAT WE DO</span>
            <h2>The right expertise for your next step.</h2>
            <p>
              From your first website to a custom digital product, we bring practical skills and connected
              thinking to the challenge.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => {
              const Icon = icons[i];
              return (
                <article className="service-card" key={s.title}>
                  <div>
                    <small>0{i + 1}</small>
                    <Icon size={24} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <Link href="/services" aria-label={`Learn about ${s.title}`}>
                    <ArrowUpRight size={19} />
                  </Link>
                </article>
              );
            })}
          </div>
          <div className="center">
            <Link className="button outline" href="/services">
              View all services <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Products: Light Canvas */}
      <section className="section">
        <div className="container intro">
          <div>
            <span className="eyebrow">OUR PRODUCTS</span>
            <h2>
              Beyond client work, <em>we build products.</em>
            </h2>
          </div>
          <div>
            <p>
              We are also developing our own digital product direction. Visit the product page for current
              information and contact us if you would like to learn more or discuss a product partnership.
            </p>
            <Link className="text-link" href="/products">
              Explore products <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
        <div className="container stats">
          <div>
            <b>
              <Boxes size={19} /> Product thinking
            </b>
            <small>starting with real problems and needs</small>
          </div>
          <div>
            <b>inzuSync &amp; E-ROH Shop</b>
            <small>EROH Technology product initiatives</small>
          </div>
          <div>
            <b>Open to ideas</b>
            <small>partnership and product enquiries welcome</small>
          </div>
        </div>
      </section>

      {/* 5. Selected Work: Muted Surface (Alternating) */}
      <section className="section muted">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">SELECTED WORK</span>
            <h2>Ideas taking shape.</h2>
            <p>
              A look at selected work and concepts from our digital journey. Concepts are labelled clearly
              and are not presented as launched products.
            </p>
          </div>
          <div className="feature-grid">
            {projects.slice(0, 2).map((p, i) => (
              <article className="feature" key={p.slug}>
                <Link href={`/projects/${p.slug}`} className={i === 0 ? "feature-img tall" : "feature-img"}>
                  <Image src={p.image} alt={p.title} fill sizes="(max-width:760px) 100vw, 50vw" />
                  <span>
                    <ArrowUpRight />
                  </span>
                </Link>
                <small>
                  {p.type} · {p.status}
                </small>
                <h3>
                  <Link href={`/projects/${p.slug}`}>{p.title}</Link>
                </h3>
                <p>{p.summary}</p>
              </article>
            ))}
          </div>
          <div className="center">
            <Link className="button outline" href="/projects">
              Explore all projects <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Approach: Light Canvas */}
      <section className="section">
        <div className="container approach">
          <div className="approach-img">
            <Image src="/images/bg.jpg" alt="Technology collaboration" fill sizes="(max-width:760px) 100vw, 50vw" />
            <span>
              THINK
              <br />
              BUILD
              <br />
              GROW
            </span>
          </div>
          <div>
            <span className="eyebrow">HOW WE WORK</span>
            <h2>Clear thinking. Careful execution.</h2>
            <p>
              Good outcomes start with understanding. We keep the process collaborative, practical and
              focused on what matters.
            </p>
            <ul className="checks">
              <li>
                <Check />
                Start with your goals and users
              </li>
              <li>
                <Check />
                Agree on scope and priorities
              </li>
              <li>
                <Check />
                Design, build and refine together
              </li>
              <li>
                <Check />
                Prepare for what comes next
              </li>
            </ul>
            <Link className="text-link" href="/about">
              Our approach <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Training: Muted Surface (Alternating) */}
      <section className="section muted">
        <div className="container intro">
          <div>
            <span className="eyebrow">TRAINING & DIGITAL SKILLS</span>
            <h2>
              Technology grows when <em>people grow.</em>
            </h2>
          </div>
          <div>
            <p>
              Explore the learning areas listed by EROH Technology. Contact us to confirm available
              programmes, delivery format and schedules.
            </p>
            <Link className="text-link" href="/training">
              Explore training <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Call To Action: Dark Obsidian */}
      <section className="cta">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow light">HAVE AN IDEA?</span>
            <h2>
              Let&apos;s build something <em>that matters.</em>
            </h2>
            <p>Tell us what you are working on. We would be glad to explore it with you.</p>
          </div>
          <Link className="button button-light" href="/contact">
            Start a conversation <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
