import { injectGlobal } from '@emotion/css'
import tw from 'twin.macro'

export const __global = () => injectGlobal`
  body {
    ${tw`
      bg-gray-700
      text-white
    `};
  }
`
