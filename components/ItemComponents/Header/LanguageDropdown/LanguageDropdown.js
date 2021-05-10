import React from "react";
import { LighterSpan } from "../../../mainComponents";
import Arrow from "../../../../assets/icons/sort-bottom.svg";
import Dropdown from "../../../Dropdown/Dropdown";
import { LanguageWrapperStyled } from "../_components";
import Uk from "../../../../assets/icons/flags/uk.png";
import Cn from "../../../../assets/icons/flags/cn.png";
import Es from "../../../../assets/icons/flags/es.png";
import Jp from "../../../../assets/icons/flags/jp.png";
import Kr from "../../../../assets/icons/flags/kr.png";
import Ru from "../../../../assets/icons/flags/ru.png";
import Vi from "../../../../assets/icons/flags/vi.png";
import Pt from "../../../../assets/icons/flags/pt.png";

const LanguageDropdown = () => {
  return (
    <Dropdown
      side
      title={
        <>
          <img src={Uk} alt="" />
          <img className="arrow-icon" src={Arrow} alt="" />
        </>
      }
    >
      <LanguageWrapperStyled>
        <div>
          <img src={Uk} alt="" />
          <LighterSpan>English</LighterSpan>
        </div>
        <div>
          <img src={Cn} alt="" />
          <LighterSpan>Chinese</LighterSpan>
        </div>
        <div>
          <img src={Es} alt="" />
          <LighterSpan>Espanol</LighterSpan>
        </div>
        <div>
          <img src={Jp} alt="" />
          <LighterSpan>Japanese</LighterSpan>
        </div>
        <div>
          <img src={Kr} alt="" />
          <LighterSpan>Korean</LighterSpan>
        </div>
        <div>
          <img src={Ru} alt="" />
          <LighterSpan>Russian</LighterSpan>
        </div>
        <div>
          <img src={Vi} alt="" />
          <LighterSpan>Vietnamese</LighterSpan>
        </div>
        <div>
          <img src={Pt} alt="" />
          <LighterSpan>Portuguese</LighterSpan>
        </div>
      </LanguageWrapperStyled>
    </Dropdown>
  );
};

export default LanguageDropdown;
