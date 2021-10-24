import { css } from '@emotion/css'
import tw from 'twin.macro'

export const __list = (row, size) => css`
	${tw`
    flex flex-wrap items-start
    p-2
  `};
	${row ? tw`flex-row` : tw`flex-col`};

	.list {
		&__item {
			flex-basis: ${size}%;
			${tw`
        flex-grow flex-shrink
        p-2
      `};
		}
	}
`
