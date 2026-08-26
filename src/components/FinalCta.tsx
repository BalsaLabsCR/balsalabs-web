import { ArrowRight, CalendarCheck, Check, Mail } from "lucide-react";
import Reveal from "./Reveal";
import { ButtonLink, Kicker } from "./ui";
import { CALENDLY_URL, EMAIL, MAILTO_DIAGNOSTICO, MAILTO_EVALUAR_PROCESO } from "@/lib/site";

/** Señales de que un proceso es buen candidato para un primer experimento. */
const SIGNALS = [
  "Se repite todas las semanas.",
  "Consume muchas horas manuales.",
  "Sigue pasos relativamente claros.",
  "La información ya existe digitalmente.",
  "Afecta ventas, costos o servicio.",
  "Puede conservar supervisión humana.",
];

export default function FinalCta() {
  return (
    <section
      id="diagnostico"
      className="relative scroll-mt-24 overflow-hidden bg-ink py-16 text-white sm:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:52px_52px] [mask-image:radial-gradient(100%_70%_at_50%_0%,black,transparent_75%)]"
      />
      <div className="container-page relative">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <Reveal>
            <Kicker tone="light">Siguiente paso</Kicker>
            <h2 className="mt-5 text-[1.7rem] font-extrabold leading-[1.15] text-white sm:text-[2.1rem]">
              ¿Qué proceso de tu negocio debería dejar de depender de trabajo manual?
            </h2>
            <p className="mt-4 max-w-lg text-[1rem] leading-relaxed text-white/70">
              Agenda 30 minutos sin costo: identificamos una oportunidad concreta, diseñamos un primer
              experimento y definimos cómo medir el resultado.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={CALENDLY_URL} external variant="solidLight" size="lg">
                <CalendarCheck size={18} aria-hidden="true" />
                Agenda una asesoría gratuita
                <ArrowRight size={18} aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href={MAILTO_EVALUAR_PROCESO} variant="ghostDark" size="lg">
                <Mail size={18} aria-hidden="true" />
                Escribir a {EMAIL}
              </ButtonLink>
            </div>

            <p className="mt-5 text-[0.88rem] text-white/60">
              ¿No te sirve ninguno de los horarios? Escríbenos a{" "}
              <a
                href={MAILTO_DIAGNOSTICO}
                className="font-semibold text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
              >
                {EMAIL}
              </a>
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-2xl border border-white/15 bg-white/[0.05] p-6">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.13em] text-white/60">
                Un buen candidato para empezar
              </p>
              <ul className="mt-4 space-y-2.5">
                {SIGNALS.map((signal) => (
                  <li key={signal} className="flex gap-3 text-[0.92rem] leading-snug text-white/90">
                    <Check
                      size={16}
                      strokeWidth={2.5}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-green-300"
                    />
                    {signal}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
