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
export const useGetAllBets = (
  elementsPerPage: number = 10,
  page: number = 0
) => {
  const { data, isLoading, error } = useSwr(
    "flipWsp:getAllPaginatedUserBets",
    () => fetchAllBets(elementsPerPage, page)
  );

  return {
    bets: data || [],
    isLoading,
    error,
  };
};
export const useGetUserBets = (
  elementsPerPage: number = 10,
  page: number = 0
) => {
  const address = useSelector(selectUserAddress);
  const { data, isLoading, error } = useSwr(
    "flipWsp:getPaginatedUserBetsByUser:" + address,
    () => fetchUserBets(elementsPerPage, page, address)
  );

  return {
    bets: data || [],
    isLoading,
    error,
  };
};
