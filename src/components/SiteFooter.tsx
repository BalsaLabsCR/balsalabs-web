import Link from "next/link";
import CurrentYear from "./CurrentYear";
import { EMAIL, MAILTO_DIAGNOSTICO, NAV_LINKS } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-page py-10 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="flex items-center gap-2.5 font-display text-[1.1rem] font-extrabold tracking-tight text-ink">
              <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
                <path
                  d="M4 16 L11 6 L18 16"
                  fill="none"
                  stroke="#246BCE"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle cx="4" cy="16" r="2.4" fill="#0B1F33" />
                <circle cx="11" cy="6" r="2.4" fill="#246BCE" />
                <circle cx="18" cy="16" r="2.4" fill="#1F7A5C" />
              </svg>
              BalsaLabs
            </p>
            <p className="mt-3 max-w-xs text-[0.92rem] leading-relaxed text-muted">
              Automatizaciones con IA para negocios.
            </p>
          </div>

          <nav aria-label="Navegación del pie de página">
            <h2 className="text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-ink">
              Navegación
            </h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.92rem] text-muted transition-colors hover:text-blue"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-ink">
              Contacto
            </h2>
            <a
              href={MAILTO_DIAGNOSTICO}
              className="mt-4 inline-block text-[0.92rem] font-semibold text-blue underline decoration-blue/30 underline-offset-4 transition-colors hover:decoration-blue"
            >
              {EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.85rem] text-muted">
            © <CurrentYear /> BalsaLabs. Todos los derechos reservados.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.85rem]">
            <li>
              <Link
                href="/politica-de-privacidad"
                className="text-muted transition-colors hover:text-blue"
              >
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link href="/terminos-del-servicio" className="text-muted transition-colors hover:text-blue">
                Términos del servicio
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
