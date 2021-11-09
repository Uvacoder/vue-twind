import { css, apply } from 'twind/css'

export const __typography = css`
  .text-hero,
  .text-title,
  .text-subtitle {
    ${apply`font-bold`};
  }

  .text-hero {
    ${apply`mb-3 text-6xl`};
  }

  .text-title {
    ${apply`mb-2 text-5xl`};
  }

  .text-subtitle {
    ${apply`mb-1 text-3xl`};
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
