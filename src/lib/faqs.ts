import { PILOT_DURATION, PILOT_PRICE } from "./site";

export const FAQS = [
  {
    question: "¿Con qué herramientas pueden conectarse?",
    answer:
      "Con las que ya usa tu negocio: CRM, hojas de cálculo, correo, calendarios y sistemas internos. Antes de recomendar una implementación evaluamos las APIs y los permisos de cada herramienta.",
  },
  {
    question: "¿También pueden trabajar con WhatsApp?",
    answer:
      "Sí. Diseñamos flujos de atención, calificación, seguimiento y registro conectados con el conocimiento y los sistemas del negocio.",
  },
  {
    question: `¿Qué incluye el piloto de ${PILOT_PRICE}?`,
    answer:
      `Una automatización funcionando sobre un proceso real, conectada a tus herramientas, y su medición frente a la situación actual. Recibes además el costo estimado de llevarlo a producción. Toma ${PILOT_DURATION} y es un pago único.`,
  },
  {
    question: "¿Qué pasa si el piloto no produce resultados?",
    answer:
      "Te lo decimos con los datos en la mano. El piloto existe justamente para evitar una inversión grande basada en suposiciones: si los números no justifican continuar, no hay nada que renovar ni cancelar.",
  },
] as const;
