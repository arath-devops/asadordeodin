/** WhatsApp real (Arath): +52 56 5781 5353 */
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "525657815353";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const WHATSAPP_DISPLAY = "+52 56 5781 5353";

export const WHATSAPP_PREFILL =
  "Hola, quiero ordenar en El Asador de Odin.";

export function whatsappHref(message = WHATSAPP_PREFILL) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

export const FACEBOOK_URL =
  "https://www.facebook.com/share/196A7LuKUe/?mibextid=wwXIfr";

/** Crédito web del autor (NO es el WhatsApp de la taquería). */
export const WEB_CREDIT_NAME = "ArathGGM";
export const WEB_CREDIT_WHATSAPP = "525567667540";
export const WEB_CREDIT_PREFILL = "Hola, quiero cotizar una página web";
/**
 * Estilo del crédito en el footer:
 * - 'discreet' → “Sitio por ArathGGM” (solo el nombre es link)
 * - 'soft'     → “¿Quieres una página así? Cotiza con ArathGGM”
 * Confirmado por Arath: venta suave ('soft').
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
 * Variante visual del hero (para comparar capturas).
 * - 'atmosphere' → velas actuales (default / en producción por ahora)
 * - 'cortes'     → cortes asándose
 * - 'comida'     → close-up short rib
 * - 'velas'      → atmosphere más clara + glow
 * - 'gradient'   → solo gradiente carbón→fuego
 */
export type HeroVariant =
  | "atmosphere"
  | "cortes"
  | "comida"
  | "velas"
  | "gradient";

export const HERO_VARIANT: HeroVariant = "atmosphere";
