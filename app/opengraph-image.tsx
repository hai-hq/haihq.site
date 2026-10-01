import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteHost, siteName, siteTagline } from "@/lib/site";

export const alt = `${siteName} — ${siteTagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const symbol = await readFile(join(process.cwd(), "public/brand/symbol.png"));

  const symbolSrc = `data:image/png;base64,${symbol.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#FAF8F3",
        color: "#0B0B0B",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          background: "#B6FF00",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          padding: "72px 80px 64px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#686868",
          }}
        >
          Open research · Health AI
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 108,
              fontWeight: 700,
              letterSpacing: "-0.06em",
              lineHeight: 0.92,
            }}
          >
            {siteName}
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
              maxWidth: 720,
            }}
          >
            {siteTagline}
          </div>
        </div>
        <div style={{ fontSize: 20, color: "#686868" }}>{siteHost}</div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 360,
          paddingRight: 72,
        }}
      >
        <img
          src={symbolSrc}
          alt=""
          width={280}
          height={280}
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>,
    size,
  );
}
