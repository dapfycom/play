import { Flex } from "@chakra-ui/react";
import CreateGiveaway from "./commons/CreateGiveaway/CreateGiveaway";

const Giveaways = () => {
  return (
    <Flex flexDir={"column"} w="full" px={{ xs: 4, md: 10 }} mb={20}>
      <CreateGiveaway />
    </Flex>
  );
};

export default Giveaways;
