import Image from "next/image";
import jonatan from "../../public/jonatan-chaverri.jpg";
import Reveal from "./Reveal";
import { Kicker, Section, SectionLead, SectionTitle } from "./ui";

export default function FounderSection() {
  return (
    <Section id="quienes-somos" tone="ivory">
      <div className="grid items-center gap-8 sm:grid-cols-[minmax(0,280px)_1fr] sm:gap-10 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-14">
        <Reveal>
          {/* La foto acompaña al texto, no lo encabeza: se limita a 360 px en escritorio. */}
          <div className="w-full max-w-[240px] sm:max-w-[360px] overflow-hidden rounded-2xl border border-line shadow-card">
            <Image
              src={jonatan}
              alt="Jonatan Chaverri, fundador de BalsaLabs, durante una charla sobre inteligencia artificial aplicada a empresas."
              sizes="(min-width: 640px) 360px, 100vw"
              placeholder="blur"
              className="block aspect-[3/4] w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <Kicker>Quién está detrás de BalsaLabs</Kicker>
          <SectionTitle>Tecnología construida con criterio</SectionTitle>
          <SectionLead>
            BalsaLabs es liderada por Jonatan Chaverri, ingeniero de software especializado en sistemas
            backend, agentes de inteligencia artificial y automatización de procesos. El objetivo es
            construir soluciones útiles, medibles y adaptadas a la operación real de cada negocio.
          </SectionLead>
        </Reveal>
      </div>
    </Section>
  );
}
