import React from "react";
import { CloseMessageIcon, NotificationMessageStyled } from "./_components";
import { themes } from "../theming";
import CloseIcon from "../../assets/icons/close-outline.svg";
import { LighterSpan, LightSpan } from "../mainComponents";

const SuccessMessage = ({ message }) => {
  return (
    <NotificationMessageStyled>
      <div>
        <LightSpan style={{ color: themes.dark.color.deepgreen.deepgreen }}>
          Success
        </LightSpan>
        <LighterSpan>{message ? message : "Message"}</LighterSpan>
      </div>
      <CloseMessageIcon src={CloseIcon} alt="" />
    </NotificationMessageStyled>
  );
};

export default SuccessMessage;
