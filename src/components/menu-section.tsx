import Image from "next/image";
import { MENU_SECTIONS } from "@/lib/menu-data";

export function MenuSection() {
  return (
    <section id="menu" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            La ofrenda
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-cream md:text-5xl">
            Menú
          </h2>
          <p className="mt-4 text-lg text-ash">
            Del carbón a la mesa: tacos, campechanas y costillas de jabalí con el
            sello de nuestra hornería artesanal.
          </p>
          <div className="gold-rule mt-8 max-w-xs" />
        </div>

        <div className="space-y-16 md:space-y-24">
          {MENU_SECTIONS.map((section, index) => {
            const reverse = index % 2 === 1;
            return (
              <article
                key={section.id}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
              >
                <div className={reverse ? "md:order-2" : undefined}>
                  {section.image ? (
                    <div className="relative aspect-[4/3] overflow-hidden rounded-sm ring-1 ring-gold/25">
                      <Image
                        src={section.image.src}
                        alt={section.image.alt}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-char/50 to-transparent" />
                    </div>
                  ) : null}
                </div>

                <div className={reverse ? "md:order-1" : undefined}>
                  <div className="flex flex-wrap items-end gap-3">
                    <h3 className="font-display text-2xl font-bold text-gold-soft md:text-3xl">
                      {section.title}
                    </h3>
                    {section.priceBadge ? (
                      <span className="mb-1 rounded-sm border border-gold/40 bg-smoke/60 px-2.5 py-1 font-display text-xs font-semibold uppercase tracking-wider text-gold">
                        {section.priceBadge}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-ash">{section.subtitle}</p>

                  <ul className="mt-6 space-y-3">
                    {section.items.map((item) => (
                      <li
                        key={`${section.id}-${item.name}`}
                        className="flex items-baseline justify-between gap-4 border-b border-gold/10 pb-3"
                      >
                        <div>
                          <p className="font-display text-sm font-semibold uppercase tracking-wide text-cream">
                            {item.name}
                          </p>
                          {item.detail ? (
                            <p className="mt-1 text-sm text-ash/90">{item.detail}</p>
                          ) : null}
                        </div>
                        {item.price ? (
                          <span className="shrink-0 font-display text-sm font-semibold text-gold">
                            {item.price}
                          </span>
                        ) : null}
                      </li>
                    ))}
                  </ul>

                  {section.notes?.length ? (
                    <ul className="mt-5 space-y-1 text-sm text-ember-bright">
                      {section.notes.map((note) => (
                        <li key={note}>+ {note}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-16 overflow-hidden rounded-sm ring-1 ring-gold/20">
          <Image
            src="/menu-asador-odin.jpg"
            alt="Menú impreso de El Asador de Odin"
            width={1023}
            height={1537}
            className="mx-auto max-h-[70vh] w-auto object-contain bg-char-elevated"
          />
          <p className="bg-char-elevated px-4 py-3 text-center text-sm text-ash">
            Menú impreso de referencia · precios sujetos a cambio
          </p>
        </div>
      </div>
    </section>
  );
}
