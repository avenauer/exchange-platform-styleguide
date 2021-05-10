import styled from "@emotion/styled";
import { Cell, HeadingCell } from "../../Table/_components";
import { themes } from "../../theming";
import { withScrollbar } from "../MarketWatch/_components";

export const RecentTradesStyled = styled.div`
  height: 100%;
`;

export const RecentHeadingCell = styled(Cell)`
  span {
    color: ${themes.dark.color.deepblue.shadow};
  }
`;

export const RecentTradesContentStyled = withScrollbar()(styled.div`
  height: calc(100% - 2.3em);
  box-shadow: inset 0 0 1em ${themes.dark.color.dark.dark};
  background-color: ${themes.dark.color.gray.shadowdark};

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    div {
      &:nth-of-type(1) {
        padding-left: 0.5em;
      }
    }
  }
`);
