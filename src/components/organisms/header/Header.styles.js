import { css, apply } from 'twind/css'
import { _theme } from '~/styles/mixins'

export const __header = css`
  ${apply`
    w-full
    fixed
    top-0
    left-0
    z-20
  `}

  .header {
    &__content {
      ${_theme()}

      ${apply`
        h-24
        px-6
        py-4
        mt-4
        shadow-lg
        rounded-lg
        flex
        items-center
        justify-between
      `}
    }
  }
`
