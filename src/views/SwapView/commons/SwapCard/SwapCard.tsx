import { Box, Flex, Heading } from "@chakra-ui/react";
import { ArrowDownIcon } from "components/icons/ui-icons";
import InputBox from "./commons/InputBox";
import Settings from "./commons/Settings";
import SubmitButton from "./commons/SubmitButton";
const SwapCard = () => {
  return (
    <Box
      borderRadius={"2xl"}
      bg="dark.500"
      maxW={"913px"}
      w="full"
      px="50px"
      py="60px"
      border="1px"
      borderColor={"primary"}
    >
      <Flex w="full" justifyContent="space-between" mb="30px">
        <Heading
          as="h2"
          // fontFamily={"Inter Variable"}
          fontSize="3xl"
          fontWeight={700}
          color="white"
        >
          Swap
        </Heading>
        <Settings />
      </Flex>
      <Flex position={"relative"} flexDir="column" gap="10px" mb="30px">
        <Box
          position={"absolute"}
          top="43%"
          left="45%"
          borderRadius={"full"}
          bg="dark.500"
          p="7px"
          cursor={"pointer"}
        >
          <Box borderRadius={"full"} bg="dark.400" p="12px">
            <ArrowDownIcon fontSize={"22px"} />
          </Box>
        </Box>
        <InputBox />
        <InputBox />
      </Flex>
      <SubmitButton />
    </Box>
  );
};

export default SwapCard;
