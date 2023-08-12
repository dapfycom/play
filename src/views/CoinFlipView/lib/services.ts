import { Address, AddressValue, U32Value } from "@multiversx/sdk-core";
import BigNumber from "bignumber.js";
import { scQuery } from "services/sc/queries";
import { IFlipBet } from "types/flip.inteface";
export const fetchUserBetsCount = async (address: string): Promise<number> => {
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
export const fetchUserBets = async (
  limit: number,
  offset: number,
  address: string
): Promise<IFlipBet[]> => {
  const res = await scQuery("flipWsp", "getPaginatedUserBetsByUser", [
    new AddressValue(new Address(address)),
    new U32Value(new BigNumber(limit)),
    new U32Value(new BigNumber(offset)),
  ]);

  const { firstValue } = res;
  const data = firstValue?.valueOf();
  let bets: IFlipBet[] = [];
  if (Array.isArray(data)) {
    bets = data.map((bet) => {
      const newBet: IFlipBet = {
        address: bet.user_address.bech32(),
        betAmount: bet.bsk_amount.toString(),
        result: bet.result,
        creationDate: new Date(bet.creation_date.toNumber() * 1000),
        id: bet.user_bet_id.toNumber(),
        isHeadBet: bet.user_bet,
      };
      return newBet;
    });
  }
  return bets;
};
export const fetchAllBets = async (
  limit: number,
  offset: number
): Promise<IFlipBet[]> => {
  const res = await scQuery("flipWsp", "getAllPaginatedUserBets", [
    new U32Value(new BigNumber(limit)),
    new U32Value(new BigNumber(offset)),
  ]);

  const { firstValue } = res;
  const data = firstValue?.valueOf();
  let bets: IFlipBet[] = [];
  if (Array.isArray(data)) {
    bets = data.map((bet) => {
      const newBet: IFlipBet = {
        address: bet.user_address.bech32(),
        betAmount: bet.bsk_amount.toString(),
        result: bet.result,
        creationDate: new Date(bet.creation_date.toNumber() * 1000),
        id: bet.user_bet_id.toNumber(),
        isHeadBet: bet.user_bet,
      };
      return newBet;
    });
  }
  return bets;
};
