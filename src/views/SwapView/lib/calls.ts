import {
  Address,
  AddressValue,
  BigUIntValue,
  BytesValue,
} from "@elrondnetwork/erdjs/out";
import BigNumber from "bignumber.js";
import { selectedNetwork } from "config/network";
import {
  EGLDPayment,
  ESDTTransfer,
  MultiESDTNFTTransfer,
} from "services/sc/calls";
import { IElrondToken } from "types/elrond.interface";
import { IRoute } from "types/swap.interface";
import { setElrondBalance } from "utils/functions/formatBalance";

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

export const lpSwap = async () => {
  const slipapge = 1;

  const amount1 = setElrondBalance(102985, 16);
  const amount2 = setElrondBalance(0.01);
  const token1SlippagePercent = new BigNumber(amount1)
    .multipliedBy(slipapge)
    .dividedBy(100)
    .toNumber();
  const finalToken1Amount = new BigNumber(amount1)
    .minus(token1SlippagePercent)
    .toFixed(0);

  //token2_amount_min
  const token2SlippagePercent = new BigNumber(amount2)
    .multipliedBy(slipapge)
    .dividedBy(100)
    .toNumber();
  const finalToken2Amount = new BigNumber(amount2)
    .minus(token2SlippagePercent)
    .toFixed(0);

  const lpSwapArg = [
    new BigUIntValue(new BigNumber(finalToken1Amount)),
    new BigUIntValue(new BigNumber(finalToken2Amount)),
  ];

  MultiESDTNFTTransfer(
    "maiarBskExchangeWsp",
    "addLiquidity",
    [
      {
        collection: selectedNetwork.tokensID.bsk,
        nonce: 0,
        value: amount1,
      },
      {
        collection: selectedNetwork.tokensID.wegld,
        nonce: 0,
        value: amount2,
      },
    ],
    lpSwapArg,
    100000000
  );
};
