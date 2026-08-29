import { CalendarCheck, FileText, MessagesSquare, UserRoundCheck, Workflow } from "lucide-react";
import Reveal from "./Reveal";
import { Kicker, Section, SectionLead, SectionTitle } from "./ui";

const CATEGORIES = [
  {
    Icon: MessagesSquare,
    title: "Atención y ventas",
    text: "Respuestas, calificación de interesados, seguimientos y registro en el CRM.",
  },
  {
    Icon: CalendarCheck,
    title: "Citas y solicitudes",
    text: "Disponibilidad, agendamiento, confirmaciones y recordatorios.",
  },
  {
    Icon: FileText,
    title: "Documentos y datos",
    text: "Extracción, clasificación, validación y registro de información.",
  },
  {
    Icon: Workflow,
    title: "Operaciones internas",
    text: "Aprobaciones, sincronización, alertas y reportes automáticos.",
  },
];

export default function WhatWeAutomate() {
  return (
    <Section id="que-automatizamos" tone="white">
      <Reveal>
        <Kicker>Qué automatizamos</Kicker>
        <SectionTitle>Procesos que pueden dejar de depender de trabajo manual.</SectionTitle>
        <SectionLead>
          No todo necesita inteligencia artificial. Combinamos automatización, integraciones e IA según
          cada proceso.
        </SectionLead>
      </Reveal>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((category, index) => (
          <Reveal as="li" key={category.title} delay={index * 60} className="list-none">
            <div className="group h-full rounded-2xl border border-line bg-white p-6 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-blue/35">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink text-white"
              >
                <category.Icon size={17} strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 text-[1rem] font-bold text-ink">{category.title}</h3>
              <p className="mt-1.5 text-[0.88rem] leading-relaxed text-muted">{category.text}</p>
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={90}>
        <p className="mt-6 flex items-center gap-2.5 rounded-xl border border-green/20 bg-green-50 px-4 py-3 text-[0.9rem] text-ink">
          <UserRoundCheck size={17} aria-hidden="true" className="shrink-0 text-green" />
          Las excepciones y decisiones delicadas siempre pueden pasar a una persona.
        </p>
      </Reveal>
    </Section>
  );
}
