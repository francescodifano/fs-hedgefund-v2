import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Deployed to GitHub Pages at /fs-student-hedge-fund/
// https://vite.dev/config/
export default defineConfig({
  base: '/fs-hedgefund-v2/',
  plugins: [react(), tailwindcss()],
})
