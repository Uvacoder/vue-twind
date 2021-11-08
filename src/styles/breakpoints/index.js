import { breakpoints } from '../variables'

export const above = (breakpoint) =>
  `@media screen and (min-width: ${breakpoints[breakpoint]}px)`
