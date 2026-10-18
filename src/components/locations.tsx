import { BRANCHES, branchMapEmbed, branchWhatsappHref } from "@/lib/config";
import { OrderWhatsAppButton } from "@/components/order-branch-modal";

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
            Dos puntos para encontrar el fuego: Jardines de Chalco y Culturas de
            México.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {BRANCHES.map((branch) => (
            <article
              key={branch.id}
              className="overflow-hidden rounded-sm border border-gold/20 bg-char-elevated/80"
            >
              <div className="border-b border-gold/15 px-5 py-5">
                <h3 className="font-display text-xl font-bold text-gold-soft md:text-2xl">
                  {branch.name}
                </h3>
                <p className="mt-1 text-ash">{branch.area}</p>
                <p className="mt-2 text-sm text-gold/90">
                  WhatsApp {branch.whatsappDisplay}
                </p>
              </div>

              <div className="relative aspect-[16/11] bg-smoke">
                <iframe
                  title={`Mapa — ${branch.name}`}
                  src={branchMapEmbed(branch)}
                  className="absolute inset-0 h-full w-full border-0 grayscale-[20%] contrast-110"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="flex flex-wrap items-center gap-4 px-5 py-4">
                <a
                  href={branch.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-gold transition-colors hover:text-cream"
                >
                  Cómo llegar →
                </a>
                <a
                  href={branchWhatsappHref(branch)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-ember-bright transition-colors hover:text-cream"
                >
                  Pedir en esta sucursal →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <OrderWhatsAppButton className="btn-ember">
            Pedir por WhatsApp
          </OrderWhatsAppButton>
        </div>
      </div>
    </section>
  );
}
