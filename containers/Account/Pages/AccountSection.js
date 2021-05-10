import React from "react";
import { GraySpan } from "../../../components/mainComponents";

const AccountSection = () => {
  return (
    <div>
      <GraySpan>Estimated value:</GraySpan>
      <h2>
        150.52 <GraySpan>TUSD</GraySpan>
      </h2>
    </div>
  );
};

export default AccountSection;
