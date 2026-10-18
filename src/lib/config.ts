export const FACEBOOK_URL =
  "https://www.facebook.com/share/196A7LuKUe/?mibextid=wwXIfr";

/** Prefill al pedir por WhatsApp de sucursal. */
export const BRANCH_ORDER_PREFILL =
  "Hola, quiero pedir en El Asador de Odin.";

export type Branch = {
  id: string;
  name: string;
  area: string;
  whatsapp: string;
  whatsappDisplay: string;
  mapsUrl: string;
  /** Lat,lng for Google Maps embed */
  coords: { lat: number; lng: number };
};

/**
 * Sucursales del negocio (WhatsApp y Maps por ubicación).
 * NO confundir con WEB_CREDIT_WHATSAPP (personal de ArathGGM).
 */
export const BRANCHES: Branch[] = [
  {
    id: "jardines",
    name: "Jardines de Chalco",
    area: "Chalco, Estado de México",
    whatsapp: "525657815353",
    whatsappDisplay: "+52 56 5781 5353",
    mapsUrl: "https://maps.app.goo.gl/c6GkMdtcj3Agv5Uw6?g_st=ic",
    coords: { lat: 19.2638955, lng: -98.9109981 },
  },
  {
    id: "culturas",
    name: "Culturas de México",
    area: "Chalco, Estado de México",
    whatsapp: "527531206984",
    whatsappDisplay: "+52 753 120 6984",
    mapsUrl: "https://maps.app.goo.gl/FFAyYV7NDnnzUwFRA?g_st=ic",
    coords: { lat: 19.2652312, lng: -98.9028921 },
  },
];

export function branchWhatsappHref(
  branch: Branch,
  message = BRANCH_ORDER_PREFILL,
) {
  return `https://wa.me/${branch.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function branchMapEmbed(branch: Branch) {
  const { lat, lng } = branch.coords;
  return `https://maps.google.com/maps?q=${lat},${lng}&z=16&output=embed`;
}

/** @deprecated Prefer BRANCHES + modal. Kept as fallback to Jardines. */
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? BRANCHES[0].whatsapp;

export const WHATSAPP_PREFILL = BRANCH_ORDER_PREFILL;

export function whatsappHref(message = WHATSAPP_PREFILL) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Crédito web del autor (NO es el WhatsApp de la taquería). */
export const WEB_CREDIT_NAME = "ArathGGM";
export const WEB_CREDIT_WHATSAPP = "525567667540";
export const WEB_CREDIT_PREFILL = "Hola, quiero cotizar una página web";
/**
 * Estilo del crédito en el footer:
 * - 'discreet' → “Sitio por ArathGGM”
 * - 'soft'     → “¿Quieres una página así? Cotiza con ArathGGM”
 */
export const WEB_CREDIT_STYLE: "soft" | "discreet" = "soft";

export function webCreditHref() {
  return `https://wa.me/${WEB_CREDIT_WHATSAPP}?text=${encodeURIComponent(WEB_CREDIT_PREFILL)}`;
}

export const SITE = {
  name: "El Asador de Odin",
  tagline: "Hornería artesanal",
  subtitle: "Tacos y Costillas",
  heroLine: "Carne, fuego y tradición en Chalco.",
} as const;

/**
 * Variante visual del hero.
 * Confirmado por Arath: 'cortes' (cortes asándose).
 */
export type HeroVariant =
  | "atmosphere"
  | "cortes"
  | "comida"
  | "velas"
  | "gradient";

export const HERO_VARIANT: HeroVariant = "cortes";
