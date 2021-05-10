import styled from "@emotion/styled";
import { themes } from "../../theming";
import { transitionBase } from "../../mainComponents";

export const HeaderStyled = styled.div`
  width: calc(100% - 1.5em);
  padding-left: 1.5em;
  display: flex;
  justify-content: space-between;
  height: 6em;
  background-color: ${themes.dark.color.gray.shadow};

  button {
    margin-left: 0.5em;
  }
`;

export const HeaderWrapperStyled = styled.div`
  display: inherit;
  align-items: center;
`;

export const LogoStyled = styled.img`
  height: 3em;
`;

export const ConnectionPointWrapperStyled = styled.div`
  padding: 0 1.5em;
  text-align: center;

  span {
    font-size: 1rem;
    color: ${themes.dark.color.deepgreen.deepgreen};
  }
`;

export const ConnectionPointStyled = styled.div`
    box-shadow: 0 0 5px ${themes.dark.color.deepgreen.deepgreen + "60"};
    width: 0.3em;
    margin-right: 0.3em;
    display: inline-block;
    border-radius: 0.15em 0.15em 0 0;
    background-color: ${props =>
      props.signal
        ? themes.dark.color.deepgreen.deepgreen
        : themes.dark.color.gray.shadowlight};

    &:nth-of-type(1) {
      height: 0.5em;
    }
    &:nth-of-type(2) {
      height: 1em;
    }
    &:nth-of-type(3) {
      height: 1.6em;
`;

export const LanguageWrapperStyled = styled.div`
  background-color: ${themes.dark.color.gray.shadow};

  div {
    min-width: 11em;
    display: block;
    padding: 0.75em 0.75em;

    img {
      display: inline-block;
    }

    span {
      padding-left: 0.75em;
      transition: ${transitionBase};
    }

    span,
    img {
      vertical-align: middle;
    }

    &:hover {
      cursor: pointer;
      background-color: ${themes.dark.color.gray.shadowlight};
      span {
        padding-left: 1em;
        color: ${themes.dark.color.neutral.neutral};
      }
    }
  }
`;

export const CustomizeLayoutWrapperStyled = styled.div`
  background-color: ${themes.dark.color.gray.shadow};
  min-width: 32em;
  padding-top: 1em;
  text-align: center;

  button {
    margin-top: 1em;
  }

  & .wrapper {
    justify-content: space-evenly;
    padding: 1em 0;
    display: flex;
  }
`;
