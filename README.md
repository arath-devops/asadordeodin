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

Número real: **+52 56 5781 5353** → `wa.me/525657815353`

Variable de entorno (local y Vercel):

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=525657815353
```

También documentada en `.env.example`. Fallback en `src/lib/config.ts`.

## Publicar en Vercel (Hobby gratis)

1. Crear un **repo GitHub real** (este Project empezó como repo temporal).
2. Crear cuenta en [vercel.com](https://vercel.com) (login con GitHub).
3. **Add New Project** → importar el repo → Framework: Next.js (auto).
4. En **Environment Variables** añadir:
   - `NEXT_PUBLIC_WHATSAPP_NUMBER` = `525657815353`
5. Deploy → URL pública `*.vercel.app`.

Pasos detallados y blockers: ver contexto del Project en `docs/publicacion.md`.

Verificación local de producción:

```bash
npm run build
npm run start -- --port 4317
```

## Sucursales

- **Jardines de Chalco** — [Maps](https://maps.app.goo.gl/c6GkMdtcj3Agv5Uw6?g_st=ic) (embed con coords del short link)
- **Culturas de México** — próximamente (dirección pendiente)

## Facebook

https://www.facebook.com/share/196A7LuKUe/?mibextid=wwXIfr

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Servir build |
| `npm run lint` | ESLint |
