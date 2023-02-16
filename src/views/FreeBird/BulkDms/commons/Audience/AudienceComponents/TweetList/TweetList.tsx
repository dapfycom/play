import { Flex, FormControl, FormLabel } from "@chakra-ui/react";
import ActionButton from "components/ActionButton/ActionButton";
import InputField from "views/FreeBird/commons/InputField";

const TweetList = () => {
  return (
    <Flex flexDir={"column"} gap={4}>
      <FormControl>
        <FormLabel htmlFor="user" fontSize={"sm"}>
          Twitter List Link
        </FormLabel>
        <InputField id="user" placeholder="Paste here..." />
      </FormControl>

      <ActionButton maxW="150px" fontSize={"xs"}>
        Get members
      </ActionButton>
    </Flex>
  );
};

export default TweetList;
