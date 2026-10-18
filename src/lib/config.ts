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

export const SITE = {
  name: "El Asador de Odin",
  tagline: "Hornería artesanal",
  subtitle: "Tacos y Costillas",
  heroLine: "Carne, fuego y tradición en Chalco.",
} as const;
