import { CalendarCheck, MessagesSquare, Receipt } from "lucide-react";
import DemoVideo from "./DemoVideo";
import Reveal from "./Reveal";
import { Kicker, Section, SectionLead, SectionTitle } from "./ui";

const HIGHLIGHTS = [
  { Icon: MessagesSquare, text: "Responde las consultas de siempre, a cualquier hora." },
  { Icon: Receipt, text: "Cotiza con los precios y condiciones que tú defines." },
  { Icon: CalendarCheck, text: "Revisa la disponibilidad real y deja la cita agendada." },
];

export default function DemoSection() {
  return (
    <Section id="ejemplo" tone="ink">
      <Reveal>
        <Kicker tone="light">Un ejemplo</Kicker>
        <SectionTitle tone="light">Así se ve cuando el proceso deja de depender de ti</SectionTitle>
        <SectionLead tone="light">
          Un asistente de atención al cliente para una clínica dental: atiende a quien escribe por la
          web, resuelve las preguntas de precios y horarios, y agenda la cita. La persona a cargo solo
          entra cuando hace falta.
        </SectionLead>
      </Reveal>

      <Reveal delay={70} className="mt-10">
        <DemoVideo />
      </Reveal>

      <ul className="mt-8 grid gap-4 sm:grid-cols-3">
        {HIGHLIGHTS.map((highlight, index) => (
          <Reveal as="li" key={highlight.text} delay={index * 60} className="list-none">
            <div className="flex h-full gap-3 rounded-xl border border-white/12 bg-white/5 px-4 py-3.5">
              <span aria-hidden="true" className="mt-0.5 shrink-0 text-green-300">
                <highlight.Icon size={17} strokeWidth={1.8} />
              </span>
              <p className="text-[0.89rem] leading-relaxed text-white/80">{highlight.text}</p>
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={120}>
        <p className="mt-6 text-[0.85rem] leading-relaxed text-white/55">
          Ejemplo demostrativo. Cada automatización se arma sobre tus procesos, tus datos y las
          herramientas que ya usas.
        </p>
      </Reveal>
    </Section>
  );
}
