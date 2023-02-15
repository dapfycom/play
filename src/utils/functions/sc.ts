import { selectedNetwork } from "config/network";
import { WspTypes } from "services/sc";

export const getScOfWrapedEgld = (shard: number): string => {
  switch (shard) {
    case 0:
      return selectedNetwork.scAddress.wrapEgld;
    case 1:
      return selectedNetwork.scAddress.wrapEgldShar1;
    case 2:
      return selectedNetwork.scAddress.wrapEgldShar2;

    default:
      return selectedNetwork.scAddress.wrapEgldShar1;
  }
};
export const getWspOfWrapedEgld = (shard: number): WspTypes => {
  switch (shard) {
    case 0:
      return "wrapEgldpWsp";
    case 1:
      return "wrapEgldpWspShard1";
    case 2:
      return "wrapEgldpWspShard2";

    default:
      return "wrapEgldpWspShard1";
  }
};
