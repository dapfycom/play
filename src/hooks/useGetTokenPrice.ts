import useGetElrondToken from "./useGetElrondToken";
import { useGetFarmsLpPrices } from "./useGetFarmsLpPrices";
const useGetTokenPrice = (tokenIdentifier) => {
  const { prices: lpPrices, isLoading } = useGetFarmsLpPrices();
  const isLpPrice = Boolean(
    lpPrices.find((lpToken) => lpToken.token === tokenIdentifier)
  );

  const { elrondToken } = useGetElrondToken(
    isLpPrice || isLoading ? null : tokenIdentifier
  );
  let tokenPrice = 0;

  if (elrondToken) {
    tokenPrice = elrondToken.price;
  }
  if (isLpPrice) {
    const price = lpPrices?.find((item) => item.token === tokenIdentifier);
    if (price) {
      tokenPrice = Number(price.price);
    }
  }

  return [tokenPrice];
};

export default useGetTokenPrice;