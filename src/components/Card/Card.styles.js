import { css } from '@emotion/css'
import tw from 'twin.macro'

export const __card = (children) => css`
  ${tw`
    w-full
    flex
    p-5
    text-white
    overflow-hidden
    cursor-pointer
  `};
  min-width: 300px;
  min-height: 224px;

  .card {
    &__front,
    &__back {
      flex-basis: 100%;
      ${tw`
        flex-grow
        flex-shrink-0
        p-5
        shadow-md
        rounded-lg
        transition-transform
      `};
    }

    &__front {
      ${tw`
        flex
        flex-col
        justify-between
        relative
        bg-purple-500
        z-10
      `};

      ${children &&
      `
        .card:hover& {
          transform: translate(-0.75rem, 0.75rem);
          z-index: 0;
        }
      `}
    }

    &__back {
      ${tw`bg-blue-500`};
      transform: translate(calc(-100% - 0.75rem), 0.75rem);

      ${children &&
      `
        .card:hover& {
          transform: translate(calc(-100%), 0);
        }
      `}
    }

    &__icon {
      ${tw`
        w-10
        h-10
        self-end
        mt-5
      `};
    }
  }
`
