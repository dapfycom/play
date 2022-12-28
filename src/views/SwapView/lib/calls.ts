import { selectedNetwork } from "config/network";
import { ESDTTransfer } from "services/sc/calls";

export const submitSwap = async (
  token: {
    identifier: string;
    decimals: number;
  },
  value: string
) => {
  ESDTTransfer({
    funcName: "swapTokensFixedInput",
    contractAddr: selectedNetwork.scAddress.maiarBskSwap,
    token: token,
    val: Number(value),
  });
};
