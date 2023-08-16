import { useAppSelector } from "hooks/useRedux";
import { useSelector } from "react-redux";
import { selectUserAddress } from "redux/dapp/dapp-slice";
import useSwr from "swr";
import {
  fetchAllBets,
  fetchAllTimeBets,
  fetchUserBets,
  fetchUserBetsCount,
  fetchVolume,
} from "./services";
export const useGetTotalUserBets = () => {
  const userAddress = useAppSelector(selectUserAddress);
  const { data, isLoading, error } = useSwr(
    "flipWsp:getMyBetsCount:" + userAddress,
    () => fetchUserBetsCount(userAddress)
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
export const useGetAllBets = (size: number = 10) => {
  const { data, isLoading, error } = useSwr(`/fetchAllBets` + size, () =>
    fetchAllBets(size)
  );

  return {
    bets: data || [],
    isLoading,
    error,
  };
};
export const useGetUserBets = (size: number = 10) => {
  const address = useSelector(selectUserAddress);

  const { data, isLoading, error } = useSwr(
    `/fetchUserBets` + size + address,
    address ? () => fetchUserBets(address, size) : null
  );

  return {
    bets: data || [],
    isLoading,
    error,
  };
};
