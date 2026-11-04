// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sanity({
    projectId: '1ygf6oh7',
    dataset: 'production',
    apiVersion: '2026-03-01',
    useCdn: false,
  })],
});