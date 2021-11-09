import { css, apply, screen } from 'twind/css'
import { above } from '~/styles/breakpoints'

export const __list = (row, size) => css`
  ${apply`
    flex
    flex-${row ? 'row' : 'col'}
    flex-wrap
    ${row && 'items-start'}
    p-2
  `};

  .list {
    &__item {
      width: ${row ? size.sm : 100}%;
      ${apply`
        flex-grow flex-shrink-0
        p-2
			`};

      ${screen(
        'md',
        css`
          width: ${row ? size.md : 100}%;
        `
      )}

      ${screen(
        'lg',
        css`
          width: ${row ? size.lg : 100}%;
        `
      )}

      ${screen(
        'xl',
        css`
          width: ${row ? size.xl : 100}%;
        `
      )}
    }
  }
`
