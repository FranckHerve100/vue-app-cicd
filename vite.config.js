import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/// <reference types="node" />

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 5173, // Utilise le port défini par Heroku ou 5173 par défaut
    host: true, // Assure que Vite écoute sur 0.0.0.0, nécessaire pour le déploiement sur Heroku
  }
})
