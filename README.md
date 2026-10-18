# El Asador de Odin

Landing promocional one-page para la taquería **El Asador de Odin** (Tacos y Costillas / Hornería artesanal) en Chalco, Estado de México.

Secciones: hero de marca, menú, sucursales con Google Maps y contacto por WhatsApp.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Tipografía: Cinzel + Source Sans 3

## Cómo correr

```bash
npm install
npm run dev -- --port 4317
```

Abre [http://127.0.0.1:4317](http://127.0.0.1:4317).

## WhatsApp

El número es configurable:

1. Variable de entorno `NEXT_PUBLIC_WHATSAPP_NUMBER` (recomendado), o
2. Constante en `src/lib/config.ts`

Formato: `52` + 10 dígitos (sin espacios). Placeholder actual: `52XXXXXXXXXX`.

Ejemplo:

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=5215512345678 npm run dev -- --port 4317
```

## Sucursales

Los embeds de Maps usan búsquedas públicas aproximadas:

- Jardines de Chalco, Chalco, Edomex
- Culturas de México, Chalco, Edomex

Sustituir por direcciones exactas cuando estén disponibles (`src/lib/menu-data.ts`).

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Servir build |
| `npm run lint` | ESLint |
