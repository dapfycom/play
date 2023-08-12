import { useGetUserBets } from "views/CoinFlipView/lib/hooks";
import BetsTable from "../Table/Table";

const UserBets = () => {
  const { bets, error } = useGetUserBets(10, 0);

  return <BetsTable data={bets} />;
};

export default UserBets;
