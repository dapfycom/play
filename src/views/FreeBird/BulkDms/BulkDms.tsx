import { Flex, Heading, Text } from "@chakra-ui/react";
import Audience from "./commons/Audience/Audience";

const BulkDms = () => {
  return (
    <Flex flexDir={"column"} w="full" px={{ xs: 4, md: 10 }}>
      <Heading fontSize={"lg"} fontWeight="700" mb={2}>
        Create campaign
      </Heading>
      <Text fontSize={"xs"} color="blackT.500" mb={8}>
        Send multiple customized direct messages at once
      </Text>
      <Audience />
    </Flex>
  );
};

export default BulkDms;
