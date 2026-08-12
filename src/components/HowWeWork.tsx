import Reveal from "./Reveal";
import { Kicker, Section, SectionTitle } from "./ui";

const STEPS = [
  {
    number: "01",
    title: "Descubrimiento",
    text: "Identificamos tareas repetitivas, reglas y excepciones.",
  },
  {
    number: "02",
    title: "Diseño",
    text: "Elegimos un proceso pequeño y medible, y definimos cuándo interviene una persona.",
  },
  {
    number: "03",
    title: "Implementación",
    text: "Conectamos la IA con tus herramientas, con permisos y trazabilidad.",
  },
  {
    number: "04",
    title: "Medición",
    text: "Comparamos con la situación inicial. Expandimos solo si demuestra valor.",
  },
];

export default function HowWeWork() {
  return (
    <Section id="como-trabajamos" tone="white">
      <Reveal>
        <Kicker>Cómo trabajamos</Kicker>
        <SectionTitle>Automatizamos una parte, medimos y después expandimos.</SectionTitle>
      </Reveal>

      <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, index) => (
          <Reveal as="li" key={step.number} delay={index * 60} className="list-none">
            <div className="group h-full rounded-2xl border border-line bg-white p-5 transition-colors duration-300 hover:border-blue/35">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 items-center justify-center rounded-lg border border-line font-display text-[0.72rem] font-extrabold tabular-nums text-blue transition-colors duration-300 group-hover:border-blue group-hover:bg-blue group-hover:text-white"
                >
                  {step.number}
                </span>
                <h3 className="text-[1rem] font-bold text-ink">
                  <span className="sr-only">Paso {step.number}: </span>
                  {step.title}
                </h3>
              </div>
              <p className="mt-3 text-[0.88rem] leading-relaxed text-muted">{step.text}</p>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={90}>
        <p className="mt-8 flex flex-col gap-2.5 font-display text-[1.05rem] font-bold leading-snug text-ink sm:flex-row sm:items-center sm:text-[1.15rem]">
          <span aria-hidden="true" className="h-1 w-9 shrink-0 rounded-full bg-blue sm:mr-2" />
          No empezamos vendiéndote una plataforma. Empezamos por el proceso que quieres mejorar.
        </p>
      </Reveal>
    </Section>
  );
}
