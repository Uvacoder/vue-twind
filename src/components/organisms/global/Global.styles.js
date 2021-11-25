import { css, apply } from 'twind/css'
import { _theme } from '~/styles/tools/mixins'

export const __global = css`
  :global {
    body {
      ${_theme({ border: false })}

      ${apply`
        pt-28
        transition-colors
      `};
    }
  }
`
