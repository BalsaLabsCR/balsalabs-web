import { ArrowRight, Check } from "lucide-react";
import Reveal from "./Reveal";
import { ButtonLink, Kicker, Section, SectionLead, SectionTitle } from "./ui";
import { CALENDLY_URL, EMAIL, MAILTO_PILOTO, PILOT_DURATION, PILOT_PRICE } from "@/lib/site";

/** El recorrido del piloto, en una sola línea en lugar de cuatro tarjetas. */
const STEPS = ["Elegimos el proceso", "construimos", "medimos", "decides"];

/** Lo que recibe el cliente. El precio y la duración van en la cabecera de la tarjeta. */
const INCLUDES = [
  "Un proceso claramente delimitado.",
  "Integración con las herramientas acordadas.",
  "Métricas antes y después.",
  "Recomendación y costo estimado para escalar.",
];

export default function PilotSection() {
  return (
    <Section id="piloto" tone="ink">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <Reveal>
            <Kicker tone="light">Piloto de automatización</Kicker>
            <SectionTitle tone="light">
              Pruébalo en tu operación por {PILOT_PRICE} antes de construirlo todo.
            </SectionTitle>
            <SectionLead tone="light">
              Implementamos una automatización sobre un proceso real y medimos lo que cambia. Al
              finalizar tendrás datos de tu propia operación para decidir si vale la pena escalar.
            </SectionLead>
          </Reveal>

          <Reveal delay={70}>
            <ol className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-2">
              {STEPS.map((step, index) => (
                <li key={step} className="flex items-center gap-3">
                  {index > 0 && (
                    <ArrowRight
                      size={15}
                      aria-hidden="true"
                      className="shrink-0 text-green-300"
                    />
                  )}
                  <span className="text-[0.92rem] font-semibold text-white/85">{step}</span>
                </li>
              ))}
            </ol>
          </Reveal>
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
                Escribir a {EMAIL}
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
