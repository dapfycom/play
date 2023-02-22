import { Box, Heading } from "@chakra-ui/react";
import Statics from "./commons/Statics/Statics";

const Follow = () => {
  return (
    <Box px={8} w="full">
      <Heading mb={10} textAlign="center" color="gray.600" fontSize={"4xl"}>
        Connected with{" "}
        <Box as="span" color="gray.900">
          Cesar
        </Box>
      </Heading>
      <Statics />
    </Box>
  );
};

export default Follow;
