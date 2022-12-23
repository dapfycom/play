import { Center, Heading, Text } from "@chakra-ui/react";
import ActionButton from "components/ActionButton/ActionButton";
import { ChainIcon, RightArrowLargeIcon } from "components/icons/ui-icons";

interface IProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PlayCard = ({
  icon = <ChainIcon mb="33px" fontSize={"58px"} />,
  description = "Utmost security and provably fair on chain games.",
  title = "On chain",
}: IProps) => {
  return (
    <Center
      bg="dark.600"
      borderRadius={"lg"}
      border="1px"
      borderColor={"dark.300"}
      px="35px"
      py="56px"
      maxW={"643px"}
      flexDir="column"
    >
      {icon}
      <Heading as="h2" color="white" mb="30px">
        {title}
      </Heading>
      <Text mb="30px" fontSize={"sm"} textAlign="center">
        {description}
      </Text>
      <ActionButton color="secondary" fontSize={"lsm"}>
        Play on chain <RightArrowLargeIcon ml="13px" fontSize={"xl"} />
      </ActionButton>
    </Center>
  );
};

export default PlayCard;
