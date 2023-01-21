import { Flex, Text } from "@chakra-ui/react";
import ActionButton from "components/ActionButton/ActionButton";

const GameActions = () => {
  return (
    <Flex
      flexDir={"column"}
      bg="dark.600"
      border={"1px"}
      borderColor="dark.300"
      w="full"
      borderRadius={"lg"}
      px="20px"
      py="35px"
      gap="22px"
      flex={1}
    >
      <Flex alignItems={"flex-start"} gap={"15px"} fontSize="sm">
        <Text color="white">2.</Text>
        <Flex flexDir={"column"} flex={1}>
          <Text mb={"12px"} color="white">
            Select side of coin
          </Text>
          <Flex w="full" gap={3}>
            <ActionButton variant={"outline"} flex={1} fontSize="xs">
              Heads
            </ActionButton>
            <ActionButton variant={"outline"} flex={1} fontSize="xs">
              Tail
            </ActionButton>
          </Flex>
        </Flex>
      </Flex>
      <Flex gap="15px" fontSize="sm">
        <Text color="white">3.</Text>
        <ActionButton fontSize={"xs"} flex={1}>
          Place bet and flip coin{" "}
        </ActionButton>
      </Flex>
    </Flex>
  );
};

export default GameActions;
