import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://MaxiBusi1991.github.io/rick-and-morty-api-consumo/',
  plugins: [react()],
})
