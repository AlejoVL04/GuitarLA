import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/guitarla/',
  server: {
    port: 3000, // Cambia a un puerto libre
  },
})
