import styled from "@emotion/styled";
import { themes } from "../../theming";
import {
  MarketWatchContainerStyled,
  withScrollbar
} from "../MarketWatch/_components";

export const OrderbookStyled = styled.div`
  width: 100%;
  height: 100%;
`;

export const SpreadBarStyled = styled.div`
  height: 5em;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  flex-flow: row wrap;
  color: ${themes.dark.color.neutral.shadowdark};
  background-color: ${themes.dark.color.gray.shadow};
  flex-basis: available;
  align-items: center;

  p {
    margin: 0;
  }

  span {
    flex-grow: 1;
    text-align: center;
    display: block;
  }
`;

export const OrderbookColumnStyled = styled.div`
  height: calc(50% - 2.5em - 1.15em);
  padding-left: 0.5em;
  background-color: ${themes.dark.color.gray.shadowdarkw};
  //box-shadow: inset 0 0 1em ${themes.dark.color.dark.dark};
`;

export const OrderbookHeadingCell = styled.div`
  height: 2.3em;
  border-radius: 5px 5px 0 0;
  padding: 0 0.5em;
  display: flex;
  justify-content: space-between;
  background-color: ${themes.dark.color.gray.shadow};

  span {
    color: ${themes.dark.color.deepblue.shadow};
  }
`;

export const OrderbookContentStyled = withScrollbar()(styled.div`
  height: 100%;

  div {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`);
