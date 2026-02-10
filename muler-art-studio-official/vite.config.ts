import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Fix: __dirname is not available in ESM contexts. We define it manually using fileURLToPath and import.meta.url.
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(() => {
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      /**
       * Per Google GenAI Coding Guidelines:
       * 1. The API key must be obtained exclusively from the environment variable process.env.API_KEY.
       * 2. Do not define process.env or request that the user update the API_KEY in the code.
       * 3. The key is injected automatically by the environment.
       */
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});