import styled from "@emotion/styled";
import { themes } from "../theming";

export const PaletteStyled = styled.div``;

export const ColorWrapper = styled.div`
  display: inline-block;
  width: calc(100% / 12);
  vertical-align: top;
`;

export const Color = styled.div`
  display: block;
  width: 100%;
  max-width: 8em;
  position: relative;
  height: 8em;
  margin: 0 auto 4em;
  border-radius: 3px;
  box-shadow: 0 0 15px -2px rgba(0, 0, 0, 0.3);

  &:nth-of-type(1) {
    margin-bottom: 10em;
  }
`;

export const NameSpan = styled.span`
  font-family: Poppins, sans-serif;
  color: ${themes.dark.color.neutral.shadowlight};
  margin: 0 auto;
  position: absolute;
  font-size: 1.3em;
  top: -2em;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const HexSpan = styled.span`
  font-family: Poppins, sans-serif;
  color: ${themes.dark.color.neutral.shadowlight};
  margin: 0 auto;
  position: absolute;
  font-size: 1.3em;
  top: 1em;
  left: 50%;
  transform: translate(-50%, 0);
`;
