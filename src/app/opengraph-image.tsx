import { ImageResponse } from "next/og";

export const alt = "BalsaLabs · Automatizaciones con IA para negocios";
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
          backgroundColor: "#0B1F33",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: "#F7F4ED" }} />
            <div style={{ width: 44, height: 2, backgroundColor: "#246BCE" }} />
            <div style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: "#246BCE" }} />
            <div style={{ width: 44, height: 2, backgroundColor: "#246BCE" }} />
            <div style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: "#1F7A5C" }} />
          </div>
          <div style={{ fontSize: 30, fontWeight: 800, color: "#FFFFFF", marginLeft: 12 }}>
            BalsaLabs
          </div>
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
