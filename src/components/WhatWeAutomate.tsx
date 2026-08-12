import {
  CalendarCheck,
  FileText,
  Megaphone,
  MessagesSquare,
  UserRoundCheck,
  Users,
  Workflow,
} from "lucide-react";
import Reveal from "./Reveal";
import { Kicker, Section, SectionLead, SectionTitle } from "./ui";

const CATEGORIES = [
  {
    Icon: MessagesSquare,
    title: "Atención y ventas",
    items: [
      "Respuestas por WhatsApp y web.",
      "Calificación de interesados.",
      "Seguimientos automáticos.",
      "Registro en el CRM.",
    ],
  },
  {
    Icon: CalendarCheck,
    title: "Citas y solicitudes",
    items: [
      "Disponibilidad y agendamiento.",
      "Confirmaciones y recordatorios.",
      "Reprogramaciones.",
      "Seguimiento después del servicio.",
    ],
  },
  {
    Icon: FileText,
    title: "Documentos y datos",
    items: [
      "Extracción de facturas y contratos.",
      "Clasificación y validación.",
      "Resúmenes automáticos.",
      "Registro en tus sistemas.",
    ],
  },
  {
    Icon: Workflow,
    title: "Operaciones internas",
    items: [
      "Notificaciones y aprobaciones.",
      "Sincronización entre herramientas.",
      "Alertas de tareas atrasadas.",
      "Reportes listos, sin armarlos.",
    ],
  },
  {
    Icon: Users,
    title: "Recursos humanos",
    items: [
      "Filtro inicial de candidatos.",
      "Resúmenes de entrevistas.",
      "Onboarding y políticas internas.",
      "Preguntas frecuentes del personal.",
    ],
  },
  {
    Icon: Megaphone,
    title: "Marketing conectado",
    items: [
      "Objeciones frecuentes detectadas.",
      "Briefs de campaña.",
      "Reutilización de contenido.",
      "Propuestas con revisión humana.",
    ],
  },
];

export default function WhatWeAutomate() {
  return (
    <Section id="que-automatizamos" tone="white">
      <Reveal>
        <Kicker>Qué automatizamos</Kicker>
        <SectionTitle>Procesos que pueden dejar de depender de trabajo manual</SectionTitle>
        <SectionLead>
          No todo necesita un agente. Combinamos automatización tradicional, IA e integraciones según el
          caso.
        </SectionLead>
      </Reveal>

      <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((category, index) => (
          <Reveal as="li" key={category.title} delay={(index % 3) * 60} className="list-none">
            <div className="group h-full rounded-2xl border border-line bg-white p-6 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-blue/35">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink text-white"
                >
                  <category.Icon size={17} strokeWidth={1.8} />
                </span>
                <h3 className="text-[1rem] font-bold text-ink">{category.title}</h3>
              </div>
              <ul className="mt-4 space-y-1.5">
                {category.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[0.89rem] leading-relaxed text-muted">
                    <span
                      aria-hidden="true"
                      className="mt-[0.5rem] h-1.5 w-1.5 shrink-0 rounded-[2px] bg-blue/60"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={90}>
        <p className="mt-6 flex items-center gap-2.5 rounded-xl border border-green/20 bg-green-50 px-4 py-3 text-[0.9rem] text-ink">
          <UserRoundCheck size={17} aria-hidden="true" className="shrink-0 text-green" />
          En todos los casos, las excepciones y las decisiones delicadas pasan a una persona.
        </p>
      </Reveal>
    </Section>
  );
}
