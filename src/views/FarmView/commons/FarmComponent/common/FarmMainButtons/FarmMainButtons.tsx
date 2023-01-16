import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Center, Icon } from "@chakra-ui/react";
import ActionButton from "components/ActionButton/ActionButton";

interface IProps {
  isOpen: boolean;
}

const FarmMainButtons = ({ isOpen }: IProps) => {
  const handleHarvest = (e) => {
    e.stopPropagation();
  };

  const handleStakeLp = (e) => {
    e.stopPropagation();
  };
  return (
    <Center gap={4} flexDir={{ xs: "column", lg: "row" }}>
      <ActionButton
        fontSize={"xs"}
        onClick={handleHarvest}
        w={{ xs: "full", lg: "auto" }}
      >
        Harvest
      </ActionButton>
      <ActionButton
        bg={"dark.200"}
        fontSize={"xs"}
        onClick={handleStakeLp}
        w={{ xs: "full", lg: "auto" }}
      >
        Stake LP
      </ActionButton>

      <ActionButton
        bg="transparent"
        px={0}
        display={{ xs: "none", xl: "block" }}
      >
        <Icon
          as={isOpen ? ChevronUpIcon : ChevronDownIcon}
          fontSize={"x-large"}
        />
      </ActionButton>
    </Center>
  );
};

export default FarmMainButtons;
