import styled from "@emotion/styled";
import { themes } from "../theming";

export const ButtonStyled = styled.button`
  font-family: Lato, sans-serif;
  background-color: ${props => props.backgroundColor};
  font-size: 1.6rem;
  min-width: 9rem;
  outline: none;
  cursor: pointer;
  padding: 0.6em 1.2em;
  color: ${themes.dark.color.neutral.shadowlight};
  transition: 150ms ease-out;
  background-color: ${props =>
    props.secondary ? "transparent" : themes.dark.color.deepblue.shadow};
  border: 2px solid
    ${props =>
      props.secondary ? themes.dark.color.deepblue.shadow : "transparent"};
  border-radius: 1.5em;
  &:hover {
    background-color: ${props =>
      props.secondary ? "transparent" : themes.dark.color.deepblue.shadowlight};
    border: 2px solid
      ${props =>
        props.secondary
          ? themes.dark.color.deepblue.shadowlight
          : "transparent"};
  }
  &:focus {
    color: ${themes.dark.color.neutral.shadowdark};
    background-color: ${props =>
      props.secondary ? "transparent" : themes.dark.color.deepblue.shadowdark};
    border: 2px solid
      ${props =>
        props.secondary
          ? themes.dark.color.deepblue.shadowdark
          : "transparent"};
  }

  &:disabled {
    border: 2px solid
      ${props =>
        props.secondary
          ? themes.dark.color.deepblue.shadowdark
          : "transparent"};
    color: ${themes.dark.color.gray.shadowlight};
    background-color: ${props =>
      props.secondary ? "transparent" : themes.dark.color.deepblue.shadowdark};
    &:hover {
      background-color: ${props =>
        props.secondary
          ? "transparent"
          : themes.dark.color.deepblue.shadowdark};
      border: 2px solid
        ${props =>
          props.secondary
            ? themes.dark.color.deepblue.shadowdark
            : "transparent"};
    }
  }
`;
