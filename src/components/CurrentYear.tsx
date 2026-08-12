"use client";

import { useSyncExternalStore } from "react";

/** Año de compilación: se usa como valor del render en servidor. */
const BUILD_YEAR = new Date().getFullYear();

const subscribe = () => () => {};

/**
 * Año actual. Se lee del reloj del navegador para no quedar congelado en la
 * fecha de compilación de la página estática.
 */
export default function CurrentYear() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => BUILD_YEAR,
  );

  return <span suppressHydrationWarning>{year}</span>;
}
