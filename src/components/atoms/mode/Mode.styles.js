import { css, apply } from 'twind/css'

export const __mode = ({ dark = false } = {}) => css`
  ${apply`
    w-12 h-12
    p-1
    text-lg text-${!dark ? 'indigo' : 'yellow'}-400

    focus:(outline-none)
  `}
`
