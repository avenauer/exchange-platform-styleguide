import styled from "@emotion/styled";
import { themes } from "../../theming";

export const ModalPageStyled = styled.div`
  position: relative;
  border-radius: 5px;
  width: 100%;
  background-color: ${themes.dark.color.gray.shadow};
  padding: 1em 0;
  h2 {
    margin: 0;
    padding: 1em 0;
    text-align: center;
  }

  & .coloured-span {
    color: ${themes.dark.color.deepblue.shadow};
  }

  span {
    a {
      color: ${themes.dark.color.deepblue.shadow};
    }
  }
`;

export const ModalTitle = styled.h1`
  position: absolute;
  display: block;
  text-align: center;
  left: 0;
  right: 0;
  top: -2.5em;
`;

export const WideButton = styled.button`
  width: 100%;
  margin: 1em 0;
  font-family: Poppins, sans-serif;
  font-size: 1.2rem;
  border: none;
  outline: 0;
  padding: 1.5em 0;
  background: ${themes.dark.color.deepblue.shadow};
  border-radius: 5px;
  cursor: pointer;

  transition: 150ms ease-out;

  &:hover {
  //original
    //background: ${themes.dark.color.deepblue.shadowlight};
    
    background-color: #5465DE;
  }
`;

export const ModalLinksFooter = styled.div`
  display: block;
  text-align: center;
  padding: 1.5em 0;

  a {
    color: ${themes.dark.color.deepblue.shadow};
    display: inline-block;
  }

  span {
    color: ${themes.dark.color.neutral.neutral};
    display: inline-block;
    padding-right: 0.3em;
  }
`;

export const ForgotPasswordStyled = styled.div``;
