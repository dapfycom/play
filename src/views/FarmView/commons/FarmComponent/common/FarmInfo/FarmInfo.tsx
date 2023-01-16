import { Flex, Text } from "@chakra-ui/react";

const FarmInfo = () => {
  return (
    <Flex gap={7} fontSize="lsm" flexDir={{ xs: "column", lg: "row" }}>
      <FarmDetail title="APR" value="26.99%" />
      <FarmDetail title="Staked LP" value="0.000035 = $45.23" />
      <FarmDetail title="Earned Beskar" value="12000030 = $32" />
    </Flex>
  );
};

export default FarmInfo;

interface FarmDetailProps {
  title: string;
  value: string;
}

const FarmDetail = ({ title, value }: FarmDetailProps) => {
  return (
    <Flex flexDir="column" flex={1}>
      <Text color="white" whiteSpace={"nowrap"} mb={2}>
        {title}
      </Text>
      <Text fontSize={"sm"} whiteSpace={"nowrap"}>
        {value}
      </Text>
    </Flex>
  );
};
