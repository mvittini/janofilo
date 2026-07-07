# Dr. Janofilo — Landing Page

Landing page moderna para **Dr. Janofilo** (Alejandro Frey), ingeniero en informática
especializado en **optimización, reparación y upgrade de computadores y notebooks**
a domicilio en Ñuñoa, Santiago de Chile.

El sitio está pensado para convertir visitas en contactos por WhatsApp: mensajes claros,
prueba social real (clientes y testimonios) y llamados a la acción en cada sección.

> Rediseño moderno inspirado en el sitio original [drjanofilo.cl](https://drjanofilo.cl/),
> reutilizando su logo, mascota, fotos reales y paleta de colores.

---

## Tabla de contenidos

- [Características](#características)
- [Stack tecnológico](#stack-tecnológico)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Requisitos previos](#requisitos-previos)
- [Instalación y uso](#instalación-y-uso)
- [Scripts disponibles](#scripts-disponibles)
- [Configuración](#configuración)
- [Exponer el sitio (ngrok / túneles)](#exponer-el-sitio-ngrok--túneles)
- [Despliegue en producción](#despliegue-en-producción)
- [Personalización](#personalización)
- [Créditos](#créditos)

---

## Características

- ⚡ **Rápida y ligera** — construida con Vite y React, sin dependencias pesadas.
- 🎨 **Diseño a medida** — tema claro y luminoso con la paleta real de la marca
  (verde, amarillo, coral, azul y azul‑marino) tomada del logo.
- 📱 **100% responsive** — optimizada para móvil, tablet y escritorio.
- 🟢 **Orientada a conversión** — CTAs a WhatsApp en todas las secciones, botón
  flotante y formulario de contacto que arma el mensaje automáticamente.
- 🖼️ **Contenido real** — logo, mascota, foto de Alejandro, logos de clientes
  (Masterpak, El Mundo del Vino, Crecelatam) y testimonios con fotos verificadas.
- 🗺️ **Mapa integrado** de la ubicación y datos de contacto reales.
- ✨ **Animaciones sutiles** — aparición al hacer scroll, respetando
  `prefers-reduced-motion`.
- 🔍 **SEO básico** — metadatos, Open Graph, favicon de marca y HTML semántico.

## Stack tecnológico

| Herramienta | Uso |
|---|---|
| [Vite](https://vite.dev/) | Bundler y servidor de desarrollo |
| [React 19](https://react.dev/) | Librería de UI |
| [Tailwind CSS v4](https://tailwindcss.com/) | Estilos utilitarios (vía `@tailwindcss/vite`) |
| [Oxlint](https://oxc.rs/) | Linter |
| Google Fonts | Tipografías `Sora` (títulos) e `Inter` (texto) |

## Estructura del proyecto

```
janofilo-landing/
├── public/
│   └── assets/              # Imágenes de la marca (logo, mascota, fotos, clientes)
├── src/
│   ├── components/          # Secciones y UI (Navbar, Hero, Services, etc.)
│   │   └── Icons.jsx        # Íconos SVG en línea (sin dependencias)
│   ├── hooks/
│   │   └── useReveal.js     # Animación de aparición al hacer scroll
│   ├── lib/
│   │   └── site.js          # Datos del negocio (teléfono, email, dirección…)
│   ├── App.jsx              # Composición de todas las secciones
│   ├── main.jsx             # Punto de entrada
│   └── index.css            # Tema, tokens de color y estilos globales
├── index.html
├── vite.config.js
└── package.json
```

Secciones de la página (en orden): **Hero → Estadísticas → Servicios → Sobre mí →
Cómo funciona → Clientes → Opiniones → Precios → Contacto → Footer**, más el botón
flotante de WhatsApp.

## Requisitos previos

- [Node.js](https://nodejs.org/) **18+** (recomendado 20 o 22)
- npm (incluido con Node)

## Instalación y uso

```bash
# 1. Clonar el repositorio
git clone git@github.com:mvittini/janofilo.git
cd janofilo

# 2. Instalar dependencias
npm install

# 3. Levantar el servidor de desarrollo
npm run dev
```

Luego abre **http://localhost:5173** en tu navegador.

## Scripts disponibles

| Script | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo con HMR |
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Sirve localmente el build de producción |
| `npm run lint` | Ejecuta Oxlint sobre el código |

## Configuración

Todos los datos del negocio están centralizados en **`src/lib/site.js`**.
Edita ahí el teléfono, email, dirección, precio base y el enlace/mensaje de WhatsApp:

```js
export const site = {
  name: "Dr. Janofilo",
  owner: "Alejandro Frey",
  role: "Ingeniero en Informática",
  phoneDisplay: "+56 9 5396 3048",
  phoneRaw: "56953963048",
  email: "contacto@drjanofilo.cl",
  address: "Echeñique con Bremen, Ñuñoa",
  priceFrom: "$20.000",
};
```

> **Nota:** el email es un valor de ejemplo (`contacto@drjanofilo.cl`).
> Reemplázalo por el correo real del negocio.

Los colores de la marca se definen como tokens en `src/index.css`, dentro del
bloque `@theme` (verde `brand`, amarillo `sun`, coral, azul `accent` y navy `ink`).

## Exponer el sitio (ngrok / túneles)

El servidor de desarrollo ya está configurado para aceptar conexiones externas
en `vite.config.js`:

```js
server: {
  host: true,
  allowedHosts: true, // acepta cualquier host (útil para ngrok)
}
```

Así puedes compartirlo con un túnel, por ejemplo:

```bash
ngrok http 5173
```

Si prefieres restringir los hosts permitidos, reemplaza `true` por una lista,
p.ej. `allowedHosts: ['.ngrok-free.app', 'tudominio.cl']`.

## Despliegue en producción

Genera los archivos estáticos:

```bash
npm run build
```

Esto crea la carpeta `dist/`, que puedes publicar en cualquier hosting estático
(Netlify, Vercel, GitHub Pages, Cloudflare Pages) o servir con **nginx**:

```nginx
server {
    listen 80;
    server_name tudominio.cl;
    root /var/www/janofilo/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Personalización

- **Textos y secciones:** cada sección es un componente independiente en
  `src/components/`. Edita el que quieras sin afectar el resto.
- **Servicios, pasos, testimonios y clientes:** son arreglos de datos al inicio
  de sus respectivos componentes (`Services.jsx`, `Process.jsx`,
  `Testimonials.jsx`, `Clients.jsx`).
- **Imágenes:** reemplaza los archivos en `public/assets/` manteniendo los mismos
  nombres, o actualiza las rutas en los componentes.

## Créditos

- **Negocio:** Alejandro Frey — *Dr. Janofilo*, Ingeniero en Informática (Ñuñoa, Chile).
- **Logo, mascota, fotos y logos de clientes:** propiedad de Dr. Janofilo,
  provenientes del sitio original [drjanofilo.cl](https://drjanofilo.cl/).
- **Desarrollo del rediseño:** landing en React + Vite + Tailwind CSS.
