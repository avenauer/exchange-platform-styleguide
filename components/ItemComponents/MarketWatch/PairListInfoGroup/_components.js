import styled from "@emotion/styled";
import { themes } from "../../../theming";

export const PairListInfoGroupStyled = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  min-height: 150px;
  background-color: ${themes.dark.background};
  z-index: 0;

  padding-bottom: 5em;
  margin-bottom: -4.4em;

  & .overflow-image {
    z-index: -1;
    position: absolute;
    left: 0;
    opacity: 0.35;
    top: 0;
    width: 50em;
    transform: translate(-53%, -9%) rotate(50deg);
  }

  & .overflow-gradient {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      135deg,
      ${themes.dark.background + "00"} -10%,
      ${themes.dark.background} 70%
    );
  }
`;

export const SymbolCollateralIconStyled = styled.div`
  display: inline-block;
  padding: 2em 1em;
  img {
    width: 3em;
  }
  & .base-icon {
    margin-bottom: 1em;
    margin-left: -1.75em;
  }
`;

export const PairListCurrentSymbolInfoStyled = styled.div`
  display: inline-block;
  span {
    &:nth-of-type(1) {
      display: block;
    }
  }
  div {
    padding-left: 1em;
    display: inline-block;
  }
`;

export const PairListBottomInfoStyled = styled.div`
  padding: 0 1em;

  div {
    vertical-align: top;
    min-width: 40%;
    display: inline-block;
  }

  span {
    display: block;
    margin: 0.2em 0;
    color: ${themes.dark.color.neutral.shadowdark1};

    span {
      display: inline-block;
      color: ${themes.dark.color.neutral.shadowdark};
    }
  }
`;
