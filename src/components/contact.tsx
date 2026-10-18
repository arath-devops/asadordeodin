import { FACEBOOK_URL, BRANCHES } from "@/lib/config";
import { OrderWhatsAppButton } from "@/components/order-branch-modal";

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
              Elige tu sucursal más cercana y escríbenos para pedir o preguntar
              por el sabor del día.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <OrderWhatsAppButton className="btn-ember animate-ember-pulse">
                Abrir WhatsApp
              </OrderWhatsAppButton>
            </div>
            <ul className="mt-6 space-y-1 text-sm text-ash">
              {BRANCHES.map((b) => (
                <li key={b.id}>
                  <span className="text-gold-soft">{b.name}:</span>{" "}
                  {b.whatsappDisplay}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ash">
              También en{" "}
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gold-soft underline decoration-gold/40 underline-offset-4 transition-colors hover:text-cream"
              >
                Facebook
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
