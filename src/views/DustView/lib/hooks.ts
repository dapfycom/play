import useGetUserTokens from "hooks/useGetUserTokens";
import { useAppSelector } from "hooks/useRedux";
import useSwr from "swr";
import { selectToTokenDust } from "./dust-slice";
import {
  fetchAllowedInputTokens,
  fetchAllowedOutputTokens,
  fetchAmountOut,
} from "./services";
export const useGetAllowedInputTokens = () => {
  const { data, isLoading, error } = useSwr(
    "dustWsp:getAllowedInputTokens",
    () => fetchAllowedInputTokens()
  );

  return {
    inputTokens: data || [],
    isLoading,
    error,
  };
};
export const useGetAllowedOutputTokens = () => {
  const { data, isLoading, error } = useSwr(
    "dustWsp:getAllowedOutputTokens",
    () => fetchAllowedOutputTokens()
  );

  return {
    outputTokens: data || [],
    isLoading,
    error,
  };
};
export const useGetAmountOut = (
  tokensOut: { identifier: string; balance: string }[]
) => {
  const selectedToToken = useAppSelector(selectToTokenDust);
  const { data, isLoading, error } = useSwr(
    tokensOut.length > 0 ? ["dustWsp:getAmountOut:", tokensOut] : null,
    () => fetchAmountOut(selectedToToken, tokensOut)
  );

  return {
    data: data,
    isLoading,
    error,
  };
};

export const useSelectableDustTokens = () => {
  const { inputTokens } = useGetAllowedInputTokens();
  const toTokenToConvert = useAppSelector(selectToTokenDust);
  console.log("inputTokens", inputTokens);

  const { userTokens, isLoading } = useGetUserTokens();

  const finalTokens = userTokens.filter((userToken) => {
    if (
      inputTokens.includes(userToken.identifier) &&
      userToken.identifier !== "EGLD" &&
      // (formatBalanceDolar(userToken, userToken.price) as number) >
      //   limitDollarAmount &&
      userToken.identifier !== toTokenToConvert
    ) {
      return true;
    } else {
      return false;
    }
  });

  return {
    finalTokens,
    isLoading,
  };
};
