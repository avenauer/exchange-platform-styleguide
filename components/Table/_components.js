import styled from "@emotion/styled";
import { themes } from "../theming";

export const TableStyled = styled.div`
  display: table;
  width: 100%;
  margin: 0 auto;
`;
export const TableBody = styled.div`
  display: table-row-group;
`;
export const Row = styled.div`
  display: table-row;
  transition: 100ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    background-color: ${themes.dark.color.deepblue.shadow + "20"};
  }
`;

export const Cell = styled.div`
  display: table-cell;
  border-bottom: 1px solid ${themes.dark.color.deepblue.shadow + "20"};
  padding: 0.2em 0;

  h5 {
    margin: 0;
  }
`;

export const CellPadding = styled(Cell)`
  padding: 0 1em;
`;
export const Heading = styled.div`
  display: table-row;
`;
export const HeadingCell = styled.div`
  display: table-cell;
  padding: 0 1em;

  span {
    display: inline-block;
    margin: 1em 0;
    color: ${themes.dark.color.deepblue.shadow};
  }
`;

export const Switcher = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  background-color: ${props => themes.dark.background};

  div {
    &:nth-of-type(1) {
      &:before {
        display: none;
      }
    }
    &:last-child {
      &:after {
        display: none;
      }
    }
  }
`;

export const SwitcherItem = styled.div`
  transition: 150ms cubic-bezier(0.645, 0.045, 0.355, 1);
  text-align: center;
  flex-grow: 1;
  position: relative;
  cursor: pointer;
  border-radius: 5px 5px 0 0;
  border-top: 7px solid
    ${props =>
      props.selected ? themes.dark.color.deepblue.shadow : "transparent"};
  background-color: ${props =>
    props.selected ? themes.dark.color.gray.shadowdark : "transparent"};

  span {
    font-family: Poppins, sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
    transition: 150ms cubic-bezier(0.645, 0.045, 0.355, 1);
    padding: 1em 0;
    display: inline-block;
    color: ${props =>
      props.selected
        ? themes.dark.color.neutral.shadow
        : themes.dark.color.deepblue.shadow};

    span {
      padding: 0;
      color: ${themes.dark.color.neutral.shadowdark};
    }
  }

  &:after,
  &:before {
    display: ${props => (props.selected ? "block" : "none")};
    position: absolute;
    bottom: 0;
    right: -1em;
    content: "";
    width: 1em;
    height: 1em;
    background-image: radial-gradient(
      circle at 100% 0,
      transparent 0%,
      transparent 1em,
      ${themes.dark.color.gray.shadowdark} 1em
    );
  }

  &:before {
    left: -1em;
    background-image: radial-gradient(
      circle at 0 0,
      transparent 0%,
      transparent 1em,
      ${themes.dark.color.gray.shadowdark} 1em
    );
  }

  &:hover {
    span {
      color: ${props =>
        props.selected
          ? themes.dark.color.neutral.shadow
          : themes.dark.color.deepblue.shadowlight};
    }
  }
`;
