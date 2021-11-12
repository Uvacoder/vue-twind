import { css, apply } from 'twind/css'

export const __typography = css`
  .text-hero,
  .text-title,
  .text-subtitle {
    ${apply`font-bold`};
  }

  .text-hero {
    ${apply`text-6xl`};
  }

  .text-title {
    ${apply`text-5xl`};
  }

  .text-subtitle {
    ${apply`text-3xl`};
  }

  .text-highlight {
    ${apply`text-2xl`};
  }

  .text-description {
    ${apply`text-xl`};
  }

  .text-normal {
    ${apply`text-base`};
  }

  .text-small {
    ${apply`text-xs`};
  }
`
