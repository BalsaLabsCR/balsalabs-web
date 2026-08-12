"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Info, Lock, RotateCcw } from "lucide-react";
import { EMAIL, mailto } from "@/lib/site";

type Currency = "CRC" | "USD";

const DEFAULTS = {
  processName: "",
  runsPerMonth: "200",
  minutesPerRun: "10",
  automatable: 70,
  rates: { CRC: "4000", USD: "8" } as Record<Currency, string>,
  currency: "CRC" as Currency,
};

const toNumber = (value: string) => {
  const parsed = Number.parseFloat(value.replace(",", "."));
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
};

const formatHours = (hours: number) =>
  new Intl.NumberFormat("es-CR", { maximumFractionDigits: 1 }).format(hours);

const colonesFormatter = new Intl.NumberFormat("es-CR", { maximumFractionDigits: 0 });
const dollarsFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

/** Usa la convención local de cada moneda: ₡1.120.000 y $2,240. */
const formatMoney = (amount: number, currency: Currency) =>
  currency === "CRC"
    ? `₡${colonesFormatter.format(amount).replace(/\s/g, ".")}`
    : dollarsFormatter.format(amount);

export default function Calculator() {
  const [processName, setProcessName] = useState(DEFAULTS.processName);
  const [runsPerMonth, setRunsPerMonth] = useState(DEFAULTS.runsPerMonth);
  const [minutesPerRun, setMinutesPerRun] = useState(DEFAULTS.minutesPerRun);
  const [automatable, setAutomatable] = useState(DEFAULTS.automatable);
  const [rates, setRates] = useState(DEFAULTS.rates);
  const [currency, setCurrency] = useState<Currency>(DEFAULTS.currency);
  const [shareData, setShareData] = useState(false);

  const results = useMemo(() => {
    const runs = toNumber(runsPerMonth);
    const minutes = toNumber(minutesPerRun);
    const rate = toNumber(rates[currency]);
    const share = automatable / 100;

    const currentHours = (runs * minutes) / 60;
    const automatedHours = currentHours * share;
    const monthlySaving = automatedHours * rate;

    return {
      currentHours,
      automatedHours,
      monthlySaving,
      annualSaving: monthlySaving * 12,
    };
  }, [runsPerMonth, minutesPerRun, automatable, rates, currency]);

  const summary = useMemo(
    () =>
      [
        `Proceso: ${processName.trim() || "(sin nombre)"}`,
        `Veces al mes: ${toNumber(runsPerMonth)}`,
        `Minutos por vez: ${toNumber(minutesPerRun)}`,
        `Porcentaje automatizable estimado: ${automatable}%`,
        `Costo por hora: ${formatMoney(toNumber(rates[currency]), currency)}`,
        `Horas actuales al mes: ${formatHours(results.currentHours)}`,
        `Horas potencialmente recuperadas al mes: ${formatHours(results.automatedHours)}`,
        `Ahorro mensual estimado: ${formatMoney(results.monthlySaving, currency)}`,
        `Ahorro anual estimado: ${formatMoney(results.annualSaving, currency)}`,
      ].join("\n"),
    [processName, runsPerMonth, minutesPerRun, automatable, rates, currency, results],
  );

  const ctaHref = shareData
    ? mailto(
        "Quiero evaluar un proceso para automatización",
        `Hola BalsaLabs:\n\nQuiero evaluar este proceso. Esta es la estimación que hice en el sitio:\n\n${summary}\n\nQuedo atento.`,
      )
    : mailto("Quiero evaluar un proceso para automatización");

  const reset = () => {
    setProcessName(DEFAULTS.processName);
    setRunsPerMonth(DEFAULTS.runsPerMonth);
    setMinutesPerRun(DEFAULTS.minutesPerRun);
    setAutomatable(DEFAULTS.automatable);
    setRates(DEFAULTS.rates);
    setCurrency(DEFAULTS.currency);
    setShareData(false);
  };

  const fieldClass =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.95rem] text-ink transition-colors placeholder:text-muted/70 hover:border-muted/45 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/20";
  const labelClass = "block text-[0.85rem] font-semibold text-ink";

  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      {/* ------------------------------- Entradas ------------------------------- */}
      <div className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-[1.05rem] font-bold text-ink">Los datos de tu proceso</h3>
          <button
            type="button"
            onClick={reset}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg px-2 py-1 text-[0.8rem] font-semibold text-muted transition-colors hover:bg-ivory hover:text-ink"
          >
            <RotateCcw size={14} aria-hidden="true" />
            Restablecer
          </button>
        </div>

        <div className="mt-6 space-y-5">
          <div>
            <label className={labelClass} htmlFor="calc-nombre">
              Nombre del proceso
            </label>
            <input
              id="calc-nombre"
              type="text"
              value={processName}
              onChange={(event) => setProcessName(event.target.value)}
              placeholder="Ejemplo: cotizaciones por WhatsApp"
              className={`${fieldClass} mt-2`}
              autoComplete="off"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="calc-veces">
                ¿Cuántas veces se realiza al mes?
              </label>
              <input
                id="calc-veces"
                type="number"
                inputMode="numeric"
                min={0}
                step={1}
                value={runsPerMonth}
                onChange={(event) => setRunsPerMonth(event.target.value)}
                className={`${fieldClass} mt-2 tabular-nums`}
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="calc-minutos">
                ¿Cuántos minutos consume cada vez?
              </label>
              <input
                id="calc-minutos"
                type="number"
                inputMode="numeric"
                min={0}
                step={1}
                value={minutesPerRun}
                onChange={(event) => setMinutesPerRun(event.target.value)}
                className={`${fieldClass} mt-2 tabular-nums`}
              />
            </div>
          </div>

          <div>
            <div className="flex items-baseline justify-between gap-4">
              <label className={labelClass} htmlFor="calc-porcentaje">
                ¿Qué porcentaje estimas que puede automatizarse?
              </label>
              <span className="font-display text-[1rem] font-extrabold tabular-nums text-blue">
                {automatable}%
              </span>
            </div>
            <input
              id="calc-porcentaje"
              type="range"
              min={0}
              max={100}
              step={5}
              value={automatable}
              onChange={(event) => setAutomatable(Number(event.target.value))}
              className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-[#246BCE]"
            />
            <div aria-hidden="true" className="mt-1.5 flex justify-between text-[0.72rem] text-muted">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-[1fr_auto]">
            <div>
              <label className={labelClass} htmlFor="calc-costo">
                Costo aproximado por hora
              </label>
              <input
                id="calc-costo"
                type="number"
                inputMode="decimal"
                min={0}
                step="any"
                value={rates[currency]}
                onChange={(event) =>
                  setRates((current) => ({ ...current, [currency]: event.target.value }))
                }
                className={`${fieldClass} mt-2 tabular-nums`}
              />
            </div>

            <fieldset className="border-0 p-0">
              <legend className={labelClass}>Moneda</legend>
              <div className="mt-2 inline-flex rounded-xl border border-line bg-ivory p-1">
                {(["CRC", "USD"] as const).map((option) => (
                  <label
                    key={option}
                    className={`cursor-pointer rounded-lg px-4 py-2 text-[0.85rem] font-semibold transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-blue ${
                      currency === option ? "bg-white text-ink shadow-card" : "text-muted hover:text-ink"
                    }`}
                  >
                    <input
                      type="radio"
                      name="calc-moneda"
                      value={option}
                      checked={currency === option}
                      onChange={() => setCurrency(option)}
                      className="sr-only"
                    />
                    {option}
                    <span className="sr-only">
                      {option === "CRC" ? " (colones costarricenses)" : " (dólares)"}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        </div>

        <p className="mt-6 flex items-start gap-2.5 border-t border-line pt-5 text-[0.82rem] leading-relaxed text-muted">
          <Lock size={15} aria-hidden="true" className="mt-0.5 shrink-0 text-green" />
          El cálculo ocurre en tu navegador. Nada se envía ni se almacena.
        </p>
      </div>

      {/* ------------------------------- Resultados ------------------------------ */}
      <div className="flex flex-col rounded-2xl border border-ink bg-ink p-6 text-white sm:p-8">
        <h3 className="text-[1.05rem] font-bold text-white">Estimación</h3>

        <div aria-live="polite" className="mt-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <ResultTile
              label="Horas actuales al mes"
              value={formatHours(results.currentHours)}
              unit="h"
            />
            <ResultTile
              label="Horas recuperadas al mes"
              value={formatHours(results.automatedHours)}
              unit="h"
              highlight
            />
          </div>

          <div className="rounded-xl border border-white/12 bg-white/[0.06] p-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-white/60">
              Ahorro mensual estimado
            </p>
            <p className="mt-1.5 font-display text-[2rem] font-extrabold leading-none tabular-nums text-white sm:text-[2.4rem]">
              {formatMoney(results.monthlySaving, currency)}
            </p>
            <p className="mt-4 border-t border-white/12 pt-3.5 text-[0.85rem] text-white/70">
              Ahorro anual estimado:{" "}
              <span className="font-semibold tabular-nums text-white">
                {formatMoney(results.annualSaving, currency)}
              </span>
            </p>
          </div>

          {results.automatedHours >= 0.05 ? (
            <p className="rounded-xl border border-green/40 bg-green/15 px-5 py-4 text-[0.95rem] leading-relaxed text-white">
              Podrías recuperar aproximadamente{" "}
              <strong className="font-bold tabular-nums">
                {formatHours(results.automatedHours)} horas al mes
              </strong>{" "}
              para trabajo de mayor valor.
            </p>
          ) : (
            <p className="rounded-xl border border-white/15 bg-white/[0.04] px-5 py-4 text-[0.95rem] leading-relaxed text-white/70">
              Completa el volumen, los minutos y el costo por hora para ver cuánto tiempo podrías
              recuperar.
            </p>
          )}
        </div>

        <p className="mt-5 flex items-start gap-2.5 text-[0.8rem] leading-relaxed text-white/60">
          <Info size={15} aria-hidden="true" className="mt-0.5 shrink-0" />
          Estimación preliminar. El ahorro real depende del proceso, sus excepciones, la implementación y
          el mantenimiento.
        </p>

        <div className="mt-auto pt-6">
          <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/15 bg-white/[0.04] p-4 text-[0.85rem] leading-relaxed text-white/80 transition-colors hover:border-white/30">
            <input
              type="checkbox"
              checked={shareData}
              onChange={(event) => setShareData(event.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 accent-[#246BCE]"
            />
            <span>Incluir este resumen en el correo. Si no la marcas, el mensaje se abre vacío.</span>
          </label>

          {shareData && (
            <div className="accordion-panel mt-3 rounded-xl border border-white/15 bg-ink-700 p-4">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-white/60">
                Esto es exactamente lo que se compartirá
              </p>
              <pre className="mt-2.5 overflow-x-auto whitespace-pre-wrap break-words font-mono text-[0.76rem] leading-relaxed text-white/85">
                {summary}
              </pre>
            </div>
          )}

          <a
            href={ctaHref}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-[0.95rem] font-semibold text-ink transition-colors hover:bg-ivory"
          >
            Evaluar este proceso con BalsaLabs
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <p className="mt-3 text-center text-[0.78rem] text-white/55">
            Se abre tu correo con destino {EMAIL}.
          </p>
        </div>
      </div>
    </div>
  );
}

function ResultTile({
  label,
  value,
  unit,
  highlight = false,
}: {
  label: string;
  value: string;
  unit: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        highlight ? "border-blue/50 bg-blue/15" : "border-white/12 bg-white/[0.04]"
      }`}
    >
      <p className="text-[0.72rem] font-semibold uppercase leading-tight tracking-[0.1em] text-white/60">
        {label}
      </p>
      <p className="mt-2 font-display text-[1.5rem] font-extrabold leading-none tabular-nums text-white">
        {value}
        <span className="ml-1 text-[0.85rem] font-bold text-white/60">{unit}</span>
      </p>
    </div>
  );
}
