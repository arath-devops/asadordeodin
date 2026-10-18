import { FACEBOOK_URL, SITE, whatsappHref } from "@/lib/config";

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
            <a
              href={whatsappHref()}
              className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-gold transition-colors hover:text-cream"
            >
              WhatsApp
            </a>
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
        <p className="text-xs text-ash/70">
          © 2026 {SITE.name}. Chalco, Edomex.
        </p>
      </div>
    </footer>
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
