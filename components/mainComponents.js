import styled from "@emotion/styled";
import { themes } from "./theming";
//
//TESTS ONLY
//

export const ComponentWrapper = styled.div`
  box-shadow: 0 0 15px -2px ${themes.dark.color.dark.dark};
  position: absolute;
  border-radius: 5px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
  max-width: ${props => props.maxWidth};
  max-height: ${props => props.maxHeight};
  background-color: ${props => props.backgroundColor};
`;
export const TestAbsoluteImage = styled.img`
  z-index: -1;
  width: 100%;
  position: absolute;
  top: 40%;
  max-width: 800px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TestIcon = styled.img`
  width: 2em;
`;

export const InsetPadding = styled.div`
  padding: 0 1em;
`;

export const ModalPadding = styled.div`
  padding: 0 1em;

  @media (min-width: 465px) {
    padding: 0 4em;
  }
`;

export const ComponentGridWrapper = styled.div`
  width: 100%;
  background-color: ${themes.dark.color.gray.shadowdark};
  height: 100%;
  box-shadow: 0 0 1.5em -0.75em black;
  border-radius: 5px;
`;

export const LightSpan = styled.span`
  font-family: Poppins, sans-serif;
  color: ${themes.dark.color.neutral.shadowdark};
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.5;
`;

export const GraySpan = styled.span`
  font-family: Poppins, sans-serif;
  color: ${themes.dark.color.neutral.shadowdark1};
  font-size: 1.2rem;
  line-height: 1.5;
`;

export const LighterSpan = styled.span`
  font-family: Poppins, sans-serif;
  color: ${themes.dark.color.neutral.shadow};
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.5;
`;

export const BiggerSpan = styled.span`
  font-family: Poppins, sans-serif;
  font-size: 2.4rem;
  line-height: 1.25;
  font-weight: 400;
  color: ${themes.dark.color.neutral.neutral};
`;

export const animationTime = "150ms";
export const transitionBase = `${animationTime} cubic-bezier(0.645, 0.045, 0.355, 1)`;
