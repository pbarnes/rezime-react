/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import { presetUno } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unocss({
      presets: [
        presetUno()
      ],
      rules: [
        ['text-xxs', {'font-size': '0.65em'}],
        [/^m-(\d+)$/, ([, d]:Array<any>) => ({ margin: `${d / 4}rem` })],
      ]
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/__test__/setup.ts'], // for MSW
  },
})
