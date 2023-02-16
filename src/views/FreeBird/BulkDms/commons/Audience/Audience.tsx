import {
  Box,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { audienceList } from "../../utils/constants";

const Audience = () => {
  const [audienceId, setAudience] = useState("0");
  const handleChangeAudience = (e) => {
    setAudience(e.target.value);
  };
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
              <Radio
                key={i}
                size="lg"
                value={audience.id}
                onChange={handleChangeAudience}
              >
                <Text fontSize={"12px"}> {audience.title}</Text>
              </Radio>
            );
          })}
        </Stack>
      </RadioGroup>

      <Box mt={4}>
        {audienceList?.find((a) => a.id === audienceId)?.component}
      </Box>
    </Flex>
  );
};

export default Audience;
