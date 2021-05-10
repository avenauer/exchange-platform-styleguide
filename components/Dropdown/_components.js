import styled from "@emotion/styled";
import { themes } from "../theming";

export const DropdownStyled = styled.div`
  position: relative;
  height: 100%;
  width: fit-content;

  div {
    right: ${props => (props.side ? "0" : "inherit")};
  }

  & .icon {
    width: 2.3em;
  }

  & .dropdown-content,
  .bottom-dropdown-content {
    z-index: 100;
    display: none;
    box-shadow: 0 0 1.5em -0.75em black;
    background-color: ${themes.dark.color.gray.shadowdark};
    position: absolute;
  }

  &:hover {
    & .dropdown-content,
    .bottom-dropdown-content {
      display: inline-block;
    }
  }

  label {
    cursor: pointer;
    padding: 0 0.25em;
    margin: 0 0.5em;
    align-items: center;
    display: flex;
    height: 100%;
    & .arrow-icon {
      margin: 0.25em;
    }
  }

  &:hover {
    & .arrow-icon {
      transform: rotate(-180deg);
    }
  }

  & .bottom-dropdown-content {
    bottom: calc(-100% + 7em);
  }
`;

export const BottomDropdownStyled = styled(DropdownStyled)`
  label {
    & .arrow-icon {
      transform: rotate(-180deg);
    }
    &:hover {
      & .arrow-icon {
        transform: rotate(0);
      }
    }
  }
`;

export const DropdownContentStyled = styled.div`
  z-index: 100;
  display: none;
  box-shadow: 0 0 1.5em -0.75em black;
  background-color: ${themes.dark.color.gray.shadowdark};
  position: absolute;
`;
