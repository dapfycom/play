import { useGetAllBets } from "views/CoinFlipView/lib/hooks";
import BetsTable from "../Table/Table";

const AllBets = () => {
  const { bets, error } = useGetAllBets(50);

  return <BetsTable data={bets} />;
};

export default AllBets;
