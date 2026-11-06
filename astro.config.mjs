import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://anytimemusic.nl',
  compressHTML: true,
  build: { format: 'directory' },
});
