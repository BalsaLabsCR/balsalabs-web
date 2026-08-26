import { PILOT_DURATION, PILOT_PRICE } from "./site";

export const FAQS = [
  {
    question: "¿Todo proceso necesita inteligencia artificial?",
    answer:
      "No. Las tareas completamente predecibles suelen resolverse mejor con automatización tradicional. Utilizamos IA cuando es necesario interpretar mensajes, documentos, lenguaje o situaciones variables.",
  },
  {
    question: "¿Un agente de IA reemplaza a una persona?",
    answer:
      "No necesariamente. Diseñamos los sistemas para ejecutar tareas repetitivas y transferir excepciones. Las personas conservan el control sobre decisiones delicadas y situaciones que requieren criterio.",
  },
  {
    question: "¿Pueden conectarse con las herramientas que ya utilizamos?",
    answer:
      "En muchos casos sí. Evaluamos las APIs, permisos y posibilidades de integración de cada herramienta antes de recomendar una implementación.",
  },
  {
    question: "¿También trabajan con WhatsApp?",
    answer:
      "Sí. Podemos diseñar flujos de atención, calificación, seguimiento y registro conectados con el conocimiento y los sistemas del negocio.",
  },
  {
    question: "¿Es necesario automatizar toda la empresa?",
    answer:
      "No. Recomendamos empezar con un proceso pequeño, frecuente y medible. Después de comprobar su valor, se decide si conviene expandirlo.",
  },
  {
    question: "¿Cómo se determina el costo?",
    answer:
      "Depende del proceso, volumen, integraciones, riesgos y nivel de soporte. El primer paso es realizar un diagnóstico y delimitar un experimento.",
  },
  {
    question: "¿La primera conversación tiene algún costo?",
    answer:
      "No. La asesoría inicial es una llamada de 30 minutos sin costo ni compromiso: revisamos tus procesos, te decimos qué se puede automatizar hoy y qué todavía no conviene. Se agenda directamente desde el sitio.",
  },
  {
    question: `¿Qué incluye el piloto de ${PILOT_PRICE}?`,
    answer:
      `Implementamos un agente sobre un proceso real de tu negocio, conectado a tus herramientas, y medimos su desempeño frente a la situación actual: tiempo por caso, volumen atendido, errores y costo. Recibes el agente funcionando, un informe con los resultados y el costo estimado de llevarlo a producción. Toma ${PILOT_DURATION} y es un pago único.`,
  },
  {
    question: "¿Qué pasa si el piloto no funciona?",
    answer:
      "Te lo decimos con los datos en la mano. El propósito del piloto es justamente evitar una inversión grande basada en suposiciones: si los números no justifican continuar, no hay nada que renovar ni cancelar.",
  },
] as const;
