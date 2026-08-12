"use client";

import { useEffect, useState } from "react";
import { Database, MessageSquare, ScanSearch, Send, UserCheck } from "lucide-react";

const STEPS = [
  { title: "Consulta recibida", detail: "Mensaje por WhatsApp.", Icon: MessageSquare },
  { title: "IA interpreta", detail: "Detecta la intención.", Icon: ScanSearch },
  { title: "Sistema consulta datos", detail: "Catálogo, precio, disponibilidad.", Icon: Database },
  { title: "Acción ejecutada", detail: "Responde y registra en el CRM.", Icon: Send },
  { title: "Humano supervisa", detail: "Las excepciones pasan a una persona.", Icon: UserCheck },
] as const;

export default function HeroDiagram() {
  // `null` = recorrido detenido: todos los pasos se muestran en su estado final.
  const [active, setActive] = useState<number | null>(null);
  const animated = active !== null;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setActive((current) => (current === null ? 0 : (current + 1) % (STEPS.length + 1)));
    }, 1700);
    return () => window.clearInterval(id);
  }, []);

  return (
    <figure className="m-0">
      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-lift">
        <div className="flex items-center justify-between gap-3 border-b border-line bg-ivory/70 px-5 py-3.5">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink">
            Flujo de atención comercial
          </p>
          <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-line bg-white px-2.5 py-1 text-[0.68rem] font-semibold text-green">
            <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
              {animated && (
                <span className="node-pulse absolute inline-flex h-full w-full rounded-full bg-green" />
              )}
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green" />
            </span>
            En operación
          </span>
        </div>

        <ol className="relative px-5 py-5 sm:px-6">
          {STEPS.map((step, index) => {
            const isActive = index === active;
            const isDone = active === null || index < active;
            return (
              <li key={step.title} className="relative flex gap-4 pb-5 last:pb-0">
                {index < STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className={`absolute left-[19px] top-10 h-[calc(100%-2.5rem)] w-px transition-colors duration-500 ${
                      isDone || isActive ? "bg-blue/45" : "bg-line"
                    }`}
                  >
                    {isActive && (
                      <svg
                        className="absolute -left-px h-full w-[3px] overflow-visible"
                        aria-hidden="true"
                        preserveAspectRatio="none"
                        viewBox="0 0 3 100"
                      >
                        <line
                          x1="1.5"
                          y1="0"
                          x2="1.5"
                          y2="100"
                          stroke="#246BCE"
                          strokeWidth="2"
                          className="flow-line-active"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    )}
                  </span>
                )}

                <span
                  aria-hidden="true"
                  className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-500 ${
                    isActive
                      ? "border-blue bg-blue text-white shadow-[0_0_0_5px_rgba(36,107,206,0.12)]"
                      : isDone
                        ? "border-blue/30 bg-blue-50 text-blue"
                        : "border-line bg-white text-muted"
                  }`}
                >
                  <step.Icon size={18} strokeWidth={1.9} />
                </span>

                <div className="min-w-0 pt-0.5">
                  <p className="flex items-baseline gap-2 font-display text-[0.95rem] font-bold text-ink">
                    <span className="text-[0.7rem] font-semibold tabular-nums text-muted">
                      0{index + 1}
                    </span>
                    {step.title}
                  </p>
                  <p className="mt-1 text-[0.86rem] leading-relaxed text-muted">{step.detail}</p>
                </div>
              </li>
            );
          })}
        </ol>

        <p className="border-t border-line bg-ivory/60 px-5 py-3 text-[0.75rem] text-muted sm:px-6">
          <span className="font-semibold text-ink">Cada paso queda registrado.</span> Reglas y permisos
          definidos con el negocio.
        </p>
      </div>
      <figcaption className="sr-only">
        Diagrama del flujo de una automatización: consulta recibida, interpretación con IA, consulta de
        datos en los sistemas, acción ejecutada y supervisión humana de las excepciones.
      </figcaption>
    </figure>
  );
}
