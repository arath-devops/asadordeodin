import { SITE } from "@/lib/config";

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/15 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 md:flex-row md:items-end md:justify-between md:px-6">
        <div>
          <p className="font-display text-lg font-bold text-cream">{SITE.name}</p>
          <p className="mt-1 text-sm uppercase tracking-[0.2em] text-gold">
            {SITE.tagline}
          </p>
          <p className="mt-3 max-w-md text-sm text-ash">
            Sabor que honra nuestras raíces · Carne, fuego y tradición
          </p>
        </div>
        <p className="text-xs text-ash/70">
          © {new Date().getFullYear()} {SITE.name}. Chalco, Edomex.
        </p>
      </div>
    </footer>
  );
}
