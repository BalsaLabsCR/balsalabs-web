import Faq from "./Faq";
import Reveal from "./Reveal";
import { Kicker, Section, SectionLead, SectionTitle } from "./ui";
import { EMAIL, MAILTO_DIAGNOSTICO } from "@/lib/site";

export default function FaqSection() {
  return (
    <Section id="preguntas-frecuentes" tone="white">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <Reveal>
          <div className="lg:sticky lg:top-24">
            <Kicker>Preguntas frecuentes</Kicker>
            <SectionTitle>Lo que suelen preguntarnos.</SectionTitle>
            <SectionLead>
              ¿No está tu duda? Escríbenos a{" "}
              <a
                href={MAILTO_DIAGNOSTICO}
                className="font-semibold text-blue underline decoration-blue/35 underline-offset-4 transition-colors hover:decoration-blue"
              >
                {EMAIL}
              </a>
              .
            </SectionLead>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <Faq />
        </Reveal>
      </div>
    </Section>
  );
}
