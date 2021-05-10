import AccountSection from "../../containers/Account/Pages/AccountSection";
import AffiliateSection from "../../containers/Account/Pages/AffiliateSection";
import DepositSection from "../../containers/Account/Pages/DepositSection";
import WithdrawalSection from "../../containers/Account/Pages/WithdrawalSection";
import BalancesSection from "../../containers/Account/Pages/BalancesSection";
import SettingsSection from "../../containers/Account/Pages/SettingsSection";
import HistorySection from "../../containers/Account/Pages/HistorySection";
import BuyTUSDSection from "../../containers/Account/Pages/BuyTUSDSection";
import React from "react";

export const accountPages = {
  account: {
    key: 1,
    title: "Account",
    link: "account",
    component: <AccountSection />
  },
  affiliate: {
    key: 2,
    title: "Affiliate",
    link: "affiliate",
    component: <AffiliateSection />
  },
  deposit: {
    key: 3,
    title: "Deposit",
    link: "deposit",
    component: <DepositSection />
  },
  withdrawal: {
    key: 4,
    title: "Withdrawal",
    link: "withdrawal",
    component: <WithdrawalSection />
  },
  balances: {
    key: 5,
    title: "Balances",
    link: "balances",
    component: <BalancesSection />
  },
  settings: {
    key: 6,
    title: "Settings",
    link: "settings",
    component: <SettingsSection />
  },
  history: {
    key: 7,
    title: "History",
    link: "history",
    component: <HistorySection />
  },
  buytusd: {
    key: 8,
    title: "Buy TUSD",
    link: "buy-tusd",
    component: <BuyTUSDSection />
  }
};

export default accountPages;
