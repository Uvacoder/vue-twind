import { css } from 'twind/css'
import { __reset } from './reset'
import { __typography } from './typography'

export const __global = css`
  :global {
    ${__reset}
    ${__typography}
  }
`
