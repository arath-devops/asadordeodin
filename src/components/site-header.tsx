import Image from "next/image";
import { SITE, whatsappHref } from "@/lib/config";

const links = [
  { href: "#menu", label: "Menú" },
  { href: "#sucursales", label: "Sucursales" },
  { href: "#contacto", label: "Contacto" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-gold/15 bg-char/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#inicio" className="flex items-center gap-3">
          <Image
            src="/logo-asador-odin.jpg"
            alt=""
            width={44}
            height={44}
            className="size-10 rounded-full object-cover ring-1 ring-gold/40 md:size-11"
            priority
          />
          <span className="font-display text-sm font-semibold tracking-wide text-cream md:text-base">
            {SITE.name}
          </span>
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-ash transition-colors hover:text-gold-soft"
            >
              {link.label}
            </a>
          ))}
          <a href={whatsappHref()} className="btn-ember !px-3 !py-2 !text-[0.7rem]">
            WhatsApp
          </a>
        </nav>
        <a
          href={whatsappHref()}
          className="btn-ember !px-3 !py-2 !text-[0.7rem] md:hidden"
        >
          Pedir
        </a>
      </div>
    </header>
  );
}
