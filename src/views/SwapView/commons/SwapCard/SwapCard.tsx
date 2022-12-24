import { Box, Center, Flex, Heading } from "@chakra-ui/react";
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
      px={{ xs: "30px", lg: "50px" }}
      py="60px"
      border="1px"
      borderColor={"primary"}
    >
      <Flex
        w="full"
        justifyContent="space-between"
        mb={{ xs: "20px", lg: "30px" }}
      >
        <Heading
          as="h2"
          fontSize={{ xs: "2xl", lg: "3xl" }}
          fontWeight={700}
          color="white"
        >
          Swap
        </Heading>
        <Settings />
      </Flex>
      <Flex
        position={"relative"}
        flexDir="column"
        gap={{ xs: "5px", lg: "10px" }}
        mb="30px"
      >
        <Box
          position={"absolute"}
          top={{ xs: "44%", lg: "43%" }}
          left={{ xs: "44%", lg: "45%" }}
          borderRadius={"full"}
          bg="dark.500"
          p={{ xs: "3px", lg: "7px" }}
          cursor={"pointer"}
        >
          <Center
            borderRadius={"full"}
            bg="dark.400"
            boxSize={{ xs: "25px", lg: "45px" }}
          >
            <ArrowDownIcon fontSize={{ xs: "11px", lg: "22px" }} />
          </Center>
        </Box>
        <InputBox />
        <InputBox />
      </Flex>
      <SubmitButton />
    </Box>
  );
};

export default SwapCard;
