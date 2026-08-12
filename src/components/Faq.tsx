"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { FAQS } from "@/lib/faqs";

export default function Faq() {
  const baseId = useId();
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggle = (index: number) =>
    setOpenIndexes((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
    );

  return (
    <ul className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
      {FAQS.map((faq, index) => {
        const isOpen = openIndexes.includes(index);
        const buttonId = `${baseId}-boton-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <li key={faq.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left transition-colors hover:bg-ivory sm:px-7"
              >
                <span className="font-display text-[1rem] font-bold text-ink sm:text-[1.05rem]">
                  {faq.question}
                </span>
                <span
                  aria-hidden="true"
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line text-blue transition-transform duration-300 ${
                    isOpen ? "rotate-45 border-blue bg-blue-50" : ""
                  }`}
                >
                  <Plus size={16} strokeWidth={2.2} />
                </span>
              </button>
            </h3>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="accordion-panel px-6 pb-6 sm:px-7"
              >
                <p className="max-w-3xl border-l-2 border-blue/30 pl-4 text-[0.95rem] leading-relaxed text-muted">
                  {faq.answer}
                </p>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
