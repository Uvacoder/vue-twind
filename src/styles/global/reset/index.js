import { css, apply } from 'twind/css'
import { _mutable } from '~/styles/mixins'

export const __reset = css`
  body {
    ${_mutable({ border: false })}

    ${apply`
      pt-28
      transition-colors
    `};
  }
`
