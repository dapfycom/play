import { BooleanValue } from "@multiversx/sdk-core/out";
import { getSmartContractInteraction } from "services/sc";
import { IElrondToken } from "types/elrond.interface";
export const flipCoin = (
  isHeads: boolean,
  token: IElrondToken,
  amount: string
) => {
  getSmartContractInteraction("flipWsp").ESDTTransfer({
    functionName: "flip",
    token: {
      collection: token.identifier,
      ...token,
    },
    arg: [new BooleanValue(isHeads)],
    value: Number(amount),
    gasL: 15000000,
  });
};
