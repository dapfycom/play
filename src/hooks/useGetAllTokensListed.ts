import { fetchElrondData } from "services/rest/elrond";
import useSwr from "swr";
export const useGetAllMaiarListedTokens = () => {
  const { data, error, isLoading } = useSwr<{ id: string }[]>(
    "/mex/tokens?size=1000&fields=id",
    fetchElrondData
  );
  return {
    maiarTokens: data?.map((t) => t.id) || [],
    error,
    isLoading,
  };
};
