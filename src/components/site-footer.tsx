import {
  FACEBOOK_URL,
  SITE,
  WEB_CREDIT_NAME,
  WEB_CREDIT_STYLE,
  webCreditHref,
} from "@/lib/config";
import { OrderWhatsAppButton } from "@/components/order-branch-modal";

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/15 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-end md:justify-between md:px-6">
        <div>
          <p className="font-display text-lg font-bold text-cream">{SITE.name}</p>
          <p className="mt-1 text-sm uppercase tracking-[0.2em] text-gold">
            {SITE.tagline}
          </p>
          <p className="mt-3 max-w-md text-sm text-ash">
            Sabor que honra nuestras raíces · Carne, fuego y tradición
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <OrderWhatsAppButton className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-gold transition-colors hover:text-cream">
              WhatsApp
            </OrderWhatsAppButton>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.16em] text-gold transition-colors hover:text-cream"
            >
              <FacebookIcon />
              Facebook
            </a>
          </div>
        </div>
        <div className="max-w-[min(100%,20rem)] space-y-1.5 pr-16 text-xs text-ash/70 md:max-w-none md:pr-20 md:text-right">
          <p>© 2026 {SITE.name}. Chalco, Edomex.</p>
          <WebCredit />
        </div>
      </div>
    </footer>
  );
}

function WebCredit() {
  const href = webCreditHref();
  const linkClass =
    "text-gold/80 underline decoration-gold/30 underline-offset-2 transition-colors hover:text-gold-soft";

  if (WEB_CREDIT_STYLE === "discreet") {
    return (
      <p>
        Sitio por{" "}
        <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {WEB_CREDIT_NAME}
        </a>
      </p>
    );
  }

  // soft — versión B (venta suave)
  return (
    <p>
      <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
        ¿Quieres una página así? Cotiza con {WEB_CREDIT_NAME}
      </a>
    </p>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-3.5"
      fill="currentColor"
      aria-hidden
    >
      <path d="M13.5 22v-8h2.7l.4-3.1H13.5V8.9c0-.9.3-1.5 1.6-1.5H16.8V4.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.5V14h2.6v8h3.4Z" />
    </svg>
  );
}
