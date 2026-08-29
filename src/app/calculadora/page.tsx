import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Calculator from "@/components/Calculator";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Calculadora de ahorro | BalsaLabs",
  description:
    "Estima cuántas horas y cuánto dinero podría ahorrarte automatizar un proceso repetitivo. El cálculo ocurre en tu navegador.",
  alternates: { canonical: "/calculadora" },
};

export default function CalculadoraPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido" className="flex-1 bg-ivory">
        <div className="container-page py-14 sm:py-16 lg:py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[0.9rem] font-semibold text-blue transition-colors hover:text-blue-700"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Volver al inicio
          </Link>

          <h1 className="mt-8 max-w-3xl text-[1.65rem] font-extrabold leading-[1.15] text-ink sm:text-[2rem] lg:text-[2.35rem]">
            ¿Cuánto podría ahorrarte automatizar un proceso?
          </h1>
          <p className="mt-4 max-w-2xl text-[1rem] leading-relaxed text-muted">
            Usa el volumen y el costo real de tu negocio. El cálculo ocurre en tu navegador y no se envía
            a BalsaLabs.
          </p>

          <div className="mt-10">
            <Calculator />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
