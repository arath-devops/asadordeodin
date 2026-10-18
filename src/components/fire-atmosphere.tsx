import Image from "next/image";

export function FireAtmosphere() {
  return (
    <section
      id="del-fuego"
      aria-label="Del fuego"
      className="relative isolate min-h-[55vh] overflow-hidden md:min-h-[70vh]"
    >
      <Image
        src="/cortes-asandose.jpg"
        alt="Cortes asándose en el horno artesanal"
        fill
        className="pointer-events-none object-cover object-center animate-flame"
        sizes="100vw"
        priority={false}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-char via-char/55 to-char/25" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-char/70 via-transparent to-char/40" />

      <div className="relative z-10 mx-auto flex min-h-[55vh] max-w-6xl flex-col items-start justify-end px-4 py-16 md:min-h-[70vh] md:px-6 md:py-24">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-gold">
          Del fuego
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight text-cream md:text-5xl">
          Carne, fuego y tradición
        </h2>
        <p className="mt-4 max-w-md text-base text-ash md:text-lg">
          Cortes que maduran en nuestra hornería artesanal — humo, tiempo y
          mano.
        </p>
        <div className="gold-rule mt-8 max-w-xs" />
      </div>
    </section>
  );
}
