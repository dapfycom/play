import { Flex, Text } from "@chakra-ui/react";
import Card from "components/Card/Card";
import MyTabs2 from "components/MyTabs/MyTabs2";
import { useGetAllBets } from "views/CoinFlipView/lib/hooks";
import AllBets from "./AllBets/AllBets";
import UserBets from "./UserBets/UserBets";

const TableSection = () => {
  const { bets, error } = useGetAllBets(10, 0);

  console.log("error", error);
  console.log("bets", bets);

  return (
    <Card
      w="full"
      py="30px"
      px="0px"
      h={"592px"}
      overflowX={"auto"}
      position={"relative"}
    >
      <Flex
        justify={"space-between"}
        mb={5}
        flexDir={{ xs: "column", md: "row" }}
        gap={3}
        position={"absolute"}
        top={10}
        left={"30px"}
      >
        <Text
          fontSize={"sm"}
          color="white"
          display="flex"
          alignItems={"center"}
        >
          Last 100 games
        </Text>
      </Flex>
      <MyTabs2
        tabs={[
          {
            content: <AllBets />,
            label: "All Bets",
          },
          {
            content: <UserBets />,
            label: "Your Bets",
          },
        ]}
      />
    </Card>
  );
};

export default TableSection;
