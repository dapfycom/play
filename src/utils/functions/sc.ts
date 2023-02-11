import { selectedNetwork } from "config/network";

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
