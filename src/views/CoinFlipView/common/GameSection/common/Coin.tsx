import { Center, Image } from "@chakra-ui/react";
import CoinImg from "views/CoinFlipView/assets/coin.png";
const Coin = () => {
  return (
    <Center
      p="35px"
      bg="dark.600"
      border="1px"
      borderColor="dark.300"
      borderRadius={"lg"}
      w="full"
    >
      <Image src={CoinImg} w="265px" h="265px" />
    </Center>
  );
};

export default Coin;
