import React from "react";
import {
  SymbolItemStyled,
  SymbolNameStyled,
  SymbolSelectedStyled
} from "./_components";
import ChangeUp from "../../../../assets/icons/sort-bottom.svg";
import { themes } from "../../../theming";
import { GraySpan, LighterSpan, LightSpan } from "../../../mainComponents";

const SymbolItem = ({ item }) => {
  return (
    <SymbolItemStyled>
      <SymbolSelectedStyled />
      <SymbolNameStyled>
        <img className="symbol-icon" src={item.img} alt="" />
        <LighterSpan className="symbol-name">{item.name}</LighterSpan>
      </SymbolNameStyled>
      <LighterSpan className="index-price">
        {item.price}
        <GraySpan> TUSD</GraySpan>
      </LighterSpan>
      <LightSpan
        className="symbol-change"
        style={{ color: themes.dark.color.deepgreen.deepgreen }}
      >
        <img src={ChangeUp} alt="" />
        {item.change}%
      </LightSpan>
    </SymbolItemStyled>
  );
};

export default SymbolItem;
