import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "EROH Technology — Digital solutions that move you forward";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B0F19",
          padding: "64px 72px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Background accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "480px",
            height: "480px",
            background:
              "radial-gradient(circle at 80% 20%, rgba(225,29,72,0.18) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Top: Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              background: "#E11D48",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: "900",
              color: "#fff",
            }}
          >
            E
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
            }}
          >
            <span
              style={{
                color: "#fff",
                fontSize: "22px",
                fontWeight: "700",
                letterSpacing: "-0.02em",
              }}
            >
              EROH TECHNOLOGY
            </span>
            <span
              style={{
                color: "#64748B",
                fontSize: "13px",
                letterSpacing: "0.08em",
              }}
            >
              KIGALI, RWANDA
            </span>
          </div>
        </div>

        {/* Middle: Headline */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: "24px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "#E11D48",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "0.12em",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "2px",
                background: "#E11D48",
                display: "flex",
              }}
            />
            <span>DIGITAL SOLUTIONS</span>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: "64px",
              fontWeight: "900",
              lineHeight: "1.05",
              letterSpacing: "-0.03em",
              maxWidth: "760px",
            }}
          >
            <span style={{ color: "#fff" }}>Good ideas deserve&nbsp;</span>
            <span style={{ color: "#E11D48" }}>great technology.</span>
          </div>

          <div
            style={{
              display: "flex",
              color: "#94A3B8",
              fontSize: "20px",
              maxWidth: "600px",
              lineHeight: "1.5",
            }}
          >
            Technology services, digital products and learning experiences built
            around real needs.
          </div>
        </div>

        {/* Bottom: Tags row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          {["SERVICES", "PRODUCTS", "TRAINING", "INNOVATION"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "8px 18px",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "6px",
                color: "#94A3B8",
                fontSize: "12px",
                letterSpacing: "0.1em",
                fontWeight: "600",
              }}
            >
              {tag}
            </div>
          ))}
          <div
            style={{
              display: "flex",
              marginLeft: "auto",
              color: "#64748B",
              fontSize: "14px",
              alignSelf: "center",
            }}
          >
            erohweb.vercel.app
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
