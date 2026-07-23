import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// Deployed to GitHub Pages at /fs-hedgefund-site/.
// CSS is injected from the JS bundle: GitHub Pages' CDN cold-pulls can take
// seconds per file after a deploy, so one critical request beats two.
export default defineConfig({
  base: '/fs-hedgefund-site/',
  plugins: [react(), tailwindcss(), cssInjectedByJsPlugin()],
})
