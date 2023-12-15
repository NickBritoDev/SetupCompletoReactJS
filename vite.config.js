import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      manifest: {
        // Configurações do manifest
        name: 'Nome da Sua PWA',
        short_name: 'PWA',
        start_url: '/SetupCompletoReactJS/',
        display: 'standalone',
        theme_color: '#ffffff',
        icons: [
          {
            // Configurações do ícone
            src: 'caminho/do/seu/icone.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  base: '/SetupCompletoReactJS'
})
