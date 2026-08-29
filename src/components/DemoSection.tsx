import { CalendarCheck, MessagesSquare, Search } from "lucide-react";
import DemoVideo from "./DemoVideo";
import Reveal from "./Reveal";
import { Kicker, Section, SectionLead, SectionTitle } from "./ui";

const RESULTS = [
  { Icon: MessagesSquare, text: "Responde consultas frecuentes." },
  { Icon: Search, text: "Consulta información y disponibilidad." },
  { Icon: CalendarCheck, text: "Registra el resultado en el sistema." },
];

export default function DemoSection() {
  return (
    <Section id="demostracion" tone="ink">
      <Reveal>
        <Kicker tone="light">Un ejemplo real</Kicker>
        <SectionTitle tone="light">
          Así se ve cuando el proceso deja de depender de una persona.
        </SectionTitle>
        <SectionLead tone="light">
          En este ejemplo, un asistente atiende la consulta, responde usando información autorizada y
          registra la cita. La persona encargada interviene solamente cuando existe una excepción.
        </SectionLead>
      </Reveal>

      <Reveal delay={70} className="mt-10">
        <DemoVideo />
      </Reveal>

      <ul className="mt-8 grid gap-4 sm:grid-cols-3">
        {RESULTS.map((result, index) => (
          <Reveal as="li" key={result.text} delay={index * 60} className="list-none">
            <div className="flex h-full gap-3 rounded-xl border border-white/12 bg-white/5 px-4 py-3.5">
              <span aria-hidden="true" className="mt-0.5 shrink-0 text-green-300">
                <result.Icon size={17} strokeWidth={1.8} />
              </span>
              <p className="text-[0.89rem] leading-relaxed text-white/80">{result.text}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
