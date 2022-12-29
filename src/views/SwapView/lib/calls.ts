import { BigUIntValue, BytesValue } from "@elrondnetwork/erdjs/out";
import BigNumber from "bignumber.js";
import { selectedNetwork } from "config/network";
import { ESDTTransfer, wrapEgldAndEsdtTranfer } from "services/sc/calls";

export const submitSwap = async (
  fromToken: {
    identifier: string;
    decimals: number;
  },
  toToken: {
    identifier: string;
    decimals: number;
  },
  sendAmount: string,
  receiveAmount: string,
  slippage: number
) => {
  const amountToReceiveBn = new BigNumber(receiveAmount);
  const minReceiveAmount = amountToReceiveBn
    .minus(amountToReceiveBn.multipliedBy(slippage).dividedBy(100))
    .toFixed(0);

  console.log("minReceiveAmount", minReceiveAmount);

  // new BigNumber(value).multipliedBy(slipage).dividedBy(100)
  if (fromToken.identifier === selectedNetwork.tokensID.egld) {
    wrapEgldAndEsdtTranfer(
      sendAmount,
      "swapTokensFixedInput",
      [
        BytesValue.fromUTF8(selectedNetwork.tokensID.bsk),
        new BigUIntValue(
          new BigNumber(minReceiveAmount).multipliedBy(10 ** toToken.decimals)
        ),
      ],
      selectedNetwork.scAddress.maiarBskSwap
    );
  } else {
    ESDTTransfer({
      funcName: "swapTokensFixedInput",
      contractAddr: selectedNetwork.scAddress.maiarBskSwap,
      token: fromToken,
      val: Number(sendAmount),
      args: [
        BytesValue.fromUTF8(selectedNetwork.tokensID.bsk),
        new BigUIntValue(
          new BigNumber(minReceiveAmount).multipliedBy(10 ** toToken.decimals)
        ),
      ],
    });
  }
};
