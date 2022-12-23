import { Center, Progress, Text } from "@chakra-ui/react";

const LoadingPage = () => {
  return (
    <Center w="full" flexDir={"column"} minH="100vh">
      <Text mb={3}>Loading</Text>
      <Progress
        size="xs"
        isIndeterminate
        background={"transparent"}
        width="60%"
      />
    </Center>
  );
};

export default LoadingPage;
