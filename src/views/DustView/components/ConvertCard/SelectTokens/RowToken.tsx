import { Box, Checkbox, Flex, Image, Text } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "hooks/useRedux";
import { IElrondAccountToken } from "types/elrond.interface";
import {
  formatBalance,
  formatBalanceDolar,
  formatNumber,
} from "utils/functions/formatBalance";
import { formatTokenI } from "utils/functions/tokens";
import {
  selectOutputToken,
  selectToTokenDust,
} from "views/DustView/lib/dust-slice";

interface IProps {
  token: IElrondAccountToken;
}
const RowToken = ({ token }: IProps) => {
  const dispatch = useAppDispatch();
  const selectedToToken = useAppSelector(selectToTokenDust);
  const data = null;

  const handleSelect = (isCheked: boolean) => {
    dispatch(
      selectOutputToken({
        data: token,
        isCheked: isCheked,
      })
    );
  };

  return (
    <Box>
      <Checkbox
        value={token.identifier}
        w="full"
        sx={{
          "& .chakra-checkbox__label": {
            w: "full",
          },
        }}
        _hover={{
          opacity: "0.6",
        }}
        onChange={(e) => handleSelect(e.target.checked)}
        disabled={data === undefined}
      >
        <Flex gap={3} alignItems="center" w="full">
          {token?.assets && (
            <Box rounded={"full"} boxSize={{ xs: "30px", md: "37px" }}>
              <Image alt="" src={token.assets.svgUrl} width={37} height={37} />
            </Box>
          )}
          <Flex flexDir={"column"} gap={1} flex={1}>
            <Flex fontSize={"14px"} fontWeight="600" gap={2}>
              <Text>{formatBalance(token)}</Text>
              <Text>{formatTokenI(token.identifier)}</Text>
            </Flex>
            <Flex fontSize={"sm"} color="GrayText">
              ≈ ${formatBalanceDolar(token, token.price)}
            </Flex>
          </Flex>
          <Flex>
            {data && (
              <Flex
                color="GrayText"
                columnGap={2}
                flexDir={{ xs: "column", md: "row" }}
                alignItems="flex-end"
                fontSize={{ xs: "sm", md: "md" }}
              >
                <Text>
                  ≈ {formatNumber((data[data.length - 1] as any).amountReceiv)}
                </Text>
                <Text>{formatTokenI(selectedToToken)}</Text>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Checkbox>
    </Box>
  );
};

export default RowToken;
