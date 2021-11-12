import { css, apply } from 'twind/css'

export const _mutable = ({ invert = false, border = true } = {}) => {
  const background = {
    light: invert ? 'secondary' : 'primary',
    dark: invert ? 'primary' : 'secondary',
  }
  const borders = {
    light: invert ? 'quaternary' : 'tertiary',
    dark: invert ? 'tertiary' : 'quaternary',
  }
  const text = {
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
        border-${borders.light}
      `
      }
      text-${text.light}

      dark:(bg-${background.dark} ${border && `border-${borders.dark}`} text-${
      text.dark
    })
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
