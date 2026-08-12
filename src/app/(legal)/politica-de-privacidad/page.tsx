import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { EMAIL, MAILTO_DIAGNOSTICO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad | BalsaLabs",
  description:
    "Página preparada para publicar la política de privacidad de BalsaLabs. Mientras tanto, puedes consultarnos por correo.",
  alternates: { canonical: "/politica-de-privacidad" },
  robots: { index: false, follow: true },
};

export default function PoliticaDePrivacidad() {
  return (
    <div className="container-page py-20 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[0.9rem] font-semibold text-blue transition-colors hover:text-blue-700"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Volver al inicio
        </Link>

        <h1 className="mt-8 text-[2rem] font-extrabold leading-tight text-ink sm:text-[2.4rem]">
          Política de privacidad
        </h1>

        <p className="mt-6 text-[1.02rem] leading-relaxed text-muted">
          Esta página está preparada para publicar la política de privacidad de BalsaLabs. El documento
          está en elaboración y se publicará aquí cuando esté listo.
        </p>

        <div className="mt-8 rounded-2xl border border-line bg-ivory p-6">
          <h2 className="text-[1.05rem] font-bold text-ink">Lo que ya podemos indicarte</h2>
          <ul className="mt-4 space-y-3 text-[0.95rem] leading-relaxed text-muted">
            <li className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-[2px] bg-blue/60" />
              La calculadora de ahorro funciona por completo en tu navegador. Los valores que escribes no
              se envían ni se almacenan en ningún servidor.
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-[2px] bg-blue/60" />
              Si decides incluir el resumen del cálculo en un correo, el sitio te muestra antes el texto
              exacto que se compartirá.
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-[2px] bg-blue/60" />
              La única forma de contacto de este sitio es el correo electrónico que escribes tú.
            </li>
          </ul>
        </div>

        <p className="mt-8 text-[0.95rem] leading-relaxed text-muted">
          ¿Tienes una consulta sobre el tratamiento de datos? Escríbenos a{" "}
          <a
            href={MAILTO_DIAGNOSTICO}
            className="font-semibold text-blue underline decoration-blue/35 underline-offset-4 transition-colors hover:decoration-blue"
          >
            {EMAIL}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
