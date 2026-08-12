"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { MAILTO_DIAGNOSTICO, NAV_LINKS } from "@/lib/site";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  // Cierra con Escape, mantiene el foco dentro del panel y bloquea el scroll de fondo.
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    panelRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab") return;

      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      const outsidePanel = !panelRef.current?.contains(active);
      if (event.shiftKey && (active === first || active === panelRef.current || outsidePanel)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.removeProperty("overflow");
    };
  }, [open, close]);

  const headerHeight = scrolled ? 60 : 72;

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur-lg transition-[height,border-color,box-shadow] duration-300 supports-[backdrop-filter]:bg-white/85 ${
          scrolled
            ? "h-[60px] border-line shadow-[0_1px_0_rgba(11,31,51,0.04)]"
            : "h-[72px] border-transparent"
        }`}
      >
        <div className="container-page flex h-full items-center justify-between gap-4">
          <a
            href="#inicio"
            className="flex items-center gap-2.5 rounded-md font-display text-[1.05rem] font-extrabold tracking-tight text-ink"
          >
            <NodeMark />
            BalsaLabs
          </a>

          <nav aria-label="Navegación principal" className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-[0.9rem] font-medium text-muted transition-colors hover:bg-ivory hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={MAILTO_DIAGNOSTICO}
              aria-label="Solicitar diagnóstico"
              className="inline-flex rounded-xl bg-blue px-3 py-2 text-[0.82rem] font-semibold text-white transition-colors hover:bg-blue-700 sm:px-4 sm:text-[0.88rem]"
            >
              <span className="sm:hidden">Diagnóstico</span>
              <span className="hidden sm:inline">Solicitar diagnóstico</span>
            </a>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => (open ? close() : setOpen(true))}
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line text-ink transition-colors hover:border-blue hover:text-blue lg:hidden"
            >
              {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/*
        El panel vive fuera del <header>: el `backdrop-filter` del encabezado crea un
        bloque contenedor y dejaría atrapado el posicionamiento fijo dentro de él.
      */}
      {open && (
        <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden" style={{ top: headerHeight }}>
          <button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            onClick={close}
            className="absolute inset-0 h-full w-full cursor-default bg-ink/25"
          />
          <div
            ref={panelRef}
            id="menu-movil"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
            tabIndex={-1}
            className="relative max-h-full overflow-y-auto border-b border-line bg-white px-5 pb-6 pt-3 shadow-lift focus:outline-none"
          >
            <nav aria-label="Navegación móvil" className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="border-b border-line/70 py-3.5 text-[1.02rem] font-medium text-ink transition-colors hover:text-blue"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href={MAILTO_DIAGNOSTICO}
              onClick={close}
              className="mt-5 flex w-full items-center justify-center rounded-xl bg-blue px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Solicitar diagnóstico
            </a>
          </div>
        </div>
      )}
    </>
  );
}

/** Marca tipográfica: tres nodos conectados, en línea con el motivo gráfico del sitio. */
function NodeMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" className="shrink-0">
      <path
        d="M4 16 L11 6 L18 16"
        fill="none"
        stroke="#246BCE"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="4" cy="16" r="2.4" fill="#0B1F33" />
      <circle cx="11" cy="6" r="2.4" fill="#246BCE" />
      <circle cx="18" cy="16" r="2.4" fill="#1F7A5C" />
    </svg>
  );
}
