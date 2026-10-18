/** Número de WhatsApp — reemplazar XXXXXXXXXX por el número real (10 dígitos MX). */
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "52XXXXXXXXXX";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const WHATSAPP_PREFILL =
  "Hola, quiero ordenar en El Asador de Odin.";

export function whatsappHref(message = WHATSAPP_PREFILL) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

export const SITE = {
  name: "El Asador de Odin",
  tagline: "Hornería artesanal",
  subtitle: "Tacos y Costillas",
  heroLine: "Carne, fuego y tradición en Chalco.",
} as const;
