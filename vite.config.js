import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
      proxy:{
        // '/user': 'http://localhost:5000/api/v1',
        '/user': "https://petpujabackend.onrender.com/api/v1"
      }
  },
  plugins: [react()],
})
