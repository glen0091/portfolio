import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#06070a",
        backgroundImage:
          "radial-gradient(circle at 15% 10%, rgba(79,107,255,0.35), transparent 55%), radial-gradient(circle at 85% 85%, rgba(34,211,238,0.25), transparent 55%)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontFamily: "monospace",
          fontSize: 22,
          color: "#22d3ee",
          letterSpacing: 2,
          textTransform: "uppercase",
        }}
      >
        {site.availabilityNote}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 84,
          fontWeight: 700,
          color: "#f5f6f8",
          marginTop: 28,
          lineHeight: 1.1,
        }}
      >
        {site.name}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 40,
          color: "#9195a3",
          marginTop: 12,
        }}
      >
        {site.role} — I build digital experiences that perform.
      </div>
    </div>,
    { ...size }
  );
}
