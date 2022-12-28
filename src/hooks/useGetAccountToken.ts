import { useSelector } from "react-redux";
import { selectUserAddress } from "redux/dapp/dapp-slice";
import { fetchAccountTokenById } from "services/rest/elrond/accounts";
import useSWR from "swr";
const useGetAccountToken = (identifier: string) => {
  const address = useSelector(selectUserAddress);
  const { data, error, isLoading } = useSWR(
    address !== "" ? [identifier, address] : null,
    fetchAccountTokenById
  );

  return {
    accountToken: data || {
      identifier,
      balance: "0",
      nonce: 0,
      decimals: 18,
    },
    error,
    isLoading,
  };
};

export default useGetAccountToken;
