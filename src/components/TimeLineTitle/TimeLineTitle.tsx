import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProps {
  circleContent: ReactNode;
  title: string;
}
const TimeLineTitle = ({ circleContent, title }: IProps) => {
  return (
    <Flex gap={3} alignItems="center">
      <Box boxSize={"40px"}>
        <Center borderRadius={"full"} bg="dark.500" boxSize={"40px"}>
          {circleContent}
        </Center>
      </Box>
      <Heading as="h2" fontSize={"md"}>
        {title}
      </Heading>
    </Flex>
  );
};

export default TimeLineTitle;
