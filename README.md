# BalsaLabs

Landing page de BalsaLabs: automatizaciones con IA para negocios.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS v4 (tokens de color y tipografía en `src/app/globals.css`)
- Lucide Icons
- Animaciones en CSS + IntersectionObserver (sin dependencias de animación)

Sin backend: todo el sitio se prerenderiza como contenido estático y los CTA abren
`mailto:info@balsalabs.com`.

## Comandos

```bash
npm run dev
```

```bash
npm run build
```

```bash
npm run lint
```

Comprobación de tipos:

```bash
npx tsc --noEmit
```

## Estructura

```
src/
├── app/
│   ├── layout.tsx                  metadata, fuentes, JSON-LD (ProfessionalService)
│   ├── page.tsx                    portada + JSON-LD de FAQPage
│   ├── globals.css                 paleta, tipografía, utilidades y animaciones
│   ├── opengraph-image.tsx         imagen social generada por código
│   ├── robots.ts / sitemap.ts
│   └── (legal)/                    política de privacidad y términos (en preparación)
├── components/                     nueve secciones de la portada y UI compartida
└── lib/
    ├── site.ts                     correo, URL, navegación y constructor de mailto
    └── faqs.ts                     preguntas frecuentes (UI + JSON-LD)
```

## Criterio editorial

La página está pensada para recorrerse en pocos minutos: una idea por sección, frases
cortas y listas de cuatro puntos como máximo. Antes de agregar texto, conviene preguntarse
qué se puede quitar a cambio.

## Notas de mantenimiento

- **Correo único:** `src/lib/site.ts` concentra `info@balsalabs.com` y los asuntos
  predefinidos. Cambiarlo ahí actualiza todos los CTA del sitio.
- **Calculadora:** `src/components/Calculator.tsx` calcula en el navegador. No envía ni
  almacena datos. El resumen solo se adjunta al correo si la persona marca la casilla, y
  el texto exacto se muestra antes.
- **Cifras de mercado:** cada dato de `WhyNowSection.tsx` mantiene fuente visible,
  enlace externo y su aclaración. No convertirlas en promesas de resultados.
- **Movimiento:** las animaciones respetan `prefers-reduced-motion` desde CSS y el
  contenido con animación de entrada se muestra igual sin JavaScript (`<noscript>` en
  `layout.tsx`).
- **Dominio:** `SITE_URL` en `src/lib/site.ts` alimenta canonical, Open Graph y sitemap.
