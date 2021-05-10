import styled from "@emotion/styled";
import { themes } from "../../theming";
export const AccountInfoStyled = styled.div`
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  flex-flow: row wrap;
  background-color: ${themes.dark.color.gray.shadow};
  color: ${themes.dark.color.neutral.shadowdark};
  flex-basis: available;
  align-items: center;

  span {
    flex-grow: 1;
    text-align: center;
    display: block;
  }
`;
