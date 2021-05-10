import styled from "@emotion/styled";
import { themes } from "../../theming";

export const FooterStyled = styled.div`
  width: calc(100% - 2px);
  background-color: ${themes.dark.color.gray.shadow};
  position: fixed;
  bottom: 0;
  margin: 0 auto;
  height: 3.5em;
`;

export const ChangelogWrapperStyled = styled.div`
  min-height: 20em;
  width: 28em;
`;
