import styled from "@emotion/styled";
import { themes } from "../../theming";

export const MarketWatchStyled = styled.div`
  height: 100%;
  width: 100%;
`;

export const MarketWatchSortStyled = styled.div`
  padding: 0 1em;
  width: calc(100% - 2em);

  span {
    margin: 0.4em 0;
    display: inline-block;
    cursor: pointer;
    color: ${themes.dark.color.deepblue.shadow};

    img {
      padding-left: 0.15em;
    }
  }

  & .symbol-sort {
    width: 32%;
  }

  & .index-price-sort {
    width: 38%;
  }

  & .change-sort {
    width: 30%;
    text-align: right;
  }

  img {
    vertical-align: middle;
  }S
`;

export const MarketWatchContainerStyled = withScrollbar()(styled.div`
  color: ${themes.dark.color.neutral.shadow};
  height: calc(100% - 29em);
`);

export function withScrollbar() {
  return com => styled(com)`
    overflow-y: auto;
    width: 100%;

    &::-webkit-scrollbar {
      width: 0.6em;
      height: 0.6em;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 0.3em;
      background: ${themes.dark.color.neutral.shadowdark2};
      transition: 150ms ease-out;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${themes.dark.color.neutral.shadowdark1};
    }
  `;
}

export const MarketWatchSearchBarStyled = styled.div`
  padding: 1em 0;
  width: calc(100% - 2em);
  margin: 0 auto;
`;
