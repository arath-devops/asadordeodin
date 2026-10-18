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

## WhatsApp (por sucursal)

Los botones **Pedir** / **WhatsApp** del negocio abren un modal para elegir sucursal y luego `wa.me/<número>`:

| Sucursal | WhatsApp | Maps |
| --- | --- | --- |
| Jardines de Chalco | +52 56 5781 5353 → `525657815353` | [Maps](https://maps.app.goo.gl/c6GkMdtcj3Agv5Uw6?g_st=ic) |
| Culturas de México | +52 753 120 6984 → `527531206984` | [Maps](https://maps.app.goo.gl/FFAyYV7NDnnzUwFRA?g_st=ic) |

Config centralizada en `src/lib/config.ts` (`BRANCHES`). El crédito del footer (ArathGGM) usa otro número y **no** pasa por el modal.

## Publicar en Vercel (Hobby gratis)

1. Crear cuenta en [vercel.com](https://vercel.com) (login con GitHub).
2. **Add New Project** → importar [arath-devops/asadordeodin](https://github.com/arath-devops/asadordeodin) → Framework: Next.js (auto).
3. Deploy → URL pública `*.vercel.app`.

Verificación local de producción:

```bash
npm run build
npm run start -- --hostname 0.0.0.0 --port 4317
```

## Sucursales

Ambas activas con mapa embebido + “Cómo llegar” al short link de Google Maps (datos en `BRANCHES`).

## Facebook

https://www.facebook.com/share/196A7LuKUe/?mibextid=wwXIfr

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Servir build |
| `npm run lint` | ESLint |
