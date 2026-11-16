import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Check } from "lucide-react";
import { courses } from "@/data/content";

export const metadata: Metadata = {
  title: "Training",
  description: "Explore practical digital skills and technology training areas.",
};

export default function Training() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow light">LEARN AND GROW</span>
          <h1>
            Build skills for a <em>digital future.</em>
          </h1>
          <p>
            Explore practical learning areas designed to help you develop confidence with technology.
          </p>
          <div className="crumb">
            <Link href="/">Home</Link> / Training
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">LEARNING AREAS</span>
            <h2>Start with what you want to learn.</h2>
            <p>
              These are training areas we can discuss. Contact us to confirm current availability, format and
              programme details.
            </p>
          </div>
          <div className="course-grid">
            {courses.map((c, i) => (
              <article key={c.title}>
                <div className="course-icon">
                  <BookOpen />
                  <span>0{i + 1}</span>
                </div>
                <small>{c.level}</small>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <ul className="checks compact">
                  {c.topics.map((t) => (
                    <li key={t}>
                      <Check />
                      {t}
                    </li>
                  ))}
                </ul>
                <Link
                  className="text-link"
                  href={`/contact?service=${encodeURIComponent(c.title + " training")}`}
                >
                  Ask about this training <ArrowUpRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow light">HAVE A TRAINING REQUEST?</span>
            <h2>
              Let&apos;s talk about <em>your learning goals.</em>
            </h2>
          </div>
          <Link href="/contact" className="button button-light">
            Enquire now <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
