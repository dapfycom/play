import { useAppDispatch } from "hooks/useRedux";
import { useEffect } from "react";
import { fetchSwapRate } from "services/rest/elrond/maiar";
import useSWR from "swr";
import { setRate } from "./swap-slice";
export const useGetSwapRate = (baseId: string, quoteId: string) => {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useSWR([baseId, quoteId], fetchSwapRate);
  const rate = data ? data?.quotePrice / data?.basePrice : 1;

  useEffect(() => {
    if (rate && !isLoading && !error) {
      dispatch(setRate(rate));
    }
  }, [dispatch, error, isLoading, rate]);

  return {
    rate,
    isLoading,
    error,
  };
};
