import { ArrowDown, CalendarCheck } from "lucide-react";
import HeroDiagram from "./HeroDiagram";
import { ButtonLink, Kicker } from "./ui";
import { CALENDLY_URL } from "@/lib/site";

const TRUST = ["Integraciones reales", "Supervisión humana", "Resultados medibles"];

export default function Hero() {
  return (
    <section id="inicio" className="relative scroll-mt-28 overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="grid-paper pointer-events-none absolute inset-0 [mask-image:radial-gradient(120%_80%_at_65%_0%,black,transparent_72%)]"
      />
      {/* El hero se pinta sin animación de entrada: es el contenido principal. */}
      <div className="container-page relative py-14 sm:py-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Kicker>Automatizaciones con IA para negocios</Kicker>

            <h1 className="mt-6 text-[2.1rem] font-extrabold leading-[1.1] text-ink sm:text-[2.75rem] lg:text-[3.25rem]">
              Automatiza el trabajo repetitivo.{" "}
              <span className="text-muted">Recupera tiempo para hacer crecer tu negocio.</span>
            </h1>

            <p className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-muted">
              Conectamos la IA con WhatsApp, documentos y los sistemas que ya utiliza tu negocio para
              responder, registrar y ejecutar tareas automáticamente.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <ButtonLink href={CALENDLY_URL} external size="lg">
                <CalendarCheck size={18} aria-hidden="true" />
                Agenda una asesoría gratuita
              </ButtonLink>
              <ButtonLink href="#demostracion" variant="secondary" size="lg">
                Ver cómo funciona
                <ArrowDown size={18} aria-hidden="true" />
              </ButtonLink>
            </div>

            <p className="mt-4 text-[0.88rem] text-muted">30 minutos, sin costo y sin compromiso.</p>

            <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.85rem] text-muted">
              {TRUST.map((item, index) => (
                <li key={item} className="flex items-center gap-3">
                  {index > 0 && <span aria-hidden="true" className="h-1 w-1 rounded-full bg-line" />}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pl-4">
            <HeroDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
