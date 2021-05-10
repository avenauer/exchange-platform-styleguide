import styled from "@emotion/styled";
import { Switcher, SwitcherItem } from "../../components/Table/_components";
import { themes } from "../../components/theming";

export const AccountContainer = styled.div`
  display: flex;
`;

export const MenuSwitcherStyled = styled(Switcher)`
  flex-direction: column;
  max-width: 20em;
`;

export const MenuSwitcherItemStyled = styled(SwitcherItem)`
  padding: 0.5em 1.5em 0.5em 0;
  border-top: none;
  text-align: right;
  border-radius: 5px 0 0 5px;
  border-left: 7px solid
    ${props =>
      props.selected ? themes.dark.color.deepblue.shadow : "transparent"};

  &:after,
  &:before {
    right: 0;
    bottom: -1em;
    background-image: radial-gradient(
      circle at 0 100%,
      transparent 0%,
      transparent 1em,
      ${themes.dark.color.gray.shadowdark} 1em
    );
  }

  &:before {
    top: -1em;

    left: calc(100% - 1em);

    background-image: radial-gradient(
      circle at 0 0,
      transparent 0%,
      transparent 1em,
      ${themes.dark.color.gray.shadowdark} 1em
    );
  }
`;

export const AccountContentStyled = styled.div`
  width: calc(100vw - 20em);
  background-color: ${themes.dark.color.gray.shadowdark};
  height: 100%;
`;
