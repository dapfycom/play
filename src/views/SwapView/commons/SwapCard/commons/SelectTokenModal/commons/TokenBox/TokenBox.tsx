import { Center, Text } from "@chakra-ui/react";
import { EgldIcon } from "components/icons/coin-icons";

const TokenBox = () => {
  return (
    <Center
      px="15px"
      py="10px"
      gap="10px"
      border={"1px"}
      borderColor="whiteT.200"
      borderRadius={"md"}
      cursor="pointer"
    >
      <EgldIcon />{" "}
      <Text fontSize={"lsm"} fontWeight={500}>
        EGLD
      </Text>
    </Center>
  );
};

export default TokenBox;
