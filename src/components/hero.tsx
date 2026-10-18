import Image from "next/image";
import type { ReactNode } from "react";
import { HERO_VARIANT, SITE, whatsappHref, type HeroVariant } from "@/lib/config";

const PHOTO_VARIANTS: Record<
  Exclude<HeroVariant, "gradient">,
  { src: string; imageClass: string; overlays: ReactNode }
> = {
  atmosphere: {
    src: "/hero-atmosphere.jpg",
    imageClass: "object-cover object-center opacity-55 animate-flame",
    overlays: (
      <>
        <div className="absolute inset-0 bg-gradient-to-t from-char via-char/80 to-char/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-char via-char/70 to-transparent" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, rgba(232,93,4,0.35), transparent 35%), radial-gradient(circle at 70% 30%, rgba(212,168,75,0.18), transparent 30%)",
          }}
        />
      </>
    ),
  },
  cortes: {
    src: "/cortes-asandose.jpg",
    imageClass: "object-cover object-[center_35%] opacity-70",
    overlays: (
      <>
        <div className="absolute inset-0 bg-char/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-char via-char/50 to-char/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-char/60 via-transparent to-char/30" />
      </>
    ),
  },
  comida: {
    src: "/taco-short-rib.jpg",
    imageClass: "object-cover object-center opacity-75",
    overlays: (
      <>
        <div className="absolute inset-0 bg-char/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-char via-char/55 to-char/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-char/65 via-transparent to-char/35" />
      </>
    ),
  },
  velas: {
    src: "/hero-atmosphere.jpg",
    imageClass:
      "object-cover object-center opacity-80 brightness-125 contrast-110 saturate-125 animate-flame",
    overlays: (
      <>
        <div className="absolute inset-0 bg-gradient-to-t from-char via-char/55 to-char/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-char/55 via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 55%, rgba(255,122,26,0.45), transparent 32%), radial-gradient(circle at 55% 25%, rgba(232,93,4,0.28), transparent 40%), radial-gradient(circle at 70% 40%, rgba(212,168,75,0.22), transparent 35%)",
          }}
        />
      </>
    ),
  },
};

function HeroBackdrop({ variant }: { variant: HeroVariant }) {
  if (variant === "gradient") {
    return (
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, #0c0a09 0%, #1a100c 35%, #3b1608 62%, #e85d04 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-50 animate-flame"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 50% at 20% 80%, rgba(255,122,26,0.4), transparent 55%), radial-gradient(ellipse 50% 40% at 85% 20%, rgba(212,168,75,0.2), transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-char via-transparent to-char/30" />
      </div>
    );
  }

  const photo = PHOTO_VARIANTS[variant];
  return (
    <div className="absolute inset-0">
      <Image
        src={photo.src}
        alt=""
        fill
        priority
        className={photo.imageClass}
        sizes="100vw"
      />
      {photo.overlays}
    </div>
  );
}

export function Hero() {
  const variant = HERO_VARIANT;
  const logoGlow =
    variant === "velas" || variant === "gradient"
      ? "animate-rise animate-logo-glow size-28 rounded-full object-cover ring-2 ring-ember/60 shadow-[0_0_40px_rgba(232,93,4,0.55)] md:size-40"
      : "animate-rise animate-logo-glow size-28 rounded-full object-cover ring-2 ring-gold/50 md:size-40";

  return (
    <section
      id="inicio"
      data-hero-variant={variant}
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 md:items-center md:pb-24 md:pt-24"
    >
      <HeroBackdrop variant={variant} />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start gap-8 px-4 md:px-6">
        <div className="flex flex-col items-start gap-5">
          <Image
            src="/logo-asador-odin.jpg"
            alt={`Logo de ${SITE.name}`}
            width={180}
            height={180}
            priority
            className={logoGlow}
          />
          <div className="animate-rise-delay-1">
            <p className="mb-2 font-display text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-gold">
              {SITE.subtitle} · {SITE.tagline}
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-cream sm:text-5xl md:text-7xl">
              {SITE.name}
            </h1>
          </div>
          <p className="animate-rise-delay-2 max-w-xl text-lg text-ash md:text-xl">
            {SITE.heroLine}
          </p>
          <div className="animate-rise-delay-3 flex flex-wrap gap-3">
            <a href={whatsappHref()} className="btn-ember">
              Pedir por WhatsApp
            </a>
            <a href="#menu" className="btn-ghost">
              Ver menú
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
