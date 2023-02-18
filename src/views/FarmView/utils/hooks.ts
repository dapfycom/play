import { useAppSelector } from "hooks/useRedux";
import { selectUserAddress } from "redux/dapp/dapp-slice";
import useSwr from "swr";
import { fetchFarmInfo, fetchUserFarmInfo } from "./services";
export const useGetFarmUserInfo = () => {
  const address = useAppSelector(selectUserAddress);
  const { data, isLoading, error } = useSwr(
    ["bskFarmWsp:viewUserTokenData", address],
    fetchUserFarmInfo
  );

  return {
    data: data,
    isLoading,
    error,
  };
};
export const useGetFarmsInfo = () => {
  const { data, isLoading, error } = useSwr(
    "bskFarmWsp:viewAppTokenData",
    fetchFarmInfo
  );

  return {
    data: data,
    isLoading,
    error,
  };
};
