import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    // Permite acceder desde túneles (ngrok) o dominios detrás de nginx.
    // `true` acepta cualquier host; también puedes usar una lista, p.ej.
    // allowedHosts: ['.ngrok-free.app', 'tu-dominio.cl']
    allowedHosts: true,
  },
})
