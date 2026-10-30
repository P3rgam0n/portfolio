// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://p3rgam0n.github.io',
  base: '/portfolio',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});