import Link from "next/link";
import CurrentYear from "@/components/CurrentYear";
import { EMAIL, MAILTO_DIAGNOSTICO } from "@/lib/site";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="border-b border-line bg-white">
        <div className="container-page flex h-[72px] items-center">
          <Link
            href="/"
            className="flex items-center gap-2.5 rounded-md font-display text-[1.05rem] font-extrabold tracking-tight text-ink"
          >
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
          </Link>
        </div>
      </header>

      <main id="contenido" className="flex-1">
        {children}
      </main>

      <footer className="border-t border-line bg-white">
        <div className="container-page flex flex-col gap-3 py-8 text-[0.85rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear /> BalsaLabs. Todos los derechos reservados.
          </p>
          <a
            href={MAILTO_DIAGNOSTICO}
            className="font-semibold text-blue underline decoration-blue/30 underline-offset-4 transition-colors hover:decoration-blue"
          >
            {EMAIL}
          </a>
        </div>
      </footer>
    </>
  );
}
