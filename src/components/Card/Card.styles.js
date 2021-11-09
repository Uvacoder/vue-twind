import { css, apply } from 'twind/css'

const side = css`
  flex-basis: 100%;
  ${apply`
    flex-grow
    flex-shrink-0
    p-5
    shadow-md
    rounded-lg
    transform-gpu
    transition-transform
  `};
`

export const __card = css`
  ${apply`
    w-full
    flex
    p-5
    text-white
    overflow-hidden
    group
  `};
  min-width: 300px;
  min-height: 224px;

  .card {
    &__icon {
      ${apply`
        w-10
        h-10
        self-end
        mt-5
      `};
    }
  }
`

export const __front = (children) => css`
  ${side}
  ${apply`
    flex
    flex-col
    justify-between
    relative
    bg-purple-500
    z-10

    ${
      children &&
      `
        group-hover:translate-y-3
        group-hover:-translate-x-3
        group-hover:z-0
      `
    }
  `};
`

export const __back = (children) => css`
  ${side}
  ${apply`
    bg-blue-500

    ${
      children &&
      `
        group-hover:-translate-y-0
        group-hover:-translate-x-full
      `
    }
  `};
  transform: translate(calc(-100% - 0.75rem), 0.75rem);
`
