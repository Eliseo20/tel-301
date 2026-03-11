import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// GitHub Pages Deployment Trigger
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/tel-301/',
})
