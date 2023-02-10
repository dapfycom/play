import {
  Address,
  AddressValue,
  BigUIntValue,
  BytesValue,
} from "@elrondnetwork/erdjs/out";
import BigNumber from "bignumber.js";
import { selectedNetwork } from "config/network";
import { EGLDPayment, ESDTTransfer } from "services/sc/calls";
import { IElrondToken } from "types/elrond.interface";
import { IRoute } from "types/swap.interface";

export const submitSwap = async (
  swapInfo: IRoute[],
  slipapge: number,
  fromToken: {
    token: string;
    value: number;
  },
  toToken: {
    token: string;
    value: number;
  },
  fromElrondToken: IElrondToken
) => {
  const toknesID = selectedNetwork.tokensID;
  const dataToSend = swapInfo.flatMap((item) => {
    const amountWithSlipage = new BigNumber(item.token2AmountDecimals)
      .multipliedBy(slipapge)
      .dividedBy(100)
      .toNumber();

    const finalAmount = new BigNumber(item.token2AmountDecimals)
      .minus(amountWithSlipage)
      .toFixed(0);

    return [
      new AddressValue(new Address(item.sc)),
      BytesValue.fromUTF8("swapTokensFixedInput"),
      BytesValue.fromUTF8(item.token2),
      new BigUIntValue(new BigNumber(finalAmount)),
    ];
  });
  // if user want EGLD -> WEGLD
  if (fromToken.token === "EGLD" && toToken.token === toknesID.wegld) {
    return await EGLDPayment(
      "wrapEgldpWspShard1",
      "wrapEgld",
      Number(fromToken.value),
      [],
      60000000
    );
  } else {
    // if user want WEGLD -> EGLD
    if (fromToken.token === toknesID.wegld && toToken.token === "EGLD") {
      return await ESDTTransfer({
        funcName: "unwrapEgld",
        val: Number(fromToken.value),
        token: fromElrondToken,
        contractAddr: selectedNetwork.scAddress.wrapEgldShar1,
        gasL: 60000000,
      });
    } else {
      // if User want to send EGLD
      if (fromToken.token === "EGLD") {
      } else {
        // if User want to receive EGLD
        if (toToken.token === "EGLD") {
        } else {
          // is user is going to swap 2 tokens
          return await ESDTTransfer({
            funcName: "multiPairSwap",
            contractAddr: selectedNetwork.scAddress.maiarRouter,
            realValue: swapInfo[0].token1AmountDecimals,
            token: fromElrondToken,
            args: dataToSend,
            gasL: 60000000,
          });
        }
      }
    }
  }
};
// export const submitSwap = async (
//   fromToken: {
//     identifier: string;
//     decimals: number;
//   },
//   toToken: {
//     identifier: string;
//     decimals: number;
//   },
//   sendAmount: string,
//   receiveAmount: string,
//   slippage: number
// ) => {
//   const amountToReceiveBn = new BigNumber(receiveAmount);
//   const minReceiveAmount = amountToReceiveBn
//     .minus(amountToReceiveBn.multipliedBy(slippage).dividedBy(100))
//     .toFixed(0);

//   // new BigNumber(value).multipliedBy(slipage).dividedBy(100)
//   if (fromToken.identifier === selectedNetwork.tokensID.egld) {
//     return await wrapEgldAndEsdtTranfer(
//       sendAmount,
//       "swapTokensFixedInput",
//       [
//         BytesValue.fromUTF8(selectedNetwork.tokensID.bsk),
//         new BigUIntValue(
//           new BigNumber(minReceiveAmount).multipliedBy(10 ** toToken.decimals)
//         ),
//       ],
//       selectedNetwork.scAddress.maiarBskSwap
//     );
//   } else {
//     return await ESDTTransfer({
//       funcName: "swapTokensFixedInput",
//       contractAddr: selectedNetwork.scAddress.maiarBskSwap,
//       token: fromToken,
//       val: Number(sendAmount),
//       args: [
//         BytesValue.fromUTF8(selectedNetwork.tokensID.bsk),
//         new BigUIntValue(
//           new BigNumber(minReceiveAmount).multipliedBy(10 ** toToken.decimals)
//         ),
//       ],
//     });
//   }
// };
