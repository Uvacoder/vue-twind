import { css, apply } from 'twind/css'
import { _theme, _side } from '~/styles/tools/mixins'

export const __card = css`
  ${apply`
    w-full
    flex
    p-3
  `};
  min-width: 300px;
  min-height: 224px;

  .card {
    &__icon {
      ${apply`
        w-10 h-10
        mt-5
        self-end
      `};
    }
  }
`

export const __front = (children) => css`
  ${_theme()}
  ${_side}

  ${apply`
    flex flex-col justify-between
    relative
    z-10

    ${children && `group-hover:(-translate-x-3 translate-y-3 z-0)`}
  `};
`

export const __back = (children) => css`
  ${_theme({ invert: true })}
  ${_side}

  ${apply`
    -left-3
    -translate-x-full translate-y-3

    ${children && `group-hover:(left-0 -translate-x-full -translate-y-0)`}
  `};
`
