import { ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import { Kicker, Section } from "./ui";

const STATS = [
  {
    value: "60–70%",
    text: "del tiempo laboral corresponde a actividades técnicamente automatizables.",
    note: "Son actividades dentro de los puestos, no empleos eliminados.",
    source: "McKinsey, The Economic Potential of Generative AI",
    href: "https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier",
  },
  {
    value: "92%",
    text: "de los ejecutivos C-level esperaba digitalizar flujos de trabajo con IA para 2026.",
    note: null,
    source: "IBM, Business Automation",
    href: "https://www.ibm.com/think/topics/business-automation",
  },
  {
    value: "248%",
    text: "de ROI a tres años en una organización compuesta que usó Microsoft Power Automate.",
    note: "Caso de gran escala. No es una garantía de resultados.",
    source: "Forrester Consulting, encargado por Microsoft",
    href: "https://tei.forrester.com/go/microsoft/powerautomatetei/index.html",
  },
];

export default function WhyNowSection() {
  return (
    <Section tone="white">
      <Reveal>
        <Kicker>Por qué ahora</Kicker>
        <p className="mt-4 max-w-2xl font-display text-[1.3rem] font-extrabold leading-snug text-ink sm:text-[1.6rem]">
          Hoy la tecnología interpreta mensajes y documentos. Eso hace viable automatizar procesos que
          antes exigían una persona leyendo y copiando.
        </p>
      </Reveal>

      <ul className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-6">
        {STATS.map((stat, index) => (
          <Reveal as="li" key={stat.value} delay={index * 70} className="list-none">
            <div className="h-full border-t-2 border-blue pt-5">
              <p className="font-display text-[2.1rem] font-extrabold leading-none tracking-tight text-blue">
                {stat.value}
              </p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink">{stat.text}</p>
              {stat.note && <p className="mt-2 text-[0.8rem] leading-relaxed text-muted">{stat.note}</p>}
              <a
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-start gap-1.5 text-[0.8rem] text-muted underline decoration-line underline-offset-4 transition-colors hover:text-blue hover:decoration-blue"
              >
                {stat.source}
                <ExternalLink size={12} aria-hidden="true" className="mt-1 shrink-0" />
                <span className="sr-only">(se abre en una pestaña nueva)</span>
              </a>
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={90}>
        <p className="mt-8 text-[0.8rem] text-muted">
          Cifras de contexto de mercado, no resultados de BalsaLabs.
        </p>
      </Reveal>
    </Section>
  );
}
