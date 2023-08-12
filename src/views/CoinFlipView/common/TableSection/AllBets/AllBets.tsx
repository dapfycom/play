import { useGetAllBets } from "views/CoinFlipView/lib/hooks";
import BetsTable from "../Table/Table";

const AllBets = () => {
  const { bets, error } = useGetAllBets(10, 0);

  console.log("bets", bets);

  return <BetsTable data={bets} />;
};

export default AllBets;
