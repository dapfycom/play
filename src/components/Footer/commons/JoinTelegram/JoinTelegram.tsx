import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Center } from "@chakra-ui/react";
import starsImage from "assets/images/banners/stars.png";
import ActionButton from "components/ActionButton/ActionButton";
const JoinTelegram = () => {
  return (
    <Center
      bg={`url(${starsImage})`}
      backgroundPosition="center"
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      borderRadius="lg"
      border={"1px"}
      borderColor="dark.300"
      w="full"
      h="full"
      px={2}
    >
      <ActionButton
        borderRadius={"full"}
        py="30px"
        h="auto"
        w="full"
        maxW={"520px"}
        fontSize={"lg"}
      >
        Join Telegram group <ArrowForwardIcon ml="21px" fontSize={"25px"} />
      </ActionButton>
    </Center>
  );
};

export default JoinTelegram;
