import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "BalsaLabs · Automatizaciones con IA para negocios";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  // Satori no resuelve rutas del sitio: la marca se incrusta como data URI.
  const mark = await readFile(join(process.cwd(), "public", "logo-mark-light.png"));
  const markSrc = `data:image/png;base64,${mark.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0B1F33",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <img src={markSrc} width={56} height={52} alt="" />
          <div style={{ fontSize: 34, fontWeight: 800, color: "#FFFFFF" }}>BalsaLabs</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 62,
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              maxWidth: 940,
              display: "flex",
            }}
          >
            Automatiza el trabajo repetitivo. Recupera tiempo para hacer crecer tu negocio.
          </div>
          <div style={{ fontSize: 27, color: "#9FB0C2", marginTop: 28, display: "flex" }}>
            Automatizaciones con IA para negocios · info@balsalabs.com
          </div>
        </div>
      </div>
    ),
    size,
  );
}
