import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [react(),
    VitePWA({
      manifest: {
        name: 'Setup Completo ReactJS',
        short_name: 'PWA',
        start_url: '/SetupCompletoReactJS/',
        display: 'standalone',
        theme_color: '#ffffff',
        icons: [
          {
            src: './public/react.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  base: '/SetupCompletoReactJS'
})
