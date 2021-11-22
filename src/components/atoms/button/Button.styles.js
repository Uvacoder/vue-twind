import { css, apply } from 'twind/css'
import { _theme } from '~/styles/mixins'

export const __button = ({ full = false } = {}) => css`
  ${_theme}

  ${apply`
    ${full ? 'w-full block' : 'inline-block'}
    px-4 py-2
    rounded
    transform
    transition-all

    hover:(shadow-md scale-105 -translate-y-1)

    focus:(outline-none)
  `};
`
