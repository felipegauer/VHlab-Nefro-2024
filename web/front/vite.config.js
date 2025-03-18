import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/': {
        target: 'https://v-hlab-nefro-2024-c6chqtq7v-felipes-projects-00b95a9d.vercel.app',
        changeOrigin: true,
      }
    }
  }
})
