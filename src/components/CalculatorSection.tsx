import Calculator from "./Calculator";
import Reveal from "./Reveal";
import { Kicker, Section, SectionLead, SectionTitle } from "./ui";

export default function CalculatorSection() {
  return (
    <Section id="calculadora" tone="ivory">
      <Reveal>
        <Kicker>Calculadora</Kicker>
        <SectionTitle>¿Cuánto podría ahorrarte automatizar un proceso?</SectionTitle>
        <SectionLead>
          Usa el volumen y el costo real de tu negocio. El cálculo ocurre en tu navegador y no se envía a
          BalsaLabs.
        </SectionLead>
      </Reveal>

      <Reveal delay={80} className="mt-10">
        <Calculator />
      </Reveal>
    </Section>
  );
}
