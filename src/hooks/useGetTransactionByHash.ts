import { fetchTransactionByHash } from "services/rest/elrond/transactions";
import useSwr from "swr";
import { ITransacation } from "types/elrond.interface";
const useGetTransactionByHash = (hash: string) => {
  const { data, error, isLoading } = useSwr<ITransacation>(
    `/transactions/${hash}`,
    hash ? () => fetchTransactionByHash(hash) : null
  );

  return {
    transaction: data,
    error,
    isLoading,
  };
};

export default useGetTransactionByHash;
