import styled from "@emotion/styled";
import { themes } from "../theming";

export const PaginationStyled = styled.div`
  display: flex;
  justify-content: center;
  a {
  border-radius: 3px;
    margin: 0.5em;
    padding: 0 0.5em;
    text-decoration: none;
    color: ${themes.dark.color.neutral.neutral};
    font-family: Poppins, sans-serif;
    font-size: 1.2rem;
    line-height: 1.5;
    font-weight: 600;
     transition: linear 10ms;
    :active {
      background-color: ${themes.dark.color.deepblue.shadow};
      transition: linear 50ms;
    }
    :hover {
      background-color: ${themes.dark.color.gray.shadow};
      color: ${themes.dark.color.deepblue.shadow};
      transition: linear 50ms;
    }
  }
  img {
    width: 2em;
    margin: 0 0.2em;
    cursor: pointer;
  }
`;
