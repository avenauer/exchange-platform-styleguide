import styled from "@emotion/styled";
import { themes } from "../theming";

export const NotificationMessageStyled = styled.div`
  display: flex;
  position: relative;
  background-color: ${themes.dark.color.gray.shadow};
  max-width: 40em;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 0 18px 4px ${themes.dark.color.dark.dark};

  div {
    padding-left: 1em;
    padding-bottom: 1.25em;
    //max-width: 26em;
    span {
      display: block;
      margin-top: 1em;
      margin-bottom: 0em;
    }

    p {
      word-break: break-word;
      line-height: 1.25;
      color: ${themes.dark.color.neutral.shadow};
      margin: 0;
    }
  }
`;

export const CloseMessageIcon = styled.img`
  cursor: pointer;
  position: absolute;
  right: 1em;
  top: 50%;
  transform: translateY(-50%);
  width: 2em;
  //padding: 2.5em 0;
`;
