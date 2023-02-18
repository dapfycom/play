import { ProxyNetworkProvider } from "@elrondnetwork/erdjs-network-providers/out";
import { Address } from "@elrondnetwork/erdjs/out";
import bskFarmAbiUrl from "assets/abis/beskar-dao.abi.json";
import { selectedNetwork } from "config/network";

export const provider = new ProxyNetworkProvider(
  selectedNetwork.network.gatewayAddress,
  {
    timeout: 30000,
  }
);

export const EGLD_VAL = Math.pow(10, 18);

export type WspTypes =
  | "maiarBskExchangeWsp"
  | "wrapEgldpWsp"
  | "wrapEgldpWspShard1"
  | "wrapEgldpWspShard2"
  | "maiarRouterWsp"
  | "bskFarmWsp";
export const getInterface = (workspace: WspTypes) => {
  let address = null;
  let abiUrl: any = null;
  let implementsInterfaces = "";
  let simpleAddress = "";

  switch (workspace) {
    case "maiarBskExchangeWsp":
      simpleAddress = selectedNetwork.scAddress.maiarBskSwap;
      address = new Address(simpleAddress);
      break;

    case "wrapEgldpWsp":
      simpleAddress = selectedNetwork.scAddress.wrapEgld;
      address = new Address(simpleAddress);

      break;
    case "wrapEgldpWspShard1":
      simpleAddress = selectedNetwork.scAddress.wrapEgldShar1;
      address = new Address(simpleAddress);

      break;
    case "wrapEgldpWspShard2":
      simpleAddress = selectedNetwork.scAddress.wrapEgldShar2;
      address = new Address(simpleAddress);

      break;
    case "maiarRouterWsp":
      simpleAddress = selectedNetwork.scAddress.maiarRouter;
      address = new Address(simpleAddress);
      break;
    case "bskFarmWsp":
      simpleAddress = selectedNetwork.scAddress.farm;
      address = new Address(simpleAddress);
      abiUrl = bskFarmAbiUrl;
      implementsInterfaces = "Esdtrewards";
      break;
    default:
      break;
  }

  return { address, abiUrl, implementsInterfaces, simpleAddress };
};
