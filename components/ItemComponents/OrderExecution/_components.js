import styled from "@emotion/styled";
import { themes } from "../../theming";
import { TradingInfoButton } from "../TradingInfo/_components";

export const OrderExecutionStyled = styled.div`
  height: 100%;

  & .Margin {
    text-align: right;

    span {
      color: ${themes.dark.color.deepblue.shadow};
      span {
        color: ${themes.dark.color.neutral.neutral};
      }
    }
  }
`;

export function OrderExecutionButton() {
  return com => styled(com)`
    font-family: Poppins, sans-serif;
    width: 50%;
    font-size: 1.2rem;
    outline: none;
    border: none;
    padding: 1em 0;
    transition: 150ms cubic-bezier(0.645, 0.045, 0.355, 1);
    cursor: pointer;
  `;
}

export const BuyOrderExecutionButton = OrderExecutionButton()(styled.button`
  background-color: ${themes.dark.color.deepgreen.deepgreen};

  &:hover {
    background-color: ${themes.dark.color.deepgreen.shadowlight};
  }
  border-radius: 0 0 0 5px;
`);
export const SellOrderExecutionButton = OrderExecutionButton()(styled.button`
  background-color: ${themes.dark.color.red.red};
  border-radius: 0 0 5px 0;

  &:hover {
    background-color: ${themes.dark.color.red.shadowlight};
  }
`);
