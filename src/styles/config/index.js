import { breakpoints, colors } from '~/styles/variables'
import { px } from '~/utils/px'

import { __utilities } from '~/styles/utilities'

export const __config = {
  purge: ['./index.html', './src/**/*.{vue,js,jsx}'],
  darkMode: 'class',
  mode: 'silent',
  theme: {
    screens: {
      sm: px(breakpoints.sm),
      md: px(breakpoints.md),
      lg: px(breakpoints.lg),
      xl: px(breakpoints.xl),
      '2xl': px(breakpoints['2xl']),
    },
    extend: {
      backgroundColor: {
        primary: colors.primary,
        secondary: colors.secondary,
        tertiary: colors.tertiary,
        quaternary: colors.quaternary,
      },
      transitionProperty: {
        transform: 'transform, top, right, bottom, left',
      },
    },
  },
  plugins: __utilities,
}
