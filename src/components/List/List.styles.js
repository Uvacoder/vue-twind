import { css, apply, screen } from 'twind/css'

export const __list = (row, size) => css`
  ${apply`
    flex
    flex-${row ? 'row' : 'col'}
    flex-wrap
    ${row && 'items-start'}
    -mx-2
  `};

  .list {
    &__item {
      width: ${row ? size.sm : 100}%;
      ${apply`
        flex-grow-0 flex-shrink-0
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
