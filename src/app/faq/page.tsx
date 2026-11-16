import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Subnav, companySubnavItems } from "@/components/subnav";
import { FaqList } from "@/components/faq-list";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Answers to common questions about EROH Technology services and projects.",
};

export default function FAQ() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow light">HELPFUL INFORMATION</span>
          <h1>
            Questions? <em>Start here.</em>
          </h1>
          <p>Some quick answers about working with EROH Technology.</p>
          <div className="crumb">
            <Link href="/">Home</Link> / FAQs
          </div>
        </div>
      </section>

      {/* Contextual Subnavbar for Company Section */}
      <Subnav items={companySubnavItems} label="Company Sections" />

      <section className="section">
        <div className="container faq-grid">
          <div>
            <span className="eyebrow">FAQs</span>
            <h2>Good to know before we begin.</h2>
            <p>
              Can&apos;t find what you need? Send us your question and we will be happy to help.
            </p>
            <Link className="text-link" href="/contact">
              Ask us directly <ArrowUpRight size={16} />
            </Link>
          </div>
          <FaqList />
        </div>
      </section>
    </>
  );
}
