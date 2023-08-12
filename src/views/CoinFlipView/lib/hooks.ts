import { useAppSelector } from "hooks/useRedux";
import { selectUserAddress } from "redux/dapp/dapp-slice";
import useSwr from "swr";
import {
  fetchAllBets,
  fetchAllTimeBets,
  fetchUserBets,
  fetchVolume,
} from "./services";
export const useGetTotalUserBets = () => {
  const userAddress = useAppSelector(selectUserAddress);
  const { data, isLoading, error } = useSwr("flipWsp:getMyBetsCount:", () =>
    fetchUserBets(userAddress)
  );

  return {
    toatlUserBetsCount: data || 0,
    isLoading,
    error,
  };
};
export const useGetTotalAllTimeBets = () => {
  const { data, isLoading, error } = useSwr(
    "flipWsp:getAllBetsCount:",
    fetchAllTimeBets
  );

  return {
    allTimeBetsCount: data || 0,
    isLoading,
    error,
  };
};
export const useGetVolume = () => {
  const { data, isLoading, error } = useSwr(
    "flipWsp:getTotalVolume",
    fetchVolume
  );

  return {
    volume: data || 0,
    isLoading,
    error,
  };
};
export const useGetAllBets = () => {
  const { data, isLoading, error } = useSwr(
    "flipWsp:getAllPaginatedUserBets",
    fetchAllBets
  );

  return {
    volume: data || 0,
    isLoading,
    error,
  };
};
