import { Flex, Text } from "@chakra-ui/react";
import Card from "components/Card/Card";
import useGetElrondToken from "hooks/useGetElrondToken";
import { useAppSelector } from "hooks/useRedux";
import { formatBalance, formatNumber } from "utils/functions/formatBalance";
import { formatTokenI } from "utils/functions/tokens";
import { selectCoinFlipTokenStr } from "views/CoinFlipView/lib/con-flip-slice";
import {
  useGetTotalAllTimeBets,
  useGetVolume,
} from "views/CoinFlipView/lib/hooks";

const StatsSection = () => {
  const { allTimeBetsCount } = useGetTotalAllTimeBets();
  const { volume } = useGetVolume();
  const tokenI = useAppSelector(selectCoinFlipTokenStr);
  const { elrondToken } = useGetElrondToken(tokenI);
  return (
    <Flex flexDir={"column"} w="full" justifyContent="space-between" gap="20px">
      <Card p="30px">
        <Text fontSize={"xs"} color="primary" mb="20px">
          Total BSK Bets
        </Text>
        <Text color="white">{formatNumber(allTimeBetsCount)}</Text>
      </Card>
      <Card p="30px">
        <Text fontSize={"xs"} color="primary" mb="20px">
          All Time BSK Volume
        </Text>
        <Text color="white">
          {" "}
          {formatBalance({
            balance: volume,
            decimals: elrondToken?.decimals,
          })}{" "}
          {formatTokenI(tokenI)}
        </Text>
      </Card>

      {/* <Card px="30px" py={"20px"} textAlign="center" justifyContent="center">
        <Text color="white" mb="20px">
          Winnings
        </Text>
        <Text mb="38px" fontSize={"sm"}>
          Claim your winnings here, toggle the tokens to clain your rewards
        </Text>
        <Text color="white" mb="39px" fontSize={"xl"} fontWeight="bold">
          {formatBalance({
            balance: volume,
            decimals: elrondToken.decimals,
          })}{" "}
          {formatTokenI(tokenI)}
        </Text>
        <ActionButton py="15px" h="auto">
          Claim
        </ActionButton>
      </Card> */}
    </Flex>
  );
};

export default StatsSection;
