import { __breakpoints, __colors } from '~/styles/tools/variables'
import { __utilities } from '~/styles/generic/utilities'

export const __config = {
  purge: ['./index.html', './src/**/*.{vue,js,jsx}'],
  darkMode: 'class',
  mode: 'silent',
  theme: {
    screens: __breakpoints,
    colors: __colors,
    extend: {
      transitionProperty: {
        transform: 'transform, top, right, bottom, left',
      },
    },
  },
  plugins: __utilities,
}
