import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
    'process.env.HF_ACCESS_TOKEN': JSON.stringify(env.HF_ACCESS_TOKEN)
    },
    plugins: [react()],
  }
})