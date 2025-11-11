import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // ✅ crucial for relative paths on Hostinger
  build: {
    // Output folder
    outDir: 'dist',

    // Enable minification for production builds
    minify: 'terser',

    // Configure Terser options
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },

    // Split chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['framer-motion', 'react-icons'],
        },
      },
    },
  },

  // Dev server configuration (only used locally)
  server: {
    hmr: true,
    port: 5173, // Optional: define your local dev port
    open: true, // Auto-open browser
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-router-dom',
        'framer-motion',
        'react-icons',
      ],
    },
  },
})
