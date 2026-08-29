import { CalendarClock, MessageCircleQuestion, Shuffle } from "lucide-react";
import Reveal from "./Reveal";
import { Kicker, Section, SectionTitle } from "./ui";

const PROBLEMS = [
  {
    Icon: MessageCircleQuestion,
    title: "Consultas repetitivas",
    text: "Las mismas preguntas sobre precios, disponibilidad y políticas todos los días.",
  },
  {
    Icon: CalendarClock,
    title: "Seguimientos que se pierden",
    text: "Cotizaciones, solicitudes y citas que dependen de que alguien recuerde responder.",
  },
  {
    Icon: Shuffle,
    title: "Información dispersa",
    text: "Datos en WhatsApp, correo y hojas de cálculo que no se actualizan entre sí.",
  },
];

export default function ProblemSection() {
  return (
    <Section tone="ivory">
      <Reveal>
        <Kicker>El punto de partida</Kicker>
        <SectionTitle>Tu equipo no debería conectar manualmente todos tus sistemas.</SectionTitle>
      </Reveal>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PROBLEMS.map((problem, index) => (
          <Reveal as="li" key={problem.title} delay={index * 60} className="list-none">
            <div className="group h-full rounded-2xl border border-line bg-white p-5 transition-colors duration-300 hover:border-blue/35">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-ivory text-ink transition-colors duration-300 group-hover:border-blue/40 group-hover:bg-blue-50 group-hover:text-blue"
              >
                <problem.Icon size={18} strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 text-[0.98rem] font-bold text-ink">{problem.title}</h3>
              <p className="mt-1.5 text-[0.88rem] leading-relaxed text-muted">{problem.text}</p>
            </div>
          </Reveal>
        ))}
      </ul>

    </Section>
  );
}
