import { Center, Flex, Spinner, Text } from "@chakra-ui/react";
import Card from "components/Card/Card";
import useGetElrondToken from "hooks/useGetElrondToken";
import { useAppSelector } from "hooks/useRedux";
import {
  formatBalance,
  formatBalanceDolar,
} from "utils/functions/formatBalance";
import { formatTokenI } from "utils/functions/tokens";
import {
  selectConvertInfo,
  selectToTokenDust,
} from "views/DustView/lib/dust-slice";
import { useGetAmountOut } from "views/DustView/lib/hooks";

const ConvertInfo = () => {
  const toTokenToConvert = useAppSelector(selectToTokenDust);
  const { elrondToken: token } = useGetElrondToken(toTokenToConvert);
  const selectedTokens = useAppSelector(selectConvertInfo);
  const { data: receiveData, isLoading } = useGetAmountOut(selectedTokens);

  return (
    <Card as={Flex} p={8} rounded="xl" w="full" flexDir={"column"} mt={8}>
      {isLoading ? (
        <Center minH={"60px"}>
          <Spinner />
        </Center>
      ) : (
        <Flex
          justifyContent={"space-between"}
          mb={4}
          fontSize={{ xs: "12px", md: "14px" }}
          flexDir={{ xs: "column", md: "row" }}
          textAlign={{ xs: "center", md: "initial" }}
        >
          <Text mb={5}>
            Minimum {formatTokenI(toTokenToConvert)} to receive
          </Text>
          <Flex
            flexDir={"column"}
            alignItems={{ xs: "center", md: "flex-end" }}
          >
            <Text fontWeight="600">
              {formatBalance({
                balance: receiveData?.amountOut,
                decimals: token?.decimals,
              })}{" "}
              {formatTokenI(toTokenToConvert)}
            </Text>
            <Text color={"GrayText"} fontSize="sm" fontWeight="600">
              ≈ $
              {formatBalanceDolar(
                {
                  balance: receiveData?.amountOut,
                  decimals: token?.decimals,
                },
                token?.ticker === "USDC" ? 1 : token?.price
              )}
            </Text>
          </Flex>
        </Flex>
      )}
    </Card>
  );
};

export default ConvertInfo;
