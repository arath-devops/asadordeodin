import { LOCATIONS } from "@/lib/menu-data";

export function Locations() {
  return (
    <section id="sucursales" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            En Chalco
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-cream md:text-5xl">
            Sucursales
          </h2>
          <p className="mt-4 text-lg text-ash">
            Visítanos en Jardines de Chalco. Culturas de México abre pronto.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {LOCATIONS.map((location) => {
            const isOpen = location.status === "open";
            return (
              <article
                key={location.id}
                className="overflow-hidden rounded-sm border border-gold/20 bg-char-elevated/80"
              >
                <div className="border-b border-gold/15 px-5 py-5">
                  <h3 className="font-display text-xl font-bold text-gold-soft md:text-2xl">
                    {location.name}
                  </h3>
                  <p className="mt-1 text-ash">{location.area}</p>
                  {isOpen ? null : (
                    <p className="mt-3 inline-flex rounded-sm border border-ember/30 bg-ember/10 px-2.5 py-1 text-xs font-medium text-ember-bright">
                      Próximamente · {location.note}
                    </p>
                  )}
                </div>

                {isOpen && location.mapEmbed ? (
                  <div className="relative aspect-[16/11] bg-smoke">
                    <iframe
                      title={`Mapa — ${location.name}`}
                      src={location.mapEmbed}
                      className="absolute inset-0 h-full w-full border-0 grayscale-[20%] contrast-110"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="relative flex aspect-[16/11] items-center justify-center bg-smoke/80 px-6 text-center">
                    <div>
                      <p className="font-display text-lg font-semibold uppercase tracking-[0.2em] text-gold">
                        Próximamente
                      </p>
                      <p className="mt-3 max-w-xs text-sm text-ash">
                        {location.note ??
                          "Ubicación en preparación. Sin dirección publicada aún."}
                      </p>
                    </div>
                  </div>
                )}

                <div className="px-5 py-4">
                  {isOpen && location.mapsUrl ? (
                    <a
                      href={location.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-gold transition-colors hover:text-cream"
                    >
                      Cómo llegar →
                    </a>
                  ) : (
                    <span className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-ash/60">
                      Mapa disponible pronto
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
