import BigNumber from "bignumber.js";
import { fetchElrondData } from "services/rest/elrond";
import { fetchMaiarPairs } from "services/rest/elrond/maiar";
import { IRoute } from "types/swap.interface";
import { setElrondBalance } from "utils/functions/formatBalance";
import { IMexPair } from "../../../types/elrond.interface";

export const handleSwap = (value: string, rate: number) => {
  let value1 = "";
  let value2 = "";
  if (value === "") {
    value1 = "";
    value2 = "";
  } else {
    value1 = value;
    value2 = (Number(value) * rate).toString();
  }

  return { value1, value2 };
};

export const getSwapPairs = async (token1: string, token2: string) => {
  const swapPairs: IMexPair[] = [];
  const pairs: IMexPair[] = await fetchMaiarPairs();
  let firstSwapPair: {
    pair: IMexPair;
    type: "wegld" | "usdc" | "wegld-usdc";
  } = null;
  let lastSwapPair: IMexPair = null;
  const usdcWegldPair = pairs.find(
    (pair) => pair.baseId === "WEGLD-bd4d79" && pair.quoteId === "USDC-c76f1f"
  );
  pairs.forEach((pair) => {
    if (token1 !== "WEGLD-bd4d79" && token1 !== "USDC-c76f1f") {
      // if is a wegld token
      if (pair.quoteId === "WEGLD-bd4d79") {
        if (pair.baseId === token1) {
          firstSwapPair = {
            pair: pair,
            type: "wegld",
          };
        }
      }
      // if is a usdc token
      if (pair.baseId === "USDC-c76f1f") {
        if (pair.quoteId === token1) {
          firstSwapPair = {
            pair: pair,
            type: "usdc",
          };
        }
      }
      // if usdc - wegld
      if (pair.quoteId === "USDC-c76f1f" && pair.baseId === "WEGLD-bd4d79") {
        firstSwapPair = {
          pair: pair,
          type: "wegld-usdc",
        };
      }
    } else {
      if (pair.quoteId === "WEGLD-bd4d79") {
        if (pair.baseId === token2) {
          firstSwapPair = {
            pair: pair,
            type: "wegld",
          };
        }
      }
      if (pair.baseId === "USDC-c76f1f") {
        if (pair.quoteId === token2) {
          firstSwapPair = {
            pair: pair,
            type: "usdc",
          };
        }
      }
    }
  });
  pairs.forEach((pair) => {
    if (pair.quoteId === "WEGLD-bd4d79") {
      if (pair.baseId === token2) {
        lastSwapPair = pair;
      }
    }
    if (pair.baseId === "USDC-c76f1f") {
      if (pair.quoteId === token2) {
        lastSwapPair = pair;
      }
    }
  });

  // if is a direct wegld or usdc swap
  if (
    token1 === "WEGLD-bd4d79" ||
    token2 === "WEGLD-bd4d79" ||
    token1 === "USDC-c76f1f" ||
    token2 === "USDC-c76f1f"
  ) {
    return [firstSwapPair.pair];
  }

  if (firstSwapPair && lastSwapPair) {
    const posibleBridgePair = pairs.filter((pair) => {
      if (firstSwapPair.pair.quoteId === "WEGLD-bd4d79") {
        if (firstSwapPair.pair.quoteId === pair.quoteId) {
          return true;
        }
      } else {
        if (firstSwapPair.pair.baseId === pair.baseId) {
          return true;
        }
      }

      return false;
    });
    let bridgePair: IMexPair = posibleBridgePair.find((pair) => {
      if (lastSwapPair.quoteId === "WEGLD-bd4d79") {
        if (lastSwapPair.baseId === pair.baseId) {
          return true;
        }
      } else {
        if (lastSwapPair.quoteId === pair.quoteId) {
          return true;
        }
      }
      return false;
    });
    if (bridgePair) {
      swapPairs.push(firstSwapPair.pair);
      swapPairs.push(bridgePair);
    } else {
      bridgePair = usdcWegldPair;
      swapPairs.push(firstSwapPair.pair);
      swapPairs.push(bridgePair);
      swapPairs.push(lastSwapPair);
    }
  }

  return swapPairs;
};

export const smartSwapRoutes = async ([token1, token2, token1Amount]: [
  string,
  string,
  number
]): Promise<IRoute[]> => {
  const pairs = await getSwapPairs(token1, token2);
  let token1Before = token1;
  let amount1Before = token1Amount;
  const routes: IRoute[] = await Promise.all(
    pairs.map(async (pair) => {
      let t1: string = null;
      let t2: string = null;
      let rate = 0;

      if (token1Before === pair.baseId) {
        //wegld route
        t1 = pair.baseId;
        t2 = pair.quoteId;
        rate = new BigNumber(pair.basePrice).div(pair.quotePrice).toNumber();
      } else {
        //usdc route
        t1 = pair.quoteId;
        t2 = pair.baseId;
        rate = new BigNumber(pair.quotePrice).div(pair.basePrice).toNumber();
      }

      const { decimals: token1Decimals } = await fetchElrondData<{
        decimals: number;
      }>(`/tokens/${t1}?fields=decimals`);
      const { decimals: token2Decimals } = await fetchElrondData<{
        decimals: number;
      }>(`/tokens/${t2}?fields=decimals`);

      const finalAmount1 = amount1Before;
      const finalAmount2 = new BigNumber(finalAmount1)
        .multipliedBy(rate)
        .toNumber();
      const data: IRoute = {
        token1: t1,
        token2: t2,
        token1Amount: finalAmount1,
        token2Amount: finalAmount2,
        token1AmountDecimals: setElrondBalance(finalAmount1, token1Decimals),
        token2AmountDecimals: setElrondBalance(finalAmount2, token2Decimals),
        sc: pair.address,
      };

      token1Before = t2;
      amount1Before = finalAmount2;
      return data;
    })
  );

  return routes;
};
