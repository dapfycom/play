import {
  Box,
  Center,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import beskarImg from "assets/images/coins/egld.svg";
import FarmInfo from "./common/FarmInfo/FarmInfo";
import FarmMainButtons from "./common/FarmMainButtons/FarmMainButtons";
import StakedInfo from "./common/StakedInfo/StakedInfo";
const FarmComponent = () => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  return (
    <Center my={20}>
      <Box maxW="1300px" w="full" borderRadius="md" overflow={"hidden"}>
        <Flex
          gap={10}
          w="full"
          bg="dark.500"
          px={7}
          py={5}
          onClick={onToggle}
          cursor="pointer"
          flexWrap={"wrap"}
          flexDir={{ xs: "column", lg: "row" }}
        >
          <Flex gap={3} flex={1}>
            <Image src={beskarImg} w="35px" />
            <Flex flexDir={"column"}>
              <Text color="white" mb={2} fontSize="lsm" whiteSpace={"nowrap"}>
                EGLD-BESKAR
              </Text>
              <Text fontSize={"sm"}>$38,008,931</Text>
            </Flex>
          </Flex>
          <FarmInfo />
          <FarmMainButtons isOpen={isOpen} />
        </Flex>
        {isOpen && <StakedInfo />}
      </Box>
    </Center>
  );
};

export default FarmComponent;
