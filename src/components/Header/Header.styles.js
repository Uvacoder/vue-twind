import { css, apply } from 'twind/css'
import { _mutable } from '~/styles/mixins'

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
      ${_mutable()}

      ${apply`
        h-24
        px-4
        py-2
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
