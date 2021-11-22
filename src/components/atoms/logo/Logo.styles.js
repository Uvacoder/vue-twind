import { css, apply, screen } from 'twind/css'

export const __logo = css`
  ${apply`
    h-full
  `}

  .logo {
    &__icon {
      ${apply`
        w-full h-full
      `}

      &__text {
        ${apply`hidden`}

        ${screen(
          'md',
          css`
            ${apply`block`}
          `
        )}
      }
    }
  }
`
