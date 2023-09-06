import { CloseIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";

interface IProps {
  close: () => void;
}
const FishingWarn = ({ close }: IProps) => {
  return (
    <Flex
      w="full"
      justifyContent={"center"}
      py={2}
      bg="linear-gradient(180deg, #100638 0%, #190c2c 51%)"
      px={6}
      position={"relative"}
      display={{ xs: "none", md: "flex" }}
    >
      <Box
        bg="rgba(0,0,0,0.5)"
        px="5"
        py={"2"}
        rounded={"lg"}
        w="full"
        maxW={"900px"}
      >
        <Text textAlign={"center"} fontSize={"lsm"}>
          <Box as="span" color="multiversx">
            PHISHING WARNING:
          </Box>{" "}
          please make sure you are visiting{" "}
          <Box as="span" color="white">
            {process.env.REACT_APP_HOST}{" "}
          </Box>
          - check the URL carefully
        </Text>
      </Box>
      <IconButton
        aria-label="close"
        variant={"ghost"}
        position={"absolute"}
        right={"20px"}
        top="50%"
        transform={"translateY(-50%)"}
        onClick={close}
      >
        <CloseIcon />
      </IconButton>
    </Flex>
  );
};

export default FishingWarn;
