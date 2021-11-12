import { css, apply } from 'twind/css'

export const __logo = css`
  ${apply`
    h-full
  `}

  .logo {
    &__icon {
      ${apply`
        w-full
        h-full
      `}
    }
  }
`
