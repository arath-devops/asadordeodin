import Image from "next/image";
import { SITE, whatsappHref } from "@/lib/config";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 md:items-center md:pb-24 md:pt-24"
    >
      <div className="absolute inset-0">
        <Image
          src="/hero-atmosphere.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-55 animate-flame"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-char via-char/80 to-char/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-char via-char/70 to-transparent" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, rgba(232,93,4,0.35), transparent 35%), radial-gradient(circle at 70% 30%, rgba(212,168,75,0.18), transparent 30%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start gap-8 px-4 md:px-6">
        <div className="flex flex-col items-start gap-5">
          <Image
            src="/logo-asador-odin.jpg"
            alt={`Logo de ${SITE.name}`}
            width={180}
            height={180}
            priority
            className="animate-rise animate-logo-glow size-28 rounded-full object-cover ring-2 ring-gold/50 md:size-40"
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
