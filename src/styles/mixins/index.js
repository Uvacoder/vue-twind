import { css, apply } from 'twind/css'

export const _mutable = ({ invert = false, border = true } = {}) => {
  const background = {
    light: invert ? 'secondary' : 'primary',
    dark: invert ? 'primary' : 'secondary',
  }
  const color = {
    light: invert ? 'white' : 'black',
    dark: invert ? 'black' : 'white',
  }

  return css`
    ${apply`
      bg-${background.light}
      ${
        border &&
        `
          border-1
          border-current
        `
      }
      text-${color.light}

      dark:(
        bg-${background.dark}
        text-${color.dark}
      )
    `}
  `
}

export const _side = css`
  flex-basis: 100%;

  ${apply`
    flex-grow
    flex-shrink-0
    p-5
    relative
    shadow-md
    rounded-lg
    transform-gpu
    transition-transform
  `};
`
