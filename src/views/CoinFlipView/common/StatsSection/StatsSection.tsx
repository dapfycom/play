import { Flex, Text } from "@chakra-ui/react";
import ActionButton from "components/ActionButton/ActionButton";
import Card from "components/Card/Card";

const StatsSection = () => {
  return (
    <Flex flexDir={"column"} w="full" justifyContent="space-between" gap="20px">
      <Card p="30px">
        <Text fontSize={"xs"} color="primary" mb="20px">
          Total BSK Bets
        </Text>
        <Text color="white">118,153</Text>
      </Card>
      <Card p="30px">
        <Text fontSize={"xs"} color="primary" mb="20px">
          All Time BSK Volume
        </Text>
        <Text color="white">19,228,289 BSK</Text>
      </Card>

      <Card px="30px" py={"20px"} textAlign="center" justifyContent="center">
        <Text color="white" mb="20px">
          Winnings
        </Text>
        <Text mb="38px" fontSize={"sm"}>
          Claim your winnings here, toggle the tokens to clain your rewards
        </Text>
        <Text color="white" mb="39px" fontSize={"xl"} fontWeight="bold">
          0.0 BSK
        </Text>
        <ActionButton py="15px" h="auto">
          Claim
        </ActionButton>
      </Card>
    </Flex>
  );
};

export default StatsSection;
