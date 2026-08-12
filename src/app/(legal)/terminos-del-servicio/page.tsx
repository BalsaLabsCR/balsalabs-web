import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { EMAIL, MAILTO_DIAGNOSTICO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos del servicio | BalsaLabs",
  description:
    "Página preparada para publicar los términos del servicio de BalsaLabs. Mientras tanto, puedes consultarnos por correo.",
  alternates: { canonical: "/terminos-del-servicio" },
  robots: { index: false, follow: true },
};

export default function TerminosDelServicio() {
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
          Términos del servicio
        </h1>

        <p className="mt-6 text-[1.02rem] leading-relaxed text-muted">
          Esta página está preparada para publicar los términos del servicio de BalsaLabs. El documento
          está en elaboración y se publicará aquí cuando esté listo.
        </p>

        <div className="mt-8 rounded-2xl border border-line bg-ivory p-6">
          <h2 className="text-[1.05rem] font-bold text-ink">Mientras tanto</h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
            El contenido de este sitio es informativo. Las estimaciones de la calculadora son
            aproximaciones basadas en los datos que ingresa cada persona y no constituyen una oferta ni una
            garantía de resultados. Las condiciones de cada proyecto se acuerdan por escrito antes de
            iniciar.
          </p>
        </div>

        <p className="mt-8 text-[0.95rem] leading-relaxed text-muted">
          ¿Necesitas las condiciones para una contratación? Escríbenos a{" "}
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
