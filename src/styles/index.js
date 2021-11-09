import { css } from 'twind/css'
import { __reset } from './globals/reset'
import { __typography } from './globals/typography'

export const __global = css`
  :global {
    ${__reset}
    ${__typography}
  }
`
