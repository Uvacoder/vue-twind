import { css, apply } from 'twind/css'
import { _mutable } from '~/styles/mixins'

export const __accordion = (active) => css`
  ${apply`
		relative
	`}

  .accordion {
    &__header {
      ${_mutable()}

      ${apply`
				w-full
				flex
				items-center
				justify-between
				py-2
				px-4
				rounded-t
				${!active && 'rounded-b'}
				transition-radius
				delay-${active ? '0' : '300'}
				cursor-pointer
			`}

      &__icon {
        ${apply`
					w-8
					h-8
					transform
					rotate-${active ? '180' : '0'}
					transition-transform
				`}
      }
    }

    &__content {
      ${_mutable()}

      ${apply`
				w-full
				py-2
				px-4
				border-t-0
				rounded-b
				absolute
				top-full
				transform
				origin-top
				scale-y-${active ? '1' : '0'}
				delay-${active ? '0' : '150'}
				transition-transform
				z-10
			`}

			&__text {
        ${apply`
					opacity-${active ? '1' : '0'}
					transition-opacity
					delay-${active ? '150' : '0'}
				`}
      }
    }
  }
`
