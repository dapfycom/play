import { Flex, useDisclosure } from "@chakra-ui/react";
import ActionButton from "components/ActionButton/ActionButton";
import HarvestModal from "../Modals/WithdrawModal";
import StakedDetails from "./StakedDetails/StakedDetails";

const StakedInfo = () => {
  const {
    isOpen: isOpenHarvest,
    onClose: onCloseHarvest,
    onOpen: onOpenHarvest,
  } = useDisclosure();
  const handleHarvest = (e) => {
    e.stopPropagation();
    onOpenHarvest();
  };
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
          bg="dark.100"
          fontSize={"xs"}
          w={{ xs: "full", tablet: "auto" }}
          onClick={handleHarvest}
        >
          {" "}
          withdraw
        </ActionButton>
      </Flex>

      {isOpenHarvest && (
        <HarvestModal isOpen={isOpenHarvest} onClose={onCloseHarvest} />
      )}
    </Flex>
  );
};

export default StakedInfo;
