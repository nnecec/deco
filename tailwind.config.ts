import colors from 'tailwindcss/colors'

import type { Config } from 'tailwindcss'

export default {
  content: ['./{app,components}/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.gray[700],
      },
    },
  },
} satisfies Config
