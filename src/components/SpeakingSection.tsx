import Image from "next/image";
import charla from "../../public/charla-ia-wework-escazu.jpg";
import Reveal from "./Reveal";
import { Kicker, Section, SectionLead, SectionTitle } from "./ui";

export default function SpeakingSection() {
  return (
    <Section id="charlas" tone="ivory">
      {/* La fotografía va primero en el DOM: en móvil abre la sección y en escritorio queda a la izquierda. */}
      <div className="grid items-center gap-8 lg:grid-cols-[55fr_45fr] lg:gap-14">
        <Reveal>
          <figure>
            <div className="overflow-hidden rounded-2xl border border-line shadow-card">
              <Image
                src={charla}
                alt="Jonatan Chaverri impartiendo una charla sobre inteligencia artificial aplicada a empresas en WeWork Escazú."
                sizes="(min-width: 1024px) 660px, 100vw"
                placeholder="blur"
                className="block aspect-[16/10] w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-[0.82rem] leading-relaxed text-muted">
              Charla sobre inteligencia artificial aplicada a empresas — WeWork Escazú, agosto de 2026.
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={80}>
          <Kicker>Conocimiento que se comparte</Kicker>
          <SectionTitle>IA aplicada, explicada con claridad.</SectionTitle>
          <SectionLead>
            Además de desarrollar automatizaciones, ayudamos a equipos y empresas a entender dónde la
            inteligencia artificial aporta valor, qué riesgos deben considerar y cómo empezar de forma
            práctica.
          </SectionLead>
        </Reveal>
      </div>
    </Section>
  );
}
