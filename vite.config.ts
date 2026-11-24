import { defineConfig, type Plugin } from 'vite'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import pkg from './package.json' with { type: 'json' }

// Production-only Content-Security-Policy: the site loads only its own files and makes no requests.
const CSP = ["default-src 'none'", "script-src 'self'", "style-src 'self'", "font-src 'self'", "img-src 'self'", "connect-src 'none'", "base-uri 'none'", "form-action 'none'"].join('; ')

function csp(): Plugin {
  return {
    name: 'keston-website:csp',
    apply: 'build',
    transformIndexHtml: () => [{ tag: 'meta', attrs: { 'http-equiv': 'Content-Security-Policy', content: CSP }, injectTo: 'head-prepend' }]
  }
}

const build = (process.env.APP_BUILD ?? process.env.GITHUB_SHA ?? '').slice(0, 7)
// One real HTML file per page, so /privacy/ works on GitHub Pages without any routing tricks.
const page = (name: string) => resolve(import.meta.dirname, name, 'index.html')

export default defineConfig({
  plugins: [vue(), tailwindcss(), csp()],
  define: { __APP_VERSION__: JSON.stringify(pkg.version), __APP_BUILD__: JSON.stringify(build) },
  build: {
    assetsInlineLimit: 0,
    target: 'es2022',
    rollupOptions: { input: { home: resolve(import.meta.dirname, 'index.html'), id: page('id'), privacy: page('privacy'), terms: page('terms'), help: page('help') } }
  }
})
