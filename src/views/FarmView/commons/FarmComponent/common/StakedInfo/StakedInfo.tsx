import { Flex } from "@chakra-ui/react";
import ActionButton from "components/ActionButton/ActionButton";
import { withdraw } from "views/FarmView/utils/services";
import StakedDetails from "./StakedDetails/StakedDetails";

const StakedInfo = () => {
  return (
    <Flex
      w="full"
      px={7}
      py={5}
      bg="dark.800"
      gap={10}
      flexDir={{ xs: "column", tablet: "row" }}
    >
      <Flex flex={1}>
        <StakedDetails />
      </Flex>
      <Flex h="full" alignItems={"center"} height="auto">
        <ActionButton
          bg="dark.200"
          fontSize={"xs"}
          w={{ xs: "full", tablet: "auto" }}
          onClick={withdraw}
        >
          {" "}
          wiithdraw
        </ActionButton>
      </Flex>
    </Flex>
  );
};

export default StakedInfo;
