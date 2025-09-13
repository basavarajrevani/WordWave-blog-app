// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


<<<<<<< HEAD
// filepath: d:\WordWave blog-app\frontend\vite.config.js
=======

>>>>>>> bfe214b5fde7d3fcefebade8e53489c0b9fdec1f
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config(); // Load environment variables from .env file

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_API_BASE_URL': JSON.stringify(process.env.VITE_API_BASE_URL),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
<<<<<<< HEAD
});
=======
});
>>>>>>> bfe214b5fde7d3fcefebade8e53489c0b9fdec1f
