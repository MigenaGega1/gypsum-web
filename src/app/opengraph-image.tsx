import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} – ${siteConfig.tagline}`;
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
          alignItems: "center",
          justifyContent: "center",
          background: "#121110",
          color: "#f8f5ef",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "2px solid #c19a58",
            borderRadius: 9999,
            width: 460,
            height: 460,
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: 26, letterSpacing: 10, color: "#d9bd8a" }}>PUNIME GIPSI</div>
          <div style={{ fontSize: 150, letterSpacing: 18, color: "#c19a58", fontWeight: 700 }}>
            {siteConfig.shortName}
          </div>
          <div style={{ width: 260, height: 2, background: "#c19a58", margin: "10px 0 24px" }} />
          <div style={{ fontSize: 24, letterSpacing: 5, textTransform: "uppercase" }}>
            {siteConfig.tagline}
          </div>
        </div>
        <div style={{ marginTop: 34, fontSize: 30, color: "#d9bd8a" }}>
          Tavane gipsi · Tavane dekorative · Ndarje gipsi
        </div>
      </div>
    ),
    size,
  );
}
