import { Address, AddressValue, U32Value } from "@multiversx/sdk-core";
import BigNumber from "bignumber.js";
import { scQuery } from "services/sc/queries";
export const fetchUserBets = async (address: string): Promise<number> => {
  const res = await scQuery("flipWsp", "getMyBetsCount", [
    new AddressValue(new Address(address)),
  ]);

  const { firstValue } = res;
  const data = firstValue?.valueOf();
  return data?.toNumber() || 0;
};
export const fetchAllTimeBets = async (): Promise<number> => {
  const res = await scQuery("flipWsp", "getAllBetsCount");

  const { firstValue } = res;
  const data = firstValue?.valueOf();
  return data?.toNumber() || 0;
};
export const fetchVolume = async (): Promise<number> => {
  const res = await scQuery("flipWsp", "getTotalVolume");

  const { firstValue } = res;
  const data = firstValue?.valueOf();
  return data?.toNumber() || 0;
};
export const fetchAllBets = async (
  limit: number,
  offset: number
): Promise<number> => {
  const res = await scQuery("flipWsp", "getAllPaginatedUserBets", [
    new U32Value(new BigNumber(limit)),
    new U32Value(new BigNumber(offset)),
  ]);

  const { firstValue } = res;
  const data = firstValue?.valueOf();
  return data?.toNumber() || 0;
};
