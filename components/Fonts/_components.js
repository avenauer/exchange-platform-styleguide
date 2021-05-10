import styled from "@emotion/styled";
import { themes } from "../theming";

export const FontsStyled = styled.div`
  margin: 0 2em;
  b {
   color: ${themes.dark.color.deepgreen.deepgreen};
  }
  h1 {
    text-align: center;
  }
  h2 {
    margin: 2em 0 0 0;
  }
`;

export const ExtraLight = styled.div`
  display: inline-block;
  margin: 0 2em;
  h1 {
    font-weight: 200;
  }
`;
export const Regular = styled.div`
  display: inline-block;
  margin: 0 2em;
  h1 {
    font-weight: 400;
  }
`;
export const SemiBold = styled.div`
  display: inline-block;
  margin: 0 2em;
  h1 {
    font-weight: 600;
  }
`;
export const Bold = styled.div`
  display: inline-block;
  margin: 0 2em;
  h1 {
    font-weight: 600;
  }
`;
export const Light = styled.div`
  display: inline-block;
  margin: 0 2em;
  h1 {
    font-weight: 300;
  }
`;

export const FontsExamplesStyled = styled.div`
  margin: 1em 2em;
  table {
    tr {
      th,
      td {
        padding: 0.5em;
        border: 1px solid #414141;
        h3 {
          text-align: left;
          margin: 0.5em;
        }
      }
    }
  }
`;
