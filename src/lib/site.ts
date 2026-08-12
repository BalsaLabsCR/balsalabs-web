export const SITE_URL = "https://balsalabs.com";
export const EMAIL = "info@balsalabs.com";

/** Construye un mailto con asunto (y cuerpo opcional) correctamente codificado. */
export function mailto(subject: string, body?: string): string {
  const params = new URLSearchParams({ subject });
  if (body) params.set("body", body);
  return `mailto:${EMAIL}?${params.toString().replace(/\+/g, "%20")}`;
}

export const MAILTO_DIAGNOSTICO = mailto("Solicitud de diagnóstico de automatización");
export const MAILTO_EVALUAR_PROCESO = mailto("Quiero evaluar un proceso para automatización");

/**
 * Anclas de la portada. Se usan como enlaces nativos para conservar el scroll
 * suave del navegador (`scroll-behavior: smooth`) sin JavaScript de por medio.
 */
export const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#que-automatizamos", label: "Qué automatizamos" },
  { href: "#como-trabajamos", label: "Cómo trabajamos" },
  { href: "#calculadora", label: "Calculadora" },
  { href: "#preguntas-frecuentes", label: "Preguntas frecuentes" },
] as const;
