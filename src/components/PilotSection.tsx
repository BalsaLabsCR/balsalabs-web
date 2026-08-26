import { ArrowRight, BarChart3, CalendarDays, Check, Plug, Target } from "lucide-react";
import Reveal from "./Reveal";
import { ButtonLink, Kicker, Section, SectionLead, SectionTitle } from "./ui";
import { CALENDLY_URL, MAILTO_PILOTO, PILOT_DURATION, PILOT_PRICE } from "@/lib/site";

/** Qué ocurre durante el piloto, en el orden en que el cliente lo vive. */
const PHASES = [
  {
    Icon: Target,
    title: "Elegimos un proceso",
    text: "Uno solo, frecuente y con impacto claro. Definimos el alcance y qué se va a medir.",
  },
  {
    Icon: Plug,
    title: "Construimos el agente",
    text: "Funcionando sobre tus herramientas y tus datos reales, con supervisión humana.",
  },
  {
    Icon: BarChart3,
    title: "Medimos el resultado",
    text: "Tiempo por caso, volumen atendido, errores y costo, comparados con tu punto de partida.",
  },
  {
    Icon: CalendarDays,
    title: "Decides con números",
    text: "Te entregamos los datos y el costo de llevarlo a producción. Continuar es opcional.",
  },
];

/** Entregables concretos del piloto. */
const INCLUDES = [
  "Un agente funcionando sobre un proceso real.",
  "Integración con las herramientas que ya usas.",
  "Métricas antes y después, sin maquillaje.",
  "Informe con los resultados y los límites encontrados.",
  "Ruta y costo estimado para la versión completa.",
];

export default function PilotSection() {
  return (
    <Section id="piloto" tone="ink">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <Reveal>
            <Kicker tone="light">Piloto de agente de IA</Kicker>
            <SectionTitle tone="light">
              Pruébalo en tu operación por {PILOT_PRICE} antes de invertir en construirlo todo.
            </SectionTitle>
            <SectionLead tone="light">
              Implementamos un agente sobre un proceso real de tu negocio y medimos lo que cambia. Al
              final tienes cifras de tu propia operación —no una demo— para decidir si vale la pena
              escalarlo.
            </SectionLead>
          </Reveal>

          <ol className="mt-9 grid gap-4 sm:grid-cols-2">
            {PHASES.map((phase, index) => (
              <Reveal as="li" key={phase.title} delay={index * 60} className="list-none">
                <div className="h-full rounded-2xl border border-white/15 bg-white/[0.05] p-5">
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-green-300"
                  >
                    <phase.Icon size={18} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-4 text-[0.98rem] font-bold text-white">{phase.title}</h3>
                  <p className="mt-1.5 text-[0.88rem] leading-relaxed text-white/70">{phase.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={80}>
          <div className="rounded-2xl border border-white/15 bg-white p-6 text-ink shadow-lift sm:p-7">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.13em] text-blue">
              Precio fijo
            </p>
            <p className="mt-3 flex items-end gap-2">
              <span className="font-display text-[2.75rem] font-extrabold leading-none tracking-tight text-ink">
                {PILOT_PRICE}
              </span>
              <span className="pb-1 text-[0.9rem] text-muted">USD, pago único</span>
            </p>
            <p className="mt-2 text-[0.88rem] text-muted">
              Duración estimada: {PILOT_DURATION}. Sin contratos de permanencia.
            </p>

            <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
              {INCLUDES.map((item) => (
                <li key={item} className="flex gap-3 text-[0.92rem] leading-snug text-ink">
                  <Check
                    size={16}
                    strokeWidth={2.5}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-green"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-3">
              <ButtonLink href={CALENDLY_URL} external size="lg" className="w-full">
                Agenda una llamada gratuita
                <ArrowRight size={18} aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href={MAILTO_PILOTO} variant="secondary" className="w-full">
                Prefiero escribir un correo
              </ButtonLink>
            </div>

            <p className="mt-4 text-center text-[0.82rem] text-muted">
              Si el piloto no muestra resultados que justifiquen seguir, te lo decimos.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
