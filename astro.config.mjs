// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://opticaalemania.co',
  trailingSlash: 'always',
  devToolbar: {
    enabled: false,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sanity({
    projectId: 'wlz1r3ue',
    dataset: 'production',
    apiVersion: '2026-03-01',
    useCdn: false,
  })],
});