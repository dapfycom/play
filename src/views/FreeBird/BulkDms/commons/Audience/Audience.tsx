import {
  Flex,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { audienceList } from "../../utils/constants";

const Audience = () => {
  return (
    <Flex flexDir={"column"}>
      <Heading as="h3" fontSize={"md"} mb={2}>
        Audience
      </Heading>
      <Text color="blackT.500" fontSize={"10px"} mb={3}>
        Define your target users
      </Text>
      <RadioGroup defaultValue={"0"} mb={10}>
        <Stack ml={3} spacing={3}>
          {audienceList.map((audience, i) => {
            return (
              <Radio key={i} size="lg" value={audience.id}>
                <Text fontSize={"12px"}> {audience.title}</Text>
              </Radio>
            );
          })}
        </Stack>
      </RadioGroup>
    </Flex>
  );
};

export default Audience;
