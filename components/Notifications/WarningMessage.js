import React from "react";
import { CloseMessageIcon, NotificationMessageStyled } from "./_components";
import { themes } from "../theming";
import CloseIcon from "../../assets/icons/close-outline.svg";
import { LightSpan } from "../mainComponents";

const WarningMessage = ({ message }) => {
  return (
    <NotificationMessageStyled>
      <div>
        <LightSpan style={{ color: themes.dark.color.yellow.yellow }}>
          Warning
        </LightSpan>
        <p>{message ? message : "Message"}</p>
      </div>
      <CloseMessageIcon src={CloseIcon} alt="" />
    </NotificationMessageStyled>
  );
};

export default WarningMessage;
