"use client";

import { useState, useEffect, type FormEvent, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { site } from "@/data/content";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") || "";

  const [subject, setSubject] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (serviceParam) {
      setSubject(`Enquiry: ${serviceParam}`);
    }
  }, [serviceParam]);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const name = String(d.get("name") || "").trim();
    const email = String(d.get("email") || "").trim();
    const subj = String(d.get("subject") || subject || "Website enquiry").trim();
    const message = String(d.get("message") || "").trim();

    if (!name || !email || !message) {
      setError("Please complete all required fields.");
      return;
    }

    setError("");
    setDone(true);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subj
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      {done ? (
        <div className="success">
          <CheckCircle2 />
          <div>
            <b>Your email draft is ready.</b>
            <p>
              Your email application should open with the enquiry details. If it does not, email{" "}
              {site.email} directly.
            </p>
            <button type="button" className="text-link" onClick={() => setDone(false)}>
              Send another enquiry
            </button>
          </div>
        </div>
      ) : (
        <>
          {serviceParam && (
            <div className="service-prefill-pill">
              <Sparkles size={14} />
              <span>Selected enquiry: <b>{serviceParam}</b></span>
            </div>
          )}

          <div className="form-row">
            <label>
              Your name *
              <input name="name" autoComplete="name" placeholder="Your name" required />
            </label>
            <label>
              Email address *
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                required
              />
            </label>
          </div>

          <label>
            What can we help with?
            <input
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Website, software, IT support..."
            />
          </label>

          <label>
            Tell us about your project *
            <textarea
              name="message"
              rows={5}
              placeholder="Share a few details about what you need..."
              required
            />
          </label>

          {error && <p className="error">{error}</p>}

          <button className="button" type="submit">
            Prepare email <ArrowUpRight size={17} />
          </button>
          <small className="form-note">
            Static demo: this prepares an email in your email application. The website does not send or store
            your message.
          </small>
        </>
      )}
    </form>
  );
}

export function ContactForm() {
  return (
    <Suspense fallback={<div style={{ padding: "20px" }}>Loading enquiry form...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
