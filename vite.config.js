import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: import.meta.env.VITE_PORT || 5173 // Utilise le port défini par Heroku ou 5173 par défaut
  }
})
