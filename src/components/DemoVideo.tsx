"use client";

import { useEffect, useRef } from "react";

/**
 * Reproductor del ejemplo de automatización.
 *
 * El vídeo no tiene audio, así que se reproduce solo en silencio y en bucle.
 * El arranque queda en manos del atributo `autoplay` del navegador: es lo único
 * que garantiza la reproducción aunque falle cualquier JavaScript posterior.
 * Los controles quedan visibles porque dura 41 s y conviene poder pausarlo.
 */
export default function DemoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // `prefers-reduced-motion`: se detiene antes de que llegue a pintar fotogramas.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    video.autoplay = false;
    video.pause();
    video.currentTime = 0;
  }, []);

  // Mejora opcional: no gastar batería reproduciendo fuera de pantalla.
  // Si el navegador no entrega el callback, el vídeo simplemente sigue en bucle.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let pausedByScroll = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!pausedByScroll) return;
          pausedByScroll = false;
          // Safari rechaza la promesa en algunos casos; no hay nada que hacer.
          video.play().catch(() => {});
        } else if (!video.paused) {
          pausedByScroll = true;
          video.pause();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/15 bg-ink-700 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.65)]">
      <video
        ref={videoRef}
        src="/balsalabs-automation-demo.mp4"
        poster="/balsalabs-automation-demo-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        controls
        preload="metadata"
        aria-label="Ejemplo de un asistente de atención al cliente que responde consultas, cotiza y agenda una cita."
        className="block aspect-video w-full bg-ink-700 object-cover"
      />
    </div>
  );
}
