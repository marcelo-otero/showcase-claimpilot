import { ImageResponse } from "next/og";

export const alt =
  "ClaimPilot - AI-powered insurance claims triage. Built by Marcelo Otero.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 72px",
          backgroundColor: "#0e1941",
        }}
      >
        {/* Top: decorative bar */}
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "4px",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <div style={{ flex: 1, backgroundColor: "#0033a0" }} />
          <div style={{ flex: 1, backgroundColor: "#45bce5" }} />
          <div style={{ flex: 1, backgroundColor: "#ed7766" }} />
          <div style={{ flex: 1, backgroundColor: "#0033a0" }} />
        </div>

        {/* Header row */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              fontSize: "20px",
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              fontWeight: 400,
            }}
          >
            Independent Showcase Project
          </span>
        </div>

        {/* Center content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <span
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            ClaimPilot
          </span>

          <div
            style={{
              display: "flex",
              width: "80px",
              height: "4px",
              backgroundColor: "#ed7766",
              borderRadius: "2px",
            }}
          />

          <span
            style={{
              fontSize: "28px",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.4,
              maxWidth: "800px",
              fontWeight: 400,
            }}
          >
            AI-powered insurance claims triage that classifies, verifies
            coverage, screens for fraud, and recommends resolution paths.
          </span>

          {/* Tool pills */}
          <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px 16px",
                borderRadius: "999px",
                backgroundColor: "#0033a033",
                border: "1px solid #0033a055",
              }}
            >
              <span style={{ fontSize: "16px", fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>
                classifyClaim
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px 16px",
                borderRadius: "999px",
                backgroundColor: "#0e194133",
                border: "1px solid #45bce555",
              }}
            >
              <span style={{ fontSize: "16px", fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>
                lookupPolicy
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px 16px",
                borderRadius: "999px",
                backgroundColor: "#ed776633",
                border: "1px solid #ed776655",
              }}
            >
              <span style={{ fontSize: "16px", fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>
                assessFraud
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px 16px",
                borderRadius: "999px",
                backgroundColor: "#45bce533",
                border: "1px solid #45bce555",
              }}
            >
              <span style={{ fontSize: "16px", fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>
                estimateResolution
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <span
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.5)",
              fontWeight: 400,
            }}
          >
            Built by Marcelo Otero
          </span>
          <span
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.35)",
              fontWeight: 400,
            }}
          >
            Next.js + Claude API + Vercel AI SDK
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
