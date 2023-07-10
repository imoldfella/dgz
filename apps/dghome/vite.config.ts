import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { qwikNxVite } from 'qwik-nx/plugins';
import { qwikReact } from '@builder.io/qwik-react/vite';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/apps/dghome',
  plugins: [
    qwikNxVite(),
    qwikCity(),
    qwikVite({
      client: {
        outDir: '../../dist/apps/dghome/client',
      },
      ssr: {
        outDir: '../../dist/apps/dghome/server',
      },
    }),
    tsconfigPaths({ root: '../../' }),
    qwikReact(),
  ],
  server: {
    fs: {
      // Allow serving files from the project root
      allow: ['../../'],
    },
  },
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=600',
    },
  },
});
