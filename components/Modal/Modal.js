import React from "react";
import {
  WideButton
} from "../ItemComponents/UserPage/_components";
import {LightSpan, ModalPadding} from "../mainComponents";
import {ModalStyled, Title} from "./_components";
import Input from "../Inputs/Input";

const Modal = ({children,hide,backgroundHide}) => {
  return (
    <ModalStyled>
      <ModalPadding>
          {children}
      </ModalPadding>
    </ModalStyled>
  );
};

export default Modal;
