import { nextui } from '@nextui-org/theme/plugin'
import { blackA, violet } from '@radix-ui/colors'
import colors from 'tailwindcss/colors'

import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.gray[700],
        ...blackA,
        ...violet,
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {},
        dark: {},
      },
    }),
  ],
} satisfies Config
