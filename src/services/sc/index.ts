import { Address } from "@elrondnetwork/erdjs/out";
import { selectedNetwork } from "config/network";

export const EGLD_VAL = 10 ^ 18;

export type WspTypes = "maiarBskExchangeWsp";
export const getInterface = (workspace: WspTypes) => {
  let address = null;
  let abiUrl = "";
  let implementsInterfaces = "";
  let simpleAddress = "";

  switch (workspace) {
    case "maiarBskExchangeWsp":
      simpleAddress = selectedNetwork.scAddress.maiarBskSwap;
      address = new Address(simpleAddress);
      break;

    default:
      break;
  }

  return { address, abiUrl, implementsInterfaces, simpleAddress };
};
