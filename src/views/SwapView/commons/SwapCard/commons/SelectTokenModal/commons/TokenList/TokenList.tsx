import { Flex, Text } from "@chakra-ui/react";
import { EgldIcon } from "components/icons/coin-icons";

const TokenList = () => {
  return (
    <Flex flexDir={"column"} gap="20px" px={"50px"}>
      <TokenRow />
      <TokenRow />
      <TokenRow />
      <TokenRow />
      <TokenRow />
    </Flex>
  );
};

export default TokenList;

const TokenRow = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems="center">
      <Flex gap="15px" alignItems={"center"}>
        <EgldIcon fontSize={"43px"} />
        <Text color="white" fontSize={"lsm"}>
          EGLD
        </Text>
      </Flex>
      <Text>0.234121</Text>
    </Flex>
  );
};
