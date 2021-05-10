import React from "react";
import Dropdown from "../../../Dropdown/Dropdown";
import Arrow from "../../../../assets/icons/sort-bottom.svg";
import { CustomizeLayoutWrapperStyled } from "../_components";
import CustomizeIcon from "../../../../assets/icons/customize.svg";
import { GraySpan } from "../../../mainComponents";
import Button from "../../../Buttons/Button";
import Checkbox from "../../../Checkbox/Checkbox";

const CustomizeLayoutDropdown = () => {
  return (
    <Dropdown
      side
      title={
        <>
          <img className="icon" src={CustomizeIcon} alt="" />
          <img className="arrow-icon" src={Arrow} alt="" />
        </>
      }
    >
      <CustomizeLayoutWrapperStyled>
        <GraySpan>Customize your layout</GraySpan>
        <div>
          <Button>Customize</Button>
          <Button theme="primary">Reset</Button>
        </div>
        <div className="wrapper">
          <Checkbox label="Light theme" />
          <Checkbox label="Dark theme" />
        </div>
      </CustomizeLayoutWrapperStyled>
    </Dropdown>
  );
};

export default CustomizeLayoutDropdown;
