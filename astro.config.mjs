import { defineConfig } from 'astro/config';

import storyblok from '@storyblok/astro'
import basicSsl from '@vitejs/plugin-basic-ssl'
import { loadEnv } from 'vite'
import compress from "astro-compress";
import tailwind from "@astrojs/tailwind"

const env = loadEnv("", process.cwd(), 'STORYBLOK')

// https://astro.build/config
export default defineConfig({
  site: 'https://r32-dev.fr',
  integrations: [
    compress(), 
    tailwind(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        page: 'storyblok/Page',
        feature: 'storyblok/Feature',
        grid: 'storyblok/Grid',
        teaser: 'storyblok/Teaser',
      },
    }),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});