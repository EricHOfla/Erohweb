import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { team } from "@/data/content";

export const metadata: Metadata = {
  title: "Our team",
  description: "Meet the people behind EROH Technology — a Kigali-based team of developers, designers and IT specialists building useful digital solutions across East Africa.",
};

export default function Team() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow light">THE PEOPLE</span>
          <h1>
            Meet the team <em>behind the work.</em>
          </h1>
          <p>
            Different strengths, shared focus: building useful technology and better digital experiences.
          </p>
          <div className="crumb">
            <Link href="/">Home</Link> / Team
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">OUR PEOPLE</span>
            <h2>A team built around ideas and delivery.</h2>
          </div>
          <div className="team-grid">
            {team.map((p) => (
              <article className="team-card" key={p.name}>
                <div className="team-photo">
                  <Image src={p.image} alt={p.name} fill sizes="(max-width:600px) 100vw, 25vw" />
                </div>
                <div>
                  <small>{p.role}</small>
                  <h3>{p.name}</h3>
                  <p>{p.bio}</p>
                  <div className="team-links">
                    <a href={`mailto:${p.email}`} aria-label={`Email ${p.name}`}>
                      <Mail size={16} />
                    </a>
                    {p.linkedin && (
                      <a
                        href={p.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${p.name} LinkedIn`}
                      >
                        <Linkedin size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow light">WORK WITH OUR TEAM</span>
            <h2>
              Let&apos;s make progress <em>together.</em>
            </h2>
          </div>
          <Link href="/contact" className="button button-light">
            Contact us <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
