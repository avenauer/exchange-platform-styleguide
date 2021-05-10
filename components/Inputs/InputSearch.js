import React from "react";
import { InputSearchIcon, InputSearchStyled } from "./_components";
import SearchIcon from "../../assets/icons/search.svg";

const InputSearch = ({ placeholder, type, disabled, value }) => {
  return (
    <InputSearchStyled>
      <div>
        <input
          className="search-input"
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          value={value}
        />
        <InputSearchIcon src={SearchIcon} alt="" />
      </div>
    </InputSearchStyled>
  );
};

export default InputSearch;
