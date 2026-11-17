import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { CopyBadge } from "@/components/copy-badge";
import { site } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with EROH Technology in Kigali, Rwanda. Send a project enquiry, ask about services, or start a conversation via email, phone, or WhatsApp.",
};

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow light">GET IN TOUCH</span>
          <h1>
            Let&apos;s talk about <em>what&apos;s next.</em>
          </h1>
          <p>
            Have a project, a question or an idea? Tell us a little about it and we will take it from there.
          </p>
          <div className="crumb">
            <Link href="/">Home</Link> / Contact
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <aside>
            <span className="eyebrow">CONTACT DETAILS</span>
            <h2>We&apos;re ready to listen.</h2>
            <p>Reach out using the details below or send us a project enquiry.</p>

            <div className="contact-item">
              <Mail />
              <span>
                <small>Email us</small>
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <CopyBadge text={site.email} label="email" />
              </span>
            </div>

            <div className="contact-item">
              <Phone />
              <span>
                <small>Call us</small>
                <a href={`tel:${site.phoneLink}`}>{site.phone}</a>
                <CopyBadge text={site.phone} label="phone number" />
              </span>
            </div>

            <div className="contact-item">
              <MapPin />
              <span>
                <small>Find us</small>
                <a href="https://maps.google.com/?q=Kigali,Rwanda" target="_blank" rel="noreferrer">
                  {site.location}
                </a>
              </span>
            </div>

            <a className="whatsapp" href={site.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> Chat with us on WhatsApp
            </a>

            <div className="contact-note">
              <b>Prefer a quick conversation?</b>
              <p>Send us a WhatsApp message with a short description of what you need.</p>
            </div>
          </aside>

          <div className="form-wrap">
            <span className="eyebrow">PROJECT ENQUIRY</span>
            <h2>Tell us about it.</h2>
            <p>Fields marked with * are required.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="map-band">
        <div className="container map-inner">
          <div>
            <span className="eyebrow">BASED IN RWANDA</span>
            <h2>
              Rooted in Kigali.
              <br />
              Open to working with you.
            </h2>
          </div>
          <a href="https://maps.google.com/?q=Kigali,Rwanda" target="_blank" rel="noreferrer">
            <MapPin />
            <b>Kigali, Rwanda</b>
            <small>View on Google Maps ↗</small>
          </a>
        </div>
      </section>
    </>
  );
}
