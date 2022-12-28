import { fetchElrondEconomics } from "services/rest/elrond/network";
import { fetchTokenById } from "services/rest/elrond/tokens";
import useSWR from "swr";
import { egldStaticData } from "utils/constants/egldData";

const useGetElrondToken = (tokenI: string) => {
  const { data: elrondToken, isLoading: isLoadingElrondToken } = useSWR(
    tokenI === "EGLD" ? null : tokenI,
    fetchTokenById
  );

  const { data: economics, isLoading: isLoadingEconomics } = useSWR(
    tokenI === "EGLD" ? "/economics" : null,
    fetchElrondEconomics
  );

  let finalData;

  if (tokenI === "EGLD") {
    finalData = { ...egldStaticData, ...economics };
  } else {
    finalData = elrondToken;
  }

  return {
    elrondToken: finalData,
    isLoading: isLoadingEconomics || isLoadingElrondToken,
  };
};

export default useGetElrondToken;
