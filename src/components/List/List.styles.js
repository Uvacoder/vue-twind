import { css } from "@emotion/css";
import tw from "twin.macro";

export const __list = (row, size) => css`
  ${tw`
    flex flex-wrap
    p-2
  `};
  ${row ? tw`flex-row items-start` : tw`flex-col`};

  .list {
    &__item {
      flex-basis: ${row ? size : "100"}%;
      ${tw`
        flex-grow flex-shrink
        p-2
      `};
    }
  }
`;
