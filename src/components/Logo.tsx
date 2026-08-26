import Image from "next/image";
import logoMark from "../../public/logo-mark.png";

type LogoProps = {
  /** Alto de la marca en píxeles. El ancho se deriva de su proporción. */
  size?: number;
  className?: string;
  /**
   * El logotipo de marca incluye la palabra en dos líneas, ilegible a este tamaño:
   * en el sitio se acompaña con el nombre compuesto tipográficamente.
   */
  textClassName?: string;
  priority?: boolean;
};

const RATIO = logoMark.width / logoMark.height;

export default function Logo({
  size = 26,
  className = "",
  textClassName = "text-[1.05rem]",
  priority = false,
}: LogoProps) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src={logoMark}
        alt=""
        aria-hidden="true"
        height={size}
        width={Math.round(size * RATIO)}
        priority={priority}
        className="shrink-0"
      />
      <span className={`font-display font-extrabold tracking-tight text-ink ${textClassName}`}>
        BalsaLabs
      </span>
    </span>
  );
}
