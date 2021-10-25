import { css } from '@emotion/css'
import tw from 'twin.macro'
import { above } from '~/styles/breakpoints'

export const __list = (row, size) => css`
  ${tw`
    flex flex-wrap
    p-2
  `};
  ${row ? tw`flex-row items-start` : tw`flex-col`};

  .list {
    &__item {
      width: ${row ? size.sm : 100}%;
      ${tw`
        flex-grow flex-shrink-0
        p-2
			`};

      ${above('md')} {
        width: ${row ? size.md : 100}%;
      }

      ${above('lg')} {
        width: ${row ? size.lg : 100}%;
      }

      ${above('xl')} {
        width: ${row ? size.xl : 100}%;
      }
    }
  }
`
