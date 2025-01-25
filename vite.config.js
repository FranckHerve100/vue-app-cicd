import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/// <reference types="node" />

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 5173,
    host: true, // Permet d'écouter sur toutes les interfaces
    allowedHosts: ['vue-app-cicd-1-2fdfe77ae104.herokuapp.com', 'vue-app-cicd-3636e126cc69.herokuapp.com'], // Ajoute l'hôte Heroku autorisé
  }
})
