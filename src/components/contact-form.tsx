"use client";

import { useState, useEffect, type FormEvent, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, CheckCircle2, Sparkles, MessageSquare, Clock } from "lucide-react";
import { site } from "@/data/content";

const projectTypes = [
  "Web Development",
  "Mobile Application",
  "Custom Software",
  "Cloud & DevOps",
  "UI/UX Design",
  "E-ROH Shop / inzuSync",
];

const timelineOptions = ["Urgent (<2 weeks)", "1-2 Months", "Flexible Roadmap"];

function ContactFormInner() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") || "";

  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedTimeline, setSelectedTimeline] = useState<string>("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (serviceParam) {
      setSubject(`Enquiry: ${serviceParam}`);
      setSelectedType(serviceParam);
    }
  }, [serviceParam]);

  function handleTypeSelect(type: string) {
    const next = selectedType === type ? "" : type;
    setSelectedType(next);
    if (next) {
      setSubject(`Enquiry: ${next}`);
    }
  }

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const name = String(d.get("name") || "").trim();
    const email = String(d.get("email") || "").trim();
    const phone = String(d.get("phone") || "").trim();
    const subj = String(d.get("subject") || subject || "Project enquiry").trim();
    const msg = String(d.get("message") || message || "").trim();

    if (!name || !email || !msg) {
      setError("Please complete all required fields.");
      return;
    }

    const scopeInfo = selectedType ? `\nProject Type: ${selectedType}` : "";
    const timelineInfo = selectedTimeline ? `\nTarget Timeline: ${selectedTimeline}` : "";
    const phoneInfo = phone ? `\nPhone / WhatsApp: ${phone}` : "";

    setError("");
    setDone(true);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subj
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}${phoneInfo}${scopeInfo}${timelineInfo}\n\nProject Details:\n${msg}`
    )}`;
  }

  // Pre-formatted direct WhatsApp inquiry
  const whatsappBody = encodeURIComponent(
    `Hello EROH Tech, I am interested in discussing a project.${
      selectedType ? ` Type: ${selectedType}.` : ""
    }${selectedTimeline ? ` Timeline: ${selectedTimeline}.` : ""}`
  );
  const whatsappUrl = `https://wa.me/250785263931?text=${whatsappBody}`;

  return (
    <form className="contact-form" onSubmit={submit}>
      {done ? (
        <div className="success">
          <CheckCircle2 />
          <div>
            <b>Your enquiry draft is prepared.</b>
            <p>
              Your default email application should open automatically. You can also chat with us directly
              on WhatsApp at {site.phone}.
            </p>
            <div style={{ marginTop: "16px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button button-small">
                Open WhatsApp <ArrowUpRight size={14} />
              </a>
              <button type="button" className="text-link" onClick={() => setDone(false)}>
                Send another enquiry
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          {serviceParam && (
            <div className="service-prefill-pill">
              <Sparkles size={14} />
              <span>
                Selected focus: <b>{serviceParam}</b>
              </span>
            </div>
          )}

          {/* Interactive Project Scope Pills */}
          <div className="form-group-pills">
            <label className="pills-label">
              <MessageSquare size={13} /> Select Service or Project Scope (optional):
            </label>
            <div className="pills-row">
              {projectTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  className={`scope-pill ${selectedType === type ? "selected" : ""}`}
                  onClick={() => handleTypeSelect(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Timeline Pills */}
          <div className="form-group-pills">
            <label className="pills-label">
              <Clock size={13} /> Estimated Target Timeline (optional):
            </label>
            <div className="pills-row">
              {timelineOptions.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`scope-pill ${selectedTimeline === t ? "selected" : ""}`}
                  onClick={() => setSelectedTimeline(selectedTimeline === t ? "" : t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="form-row">
            <label>
              Your name *
              <input name="name" autoComplete="name" placeholder="Eric Mugisha" required />
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

          <div className="form-row">
            <label>
              Phone / WhatsApp (optional)
              <input name="phone" type="tel" placeholder="+250 78x xxx xxx" />
            </label>
            <label>
              Subject
              <input
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Custom software, website, DevOps..."
              />
            </label>
          </div>

          <label>
            Tell us about your project or goals *
            <textarea
              name="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What are you looking to build, solve or improve? Tell us about your goals, features, and target users..."
              required
            />
          </label>

          {error && <p className="error">{error}</p>}

          <div className="form-actions-bar">
            <button className="button" type="submit">
              Send Email Brief <ArrowUpRight size={17} />
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="button outline"
            >
              Direct WhatsApp <ArrowUpRight size={16} />
            </a>
          </div>

          <small className="form-note">
            Prepares your structured brief directly for EROH Technology engineering review. We respond
            within 24 hours.
          </small>
        </>
      )}
    </form>
  );
}

export function ContactForm() {
  return (
    <Suspense fallback={<div className="contact-form">Loading form...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
