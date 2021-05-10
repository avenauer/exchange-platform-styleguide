import styled from "@emotion/styled";
import { themes } from "../theming";

export const CheckboxComponentStyled = styled.div`
  font-family: Poppins, serif;
  font-weight: 600;
  display: flex;
  margin: 0.25em 0;
  flex-direction: row;
  input {
    display: none;
  }

  & .disabled {
    background-color: ${themes.dark.color.gray.shadowlight};
    border: 2px solid ${themes.dark.color.gray.shadowlight};

    &:hover {
      background-color: ${themes.dark.color.gray.shadowlight};
      border: 2px solid ${themes.dark.color.gray.shadowlight};
    }

    img {
      visibility: ${props => (props.checked ? "visible" : "hidden")};
      opacity: 0.4;
    }
  }

  span {
    line-height: 1.5rem;
    margin: 0.6em;
  }
`;

export const CheckboxStyled = styled.div`
  position: relative;
  min-width: 1.5em;
  min-height: 1.5em;
  max-height: 1.5em;
  max-width: 1.5em;
  margin: 0.5em 0;
  border: 2px solid ${themes.dark.color.neutral.shadowdark2};
  border: 2px solid
    ${props =>
      props.checked ? "transparent" : themes.dark.color.neutral.shadowdark2};
  border-radius: 5px;
  display: inline-block;
  transition: 150ms ease-out;
  cursor: pointer;
  background-color: ${props =>
    props.checked ? themes.dark.color.deepblue.shadow : "transparent"};

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1.5em;
    transform: translate(-50%, -50%);
    visibility: ${props => (props.checked ? "visible" : "hidden")};
  }

  &:hover {
    border: 2px solid
      ${props => (props.checked ? "transparent" : themes.dark.color.gray.gray)};
    background-color: ${props =>
      props.checked ? themes.dark.color.deepblue.shadowlight : "transparent"};
  }
`;
