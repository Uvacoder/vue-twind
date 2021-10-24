import { css } from '@emotion/css'
import tw from 'twin.macro'

export const __list = (row) => css`
	${tw`
    flex flex-wrap items-start
    p-2
  `};
	${row ? tw`flex-row` : tw`flex-col`};

	.list {
		&__item {
			flex-basis: 33.33%;
			${tw`
        flex-grow flex-shrink
        p-2
      `};
		}
	}
`
