import React from "react";
import { FooterStyled } from "./_components";
import ChangelogDropdown from "./Dropdown/ChangelogDropdown";

const Footer = () => {
  return (
    <FooterStyled>
      <ChangelogDropdown />
    </FooterStyled>
  );
};

export default Footer;
