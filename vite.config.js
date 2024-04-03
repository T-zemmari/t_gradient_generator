import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base:'/t_gradient_generator',
  plugins: [react()],
})
