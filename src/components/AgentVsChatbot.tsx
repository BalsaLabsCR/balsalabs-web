import { Check, Minus } from "lucide-react";
import Reveal from "./Reveal";
import { Kicker, Section, SectionTitle } from "./ui";

const ISOLATED = [
  "Responde preguntas genéricas.",
  "No conoce información actualizada.",
  "No consulta tus sistemas.",
  "No registra resultados.",
];

const CONNECTED = [
  "Consulta información autorizada.",
  "Revisa disponibilidad y datos reales.",
  "Ejecuta la acción y deja registro.",
  "Escala las excepciones a una persona.",
];

export default function AgentVsChatbot() {
  return (
    <Section tone="ivory">
      <Reveal>
        <Kicker>La diferencia práctica</Kicker>
        <SectionTitle>Un agente útil no solo conversa. También ejecuta.</SectionTitle>
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <Reveal>
          <article className="h-full rounded-2xl border border-line bg-white/60 p-6">
            <h3 className="text-[0.98rem] font-bold text-muted">Chatbot aislado</h3>
            <ul className="mt-4 space-y-2.5">
              {ISOLATED.map((item) => (
                <li key={item} className="flex gap-3 text-[0.92rem] leading-relaxed text-muted">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-line bg-white"
                  >
                    <Minus size={11} strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={70}>
          <article className="relative h-full overflow-hidden rounded-2xl border border-blue/25 bg-white p-6 shadow-card">
            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-blue" />
            <h3 className="text-[0.98rem] font-bold text-ink">Proceso automatizado con BalsaLabs</h3>
            <ul className="mt-4 space-y-2.5">
              {CONNECTED.map((item) => (
                <li key={item} className="flex gap-3 text-[0.92rem] leading-relaxed text-ink">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-50 text-green"
                  >
                    <Check size={11} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
