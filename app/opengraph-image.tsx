import { ImageResponse } from "next/og";

export const alt = "C-DESIGN — Design. Develop. Deliver.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#09090B",
          padding: 80,
          color: "#fff",
          backgroundImage: "radial-gradient(circle at 85% 10%, rgba(37,99,235,0.45), transparent 55%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 56, height: 56, borderRadius: 14, background: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 34, fontWeight: 700 }}>C</div>
          <div style={{ fontSize: 34, letterSpacing: 6, fontWeight: 600 }}>C-DESIGN</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>Web design &amp; development</div>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, color: "#3B82F6" }}>for modern businesses.</div>
        </div>
        <div style={{ fontSize: 26, letterSpacing: 6, color: "#A1A1AA" }}>DESIGN. DEVELOP. DELIVER.</div>
      </div>
    ),
    size,
  );
}
