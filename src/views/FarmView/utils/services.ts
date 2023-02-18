import { Address, AddressValue } from "@elrondnetwork/erdjs/out";
import { selectedNetwork } from "config/network";
import { ESDTTransfer } from "services/sc/calls";
import { scQuery } from "services/sc/queries";
import { IElrondToken } from "types/elrond.interface";

//calls
export const stakeLP = (amount: number | string, lpToken: IElrondToken) => {
  console.log("amount", amount);
  console.log("lpToken", lpToken);

  ESDTTransfer({
    contractAddr: selectedNetwork.scAddress.farm,
    funcName: "deposit",
    gasL: 700000000,
    val: amount,
    token: lpToken,
  });
};

export const harvest = () => {};

//queries
export const fetchUserFarmInfo = async ([key, address]: [string, string]) => {
  const res = await scQuery("bskFarmWsp", "viewUserTokenData", [
    new AddressValue(new Address(address)),
  ]);
  const data = res.firstValue?.valueOf().map((d) => d.toNumber());

  return data;
};
export const fetchFarmInfo = async () => {
  const res = await scQuery("bskFarmWsp", "viewAppTokenData", []);
  const data = res.firstValue?.valueOf();

  console.log("data", data);
  return data;
};
