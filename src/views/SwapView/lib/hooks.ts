import useGetMaiarPairs from "hooks/useGetMaiarPairs";
import { useAppDispatch, useAppSelector } from "hooks/useRedux";
import { useEffect } from "react";
import useSWR from "swr";
import { IElrondToken } from "types/elrond.interface";
import { smartSwapRoutes } from "./functions";
import {
  onChangeToField,
  selectFromFieldSelectedToken,
  selectFromFieldValue,
  selectToFieldSelectedToken,
} from "./swap-slice";
export const useGetSwapRate = () => {
  const token1 = useAppSelector(selectFromFieldSelectedToken);
  const token2 = useAppSelector(selectToFieldSelectedToken);
  const token1Value = useAppSelector(selectFromFieldValue);
  const dispatch = useAppDispatch();
  const { pairs } = useGetMaiarPairs();
  const { data, isLoading, error } = useSWR(
    token1 && token2 && token1Value
      ? [token1, token2, token1Value, pairs]
      : null,
    smartSwapRoutes
  );

  useEffect(() => {
    if (data) {
      // console.log("data", data);
      dispatch(onChangeToField(data[data.length - 1].token2Amount.toString()));
    }
  }, [data, dispatch]);

  return {
    data,
    isLoading,
    error,
  };
};

export const useSearchToken = (tokens: IElrondToken[], searchKey: string) => {
  let filteredTokens: IElrondToken[] = [];

  if (searchKey === "") {
    filteredTokens = tokens;
  } else {
    filteredTokens = tokens.filter((token) => {
      return (
        token.ticker
          .toString()
          .toLowerCase()
          .indexOf(searchKey.toLowerCase()) > -1
      );
    });
  }
  return filteredTokens;
};
