import { ArrowRight, CalendarCheck, Mail } from "lucide-react";
import Reveal from "./Reveal";
import { ButtonLink, Kicker } from "./ui";
import { CALENDLY_URL, EMAIL, MAILTO_DIAGNOSTICO } from "@/lib/site";

export default function FinalCta() {
  return (
    <section
      id="diagnostico"
      className="relative scroll-mt-24 overflow-hidden bg-ink py-16 text-white sm:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:52px_52px] [mask-image:radial-gradient(100%_70%_at_50%_0%,black,transparent_75%)]"
      />
      <div className="container-page relative">
        <Reveal>
          <div className="max-w-2xl">
            <Kicker tone="light">Siguiente paso</Kicker>
            <h2 className="mt-5 text-[1.7rem] font-extrabold leading-[1.15] text-white sm:text-[2.1rem]">
              ¿Qué proceso de tu negocio debería dejar de depender de trabajo manual?
            </h2>
            <p className="mt-4 text-[1rem] leading-relaxed text-white/70">
              Agenda 30 minutos sin costo. Identificaremos una oportunidad concreta y definiremos cómo
              medirla.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={CALENDLY_URL} external variant="solidLight" size="lg">
                <CalendarCheck size={18} aria-hidden="true" />
                Agenda una asesoría gratuita
                <ArrowRight size={18} aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href={MAILTO_DIAGNOSTICO} variant="ghostDark" size="lg">
                <Mail size={18} aria-hidden="true" />
                Escribir a {EMAIL}
              </ButtonLink>
            </div>

            <p className="mt-6 text-[0.88rem] leading-relaxed text-white/60">
              Un buen candidato es frecuente, consume tiempo, sigue reglas claras y puede medirse.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
