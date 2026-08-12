import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { EMAIL, SITE_URL } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["700", "800"],
});

const TITLE = "BalsaLabs | Automatizaciones con IA para negocios";
const DESCRIPTION =
  "Ayudamos a negocios a automatizar procesos con inteligencia artificial, agentes e integraciones. Atención, ventas, documentos, reportes y operaciones.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "BalsaLabs",
  keywords: [
    "automatización de procesos",
    "automatización con IA",
    "agentes de IA",
    "integraciones",
    "automatización WhatsApp",
    "Costa Rica",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CR",
    url: SITE_URL,
    siteName: "BalsaLabs",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1F33",
  colorScheme: "light",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "BalsaLabs",
  url: SITE_URL,
  email: EMAIL,
  description: DESCRIPTION,
  slogan: "Automatizaciones con IA para negocios.",
  serviceType: "Automatización de procesos de negocio con inteligencia artificial",
  contactPoint: {
    "@type": "ContactPoint",
    email: EMAIL,
    contactType: "Consultas comerciales",
    availableLanguage: ["es"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${inter.variable} ${manrope.variable} antialiased`}>
      <body className="flex min-h-screen flex-col bg-white">
        <script
          type="application/ld+json"
          // El contenido es estático y controlado por el sitio.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <noscript>
          {/* Sin JavaScript, el contenido con animación de entrada debe verse igual. */}
          <style>{`.reveal{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
        <a
          href="#contenido"
          className="sr-only rounded-xl bg-ink px-5 py-3 font-semibold text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60]"
        >
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
