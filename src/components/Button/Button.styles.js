import { css, apply } from 'twind/css'

export const __button = (primary) => {
  const theme = primary ? 'blue' : 'purple'

  return css`
    ${apply`
      py-2
      px-4
      bg-${theme}-500 hover:bg-${theme}-700
      shadow-md hover:shadow-sm
      rounded
      text-white
    `};
    text-decoration: ${primary ? 'none' : 'underline'};
  `
}
