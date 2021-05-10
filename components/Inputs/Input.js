import React, { Component } from "react";
import { InputStyled, MessageStyled } from "./_components";
import Icon from "../../assets/icons/error-circle.svg";

const Input = ({
  title,
  placeholder,
  type,
  disabled,
  value,
  message = false
}) => {
  return (
    <InputStyled>
      <div>
        <label>{title}</label>
        <input
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          value={value}
        />
      </div>
      {message ? (
        <MessageStyled>
          <img src={Icon} alt="" />
          <span>{message}</span>
        </MessageStyled>
      ) : null}
    </InputStyled>
  );
};

export default Input;
