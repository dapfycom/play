import { IElrondToken } from "types/elrond.interface";
import axiosElrond from ".";

export const fetchTokenById = async (
  identifier: string
): Promise<IElrondToken> => {
  const res = await axiosElrond.get<IElrondToken>(`/tokens/${identifier}`);
  return res.data;
};
