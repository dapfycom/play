import { VStack } from "@chakra-ui/react";
import Coin from "./common/Coin";
import GameActions from "./common/GameActions";
const GameSection = () => {
  return (
    <VStack gap={7} w="full">
      <Coin />
      <GameActions />
    </VStack>
  );
};

export default GameSection;
