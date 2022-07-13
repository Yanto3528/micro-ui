import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  // plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setup-test.js',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
