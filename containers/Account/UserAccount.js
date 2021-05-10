import React from "react";
import {
  AccountContainer,
  AccountContentStyled,
  MenuSwitcherItemStyled,
  MenuSwitcherStyled
} from "./_components";
import { accountPages } from "./AccountPages";
import LinkTo from "@storybook/addon-links/dist/react";
import { LightSpan } from "../../components/mainComponents";

console.log(accountPages.account.component, "test");

const UserAccount = () => {
  return (
    <AccountContainer>
      <MenuSwitcherStyled>
        {Object.values(accountPages).map(obj => (
          <MenuSwitcherItemStyled>
            <LinkTo story={obj.link}>
              <LightSpan>{obj.title}</LightSpan>
            </LinkTo>
          </MenuSwitcherItemStyled>
        ))}
      </MenuSwitcherStyled>
      <div>
        {Object.values(accountPages).map(obj => (
          <AccountContentStyled>{obj.component}</AccountContentStyled>
        ))}
      </div>
    </AccountContainer>
  );
};

export default UserAccount;
