import {
  Address,
  AddressValue,
  BigUIntValue,
  BytesValue,
  ContractFunction,
  Transaction,
  TransactionPayload,
} from "@elrondnetwork/erdjs/out";
import BigNumber from "bignumber.js";
import { selectedNetwork } from "config/network";
import store from "redux/store";
import {
  EGLDPayment,
  ESDTTransfer,
  sendMultipleTransactions,
} from "services/sc/calls";
import { IElrondToken } from "types/elrond.interface";
import { IRoute } from "types/swap.interface";
import { setElrondBalance } from "utils/functions/formatBalance";
import { getScOfWrapedEgld } from "utils/functions/sc";

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

export const lpSwap = async (
  routes: IRoute[],
  fromToken: {
    value: string;
    selectedToken: string;
  },
  slipapge = 1,
  fromElrondToken
) => {
  const swapInfo = routes[0];
  if (swapInfo) {
    let token1 = fromToken.selectedToken;

    const transactions = [];

    const sender = store.getState().dapp.userAddress;
    const value = setElrondBalance(
      Number(fromToken.value),
      fromElrondToken.decimals
    );
    const ChainId = selectedNetwork.ChainID;

    if (fromToken.selectedToken === selectedNetwork.tokensID.egld) {
      token1 = selectedNetwork.tokensID.wegld;
      //wrap egld
      const shard = store.getState().dapp.shard;
      const wrapContractBasedOnShard = getScOfWrapedEgld(shard);
      const payload = TransactionPayload.contractCall()
        .setFunction(new ContractFunction("wrapEgld"))
        .setArgs([])
        .build();

      const wrapTx = new Transaction({
        sender: new Address(sender),
        value: value,
        receiver: new Address(wrapContractBasedOnShard),
        data: payload,
        gasLimit: 30000000,
        chainID: ChainId,
      });

      transactions.push(wrapTx);
    }

    const amountWithSlipage = new BigNumber(swapInfo.token2AmountDecimals)
      .multipliedBy(slipapge)
      .dividedBy(100)
      .toNumber();

    const finalAmount = new BigNumber(swapInfo.token2AmountDecimals)
      .minus(amountWithSlipage)
      .toFixed(0);

    const payload2 = TransactionPayload.contractCall()
      .setFunction(new ContractFunction("ESDTTransfer"))
      .setArgs([
        BytesValue.fromUTF8(token1),
        new BigUIntValue(new BigNumber(swapInfo.token1AmountDecimals)),
        BytesValue.fromUTF8("multiPairSwap"),

        //swap info
        new AddressValue(new Address(swapInfo.sc)),
        BytesValue.fromUTF8("swapTokensFixedInput"),
        BytesValue.fromUTF8(swapInfo.token2),
        new BigUIntValue(new BigNumber(finalAmount)),
      ])
      .build();

    const splitTx = new Transaction({
      sender: new Address(sender),
      value: 0,
      receiver: new Address(selectedNetwork.scAddress.maiarRouter),
      data: payload2,
      gasLimit: 100000000,
      chainID: ChainId,
    });

    transactions.push(splitTx);

    // farm lp tx
    const tokens = [
      {
        collection: swapInfo.token2,
        nonce: 0,
        value: swapInfo.token2AmountDecimals,
      },
      {
        collection: swapInfo.token1,
        nonce: 0,
        value: swapInfo.token1AmountDecimals,
      },
    ];

    console.log("tokens", tokens);

    const data = tokens.flatMap((nft) => {
      const nftData = [
        BytesValue.fromUTF8(nft.collection), // <token identifier in hexadecimal encoding>
        new BigUIntValue(new BigNumber(nft.nonce)), // <token nonce in hexadecimal encoding>
        new BigUIntValue(new BigNumber(nft.value)), //<token quantity to transfer in hexadecimal encoding>
      ];
      return nftData;
    });

    const token1SlippagePercent = new BigNumber(swapInfo.token1AmountDecimals)
      .multipliedBy(slipapge)
      .dividedBy(100)
      .toNumber();
    const finalToken1Amount = new BigNumber(swapInfo.token1AmountDecimals)
      .minus(token1SlippagePercent)
      .toFixed(0);

    //token2_amount_min
    const token2SlippagePercent = new BigNumber(swapInfo.token2AmountDecimals)
      .multipliedBy(slipapge)
      .dividedBy(100)
      .toNumber();
    const finalToken2Amount = new BigNumber(swapInfo.token2AmountDecimals)
      .minus(token2SlippagePercent)
      .toFixed(0);

    const lpSwapArg = [
      new BigUIntValue(new BigNumber(finalToken2Amount)),
      new BigUIntValue(new BigNumber(finalToken1Amount)),
    ];

    const payload = TransactionPayload.contractCall()
      .setFunction(new ContractFunction("MultiESDTNFTTransfer"))
      .setArgs([
        new AddressValue(new Address(swapInfo.sc)), // <receiver bytes in hexadecimal encoding>
        new BigUIntValue(new BigNumber(tokens.length)), //<number of tokens to transfer in hexadecimal encoding>
        ...data,
        BytesValue.fromUTF8("addLiquidity"),

        // args
        ...lpSwapArg,
      ])
      .build();

    const lpTx = new Transaction({
      sender: new Address(sender),
      value: 0,
      receiver: new Address(sender),
      data: payload,
      gasLimit: 120000000,
      chainID: ChainId,
    });

    transactions.push(lpTx);

    return await sendMultipleTransactions({ txs: transactions });
  }
};
// export const lpSwap = async (
//   routes: IRoute[],
//   fromToken: {
//     value: string;
//     selectedToken: string;
//   }
// ) => {
//   const slipapge = 1;

//   const amount1 = setElrondBalance(102985, 16);
//   const amount2 = setElrondBalance(0.01);
//   const token1SlippagePercent = new BigNumber(amount1)
//     .multipliedBy(slipapge)
//     .dividedBy(100)
//     .toNumber();
//   const finalToken1Amount = new BigNumber(amount1)
//     .minus(token1SlippagePercent)
//     .toFixed(0);

//   //token2_amount_min
//   const token2SlippagePercent = new BigNumber(amount2)
//     .multipliedBy(slipapge)
//     .dividedBy(100)
//     .toNumber();
//   const finalToken2Amount = new BigNumber(amount2)
//     .minus(token2SlippagePercent)
//     .toFixed(0);

//   const lpSwapArg = [
//     new BigUIntValue(new BigNumber(finalToken1Amount)),
//     new BigUIntValue(new BigNumber(finalToken2Amount)),
//   ];

//   MultiESDTNFTTransfer(
//     "maiarBskExchangeWsp",
//     "addLiquidity",
//     [
//       {
//         collection: selectedNetwork.tokensID.bsk,
//         nonce: 0,
//         value: amount1,
//       },
//       {
//         collection: selectedNetwork.tokensID.wegld,
//         nonce: 0,
//         value: amount2,
//       },
//     ],
//     lpSwapArg,
//     100000000
//   );
// };
