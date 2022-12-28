import { IElrondAccountToken } from "types/elrond.interface";
import axiosElrond from ".";

export const fetchAccountTokenById = async ([identifier, address]: [
  string,
  string
]): Promise<IElrondAccountToken> => {
  const res = await axiosElrond.get<IElrondAccountToken>(
    `/accounts/${address}/tokens/${identifier}`
  );
  return res.data;
};
