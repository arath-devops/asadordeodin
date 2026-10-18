import { WHATSAPP_NUMBER, whatsappHref } from "@/lib/config";

export function Contact() {
  return (
    <section id="contacto" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember/40 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-sm border border-gold/25 bg-gradient-to-br from-smoke/80 via-char-elevated to-char px-6 py-12 md:px-12 md:py-16">
          <div
            className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-ember/20 blur-3xl animate-flame"
            aria-hidden
          />
          <div className="relative max-w-2xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Contacto
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-cream md:text-5xl">
              Ordena por WhatsApp
            </h2>
            <p className="mt-4 text-lg text-ash">
              Escríbenos para pedir, preguntar por el sabor del día o confirmar
              tu sucursal más cercana. Respuesta directa del asador.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={whatsappHref()} className="btn-ember animate-ember-pulse">
                Abrir WhatsApp
              </a>
              <p className="text-sm text-ash">
                Número placeholder:{" "}
                <code className="rounded-sm bg-char px-1.5 py-0.5 text-gold-soft">
                  {WHATSAPP_NUMBER}
                </code>
              </p>
            </div>
            <p className="mt-6 text-sm text-ash/80">
              Configura{" "}
              <code className="text-gold-soft">NEXT_PUBLIC_WHATSAPP_NUMBER</code>{" "}
              o edita{" "}
              <code className="text-gold-soft">src/lib/config.ts</code> cuando
              tengas el número real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
