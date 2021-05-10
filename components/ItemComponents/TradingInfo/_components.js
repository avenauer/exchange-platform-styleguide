import styled from "@emotion/styled";
import { themes } from "../../theming";
import {
  MarketWatchContainerStyled,
  MarketWatchSortStyled,
  withScrollbar
} from "../MarketWatch/_components";

export const TradingInfoStyled = styled.div`
  width: 100%;
  height: 100%;
`;

export const TradingInfoSwitcherWrapper = styled.div`
  background-color: ${props => themes.dark.background};
  div {
    max-width: 50em;
  }
`;

export const TradingInfoSortStyled = styled(MarketWatchSortStyled)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 0;
  width: 100%;
`;

export const TradingInfoContainerStyled = withScrollbar()(styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 11em);
  min-height: 0;
  box-shadow: inset 0 0 1em ${themes.dark.color.dark.dark};

  div {
    align-items: center;
    padding: 0.08em 0;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    transition: 100ms ease-out;
    &:hover {
      background-color: ${themes.dark.color.deepblue.deepblue + "35"};
    }

    span {
      color: ${themes.dark.color.neutral.shadow};
      margin: 0.3em 0;
    }
  }
`);

export const TradingInfoPaginationStyled = styled.div`
  height: 3em;
  padding: 0.4em 0;
`;

export function TradingInfoButton() {
  return com => styled(com)`
    font-family: Poppins, sans-serif;
    font-size: 1.1rem;
    min-width: 4em;
    margin-left: 0.5em;
    height: 1.7em;
    border-radius: 10px;
    border: none;
    outline: none;
  `;
}

export const NeutralSmallButton = TradingInfoButton()(styled.button`
  background-color: ${themes.dark.color.deepblue.shadow};
`);

export const RedSmallButton = TradingInfoButton()(styled.button`
  background-color: ${themes.dark.color.red.red};
`);
