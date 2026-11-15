"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyBadgeProps {
  text: string;
  label: string;
  className?: string;
}

export function CopyBadge({ text, label, className = "" }: CopyBadgeProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`copy-badge ${copied ? "copied" : ""} ${className}`}
      aria-label={`Copy ${label}: ${text}`}
      title={`Click to copy ${label}`}
    >
      <span>{copied ? "Copied!" : text}</span>
      {copied ? <Check size={13} className="copy-icon check" /> : <Copy size={13} className="copy-icon" />}
    </button>
  );
}
