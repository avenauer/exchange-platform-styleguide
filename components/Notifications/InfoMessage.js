import React from "react";
import { CloseMessageIcon, NotificationMessageStyled } from "./_components";
import CloseIcon from "../../assets/icons/close-outline.svg";
import { themes } from "../theming";
import { LightSpan } from "../mainComponents";

const InfoMessage = ({ message }) => {
  return (
    <NotificationMessageStyled>
      <div>
        <LightSpan style={{ color: themes.dark.color.deepblue.shadow }}>
          Info
        </LightSpan>
        <p>{message ? message : "Message"}</p>
      </div>
      <CloseMessageIcon src={CloseIcon} alt="" />
    </NotificationMessageStyled>
  );
};

export default InfoMessage;
