import styled from "@emotion/styled";
import { themes } from "../../../theming";

export const SymbolNameStyled = styled.div`
  width: 32%;
  img {
    padding-right: 1em;
    //padding-left: 0.5em;
    width: 2.5em;
    vertical-align: middle;
  }

  h5 {
    display: inline-block;
  }
`;

export const SymbolItemStyled = styled.div`
  display: flex;
  width: calc(100% - 2em);
  padding: 0.35em 1em;
  align-items: center;
  position: relative;
  transition: 100ms ease-out;

  & .index-price {
    margin: 0.75em 0;
    width: 38%;
    span {
      font-family: Poppins, sans-serif;
      font-weight: 600;
      font-size: 1.2rem;
      color: ${themes.dark.color.neutral.shadowdark1};
    }
  }

  & .symbol-change {
    width: 30%;
    text-align: right;
    img {
      vertical-align: middle;
      padding-right: 0.5em;
    }
  }

  &:hover {
    background-color: ${themes.dark.color.deepblue.deepblue + "35"};
    cursor: pointer;
  }
`;

export const SymbolSelectedStyled = styled.div`
  position: absolute;
  height: 100%;
  width: 0.5em;
  left: 0;
  //background: ${themes.dark.color.deepblue.deepblue};
`;
