import { css, apply } from 'twind/css'
import { _mutable } from '../../styles/mixins'

export const __button = ({ full = false } = {}) => css`
  ${_mutable}

  ${apply`
    ${full ? 'w-full block' : 'inline-block'}
    py-2
    px-4
    rounded
    transform
    transition-all

    hover:(shadow-md scale-105 -translate-y-1)

    focus:(outline-none ring-none)
  `};
`
