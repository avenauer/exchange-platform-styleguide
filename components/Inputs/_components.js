import styled from "@emotion/styled";
import { themes } from "../theming";

export const InputButton = styled.button`
  transition: 150ms ease-out;
  font-family: Poppins, sans-serif;
  height: 3.9em;
  width: 3.9em;
  display: inline-block;
  background: ${themes.dark.color.gray.shadow};
  border: 1px solid ${themes.dark.color.deepblue.shadow};
  border-radius: 0 5px 5px 0;
  vertical-align: top;
  cursor: pointer;
  outline: none;

  &:hover {
    background: ${themes.dark.color.deepblue.shadow};
  }

  &:focus {
    background: ${themes.dark.color.deepblue.deepblue};
  }

  &:nth-of-type(1) {
    margin-left: -0.3em;
    border-radius: 0;
  }
`;

export const InputStyled = styled.div`
  min-height: 6.5em;
  margin-top: 1em;
  position: relative;

  & .search-input {
    padding-left: 1.6em;
    width: calc(100% - 2.2em - 2px);
  }

  label {
    padding: 0 0.5em;
    position: absolute;
    background-color: ${themes.dark.color.gray.shadow};
    box-shadow: 0 0 5px ${themes.dark.color.gray.shadow};
    color: ${themes.dark.color.neutral.shadow};
    font-family: Poppins, sans-serif;
    font-weight: 600;
    margin: 0;
    z-index: 1;
    top: -0.6em;
    left: 0.5em;
    font-size: 1.2rem;
  }

  input {
    z-index: 0;
    transition: 150ms ease-out;
    width: calc(100% - 1.2em - 2px);
    font-family: Lato, sans-serif;
    font-size: 1.6rem;
    padding: 0.6em;
    border: 1px solid ${themes.dark.color.deepblue.shadow};

    outline: none;
    color: ${themes.dark.color.neutral.shadowlight};
    border-radius: 5px;
    background: ${themes.dark.color.gray.shadow};

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      margin: 0;
      -webkit-appearance: none;
    }

    &:hover {
      border: 1px solid ${themes.dark.color.deepblue.shadowlight};
    }

    &::placeholder {
      color: ${themes.dark.color.neutral.shadowdark};
    }

    &:focus {
      background-color: ${themes.dark.color.dark.dark + "60"};
      border: 1px solid ${themes.dark.color.deepblue.shadow};
      &::placeholder {
        color: rgba(162, 168, 176, 0.3);
        transition: 150ms ease-out;
      }
    }

    &:disabled {
      border: 1px solid ${themes.dark.color.gray.shadowlight};
      &::placeholder {
        color: ${themes.dark.color.gray.shadowlight};
      }
    }
  }

  div {
    &:hover {
      label {
        color: ${themes.dark.color.neutral.shadowlight};
      }
    }
  }

  & .with-buttons {
    width: calc(100% - 5.9em - 2px);
  }
`;

export const MessageStyled = styled.div`
  font-family: Poppins, serif;
  font-weight: 600;
  display: flex;
  margin-top: 0.75em;

  img {
    margin-right: 0.75em;
    width: 1.5em;
  }

  span {
    color: ${themes.dark.color.red.red};
    font-size: 1.2rem;
  }
`;

export const InputSearchIcon = styled.img`
  position: absolute;
  left: 0.6em;
  height: 1.4em;
  top: 1.25em;
`;

export const InputSearchStyled = styled(InputStyled)`
  min-height: auto;
  margin-top: 0;
`;
