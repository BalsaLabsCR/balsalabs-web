"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * Observa un elemento y marca `data-visible` cuando entra en pantalla.
 * La preferencia `prefers-reduced-motion` se resuelve en CSS: la clase `.reveal`
 * se muestra sin transición ni desplazamiento cuando el usuario la tiene activa.
 */
export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15, ...options },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return { ref, visible };
}

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Retraso en milisegundos para escalonar elementos de una misma fila. */
  delay?: number;
};

export default function Reveal({ children, as: Tag = "div", className, delay = 0 }: RevealProps) {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      data-visible={visible}
      className={`reveal ${className ?? ""}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
