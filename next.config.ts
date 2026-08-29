import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /**
     * Las fotografías se sirven en AVIF o WebP según lo que acepte el navegador.
     * El JPEG original queda en `public/` como respaldo para el resto.
     */
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
