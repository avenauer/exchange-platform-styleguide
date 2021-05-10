import React from "react";
import Arrow from "../../../../assets/icons/sort-bottom.svg";
import { LightSpan } from "../../../mainComponents";
import BottomDropdown from "../../../Dropdown/BottomDropdown";
import { ChangelogWrapperStyled } from "../_components";

const ChangelogDropdown = () => {
  return (
    <BottomDropdown
      title={
        <>
          <LightSpan>Changelog</LightSpan>
          <img className="arrow-icon" src={Arrow} alt="" />
        </>
      }
    >
      <ChangelogWrapperStyled></ChangelogWrapperStyled>
    </BottomDropdown>
  );
};

export default ChangelogDropdown;
