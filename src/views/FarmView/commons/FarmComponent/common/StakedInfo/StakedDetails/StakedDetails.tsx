import { Flex, Image, Text } from "@chakra-ui/react";
import beskarImg from "assets/images/logo/beskar.svg";
const StakedDetails = () => {
  return (
    <Flex
      w="full"
      gap={7}
      justifyContent="space-between"
      flexDir={{ xs: "column", lg: "row" }}
    >
      <StakedDetail title="EGLDUSDCFL" value="< 0.01" dolarValue="≈ $15.29" />
      <StakedDetail title="BESKAR earned" value="7.6432" dolarValue="12.56" />
      <StakedDetail title="XMEX earned" value="519.7839" dolarValue="0" />
    </Flex>
  );
};

export default StakedDetails;

interface IStakedDetail {
  title: string;
  value: string;
  dolarValue: string;
}

const StakedDetail = ({ dolarValue, title, value }: IStakedDetail) => {
  return (
    <Flex gap={3}>
      <Image src={beskarImg} w="45px" />
      <Flex flexDir={"column"} gap={1}>
        <Text>{title}</Text>
        <Text fontSize={"lsm"} color="white">
          {value}
        </Text>
        <Text fontSize={"lsm"}>≈ ${dolarValue}</Text>
      </Flex>
    </Flex>
  );
};
