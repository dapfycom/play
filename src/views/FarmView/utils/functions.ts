import BigNumber from "bignumber.js";
import toHex from "to-hex";

export function getFarmNftIdentifier(nonce: BigNumber): string {
  const nftId = "SANLOR-48b8de";
  const newNonce = toHex(nonce.toNumber(), { evenLength: true });
  return `${nftId}-${newNonce}`;
}
