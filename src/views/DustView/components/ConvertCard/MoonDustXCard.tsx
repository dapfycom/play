import { Flex, Image } from "@chakra-ui/react";
import ActionButton from "components/ActionButton/ActionButton";

import useGetMultipleElrondTokens from "hooks/useGetMultipleElrondTokens";
import { useAppDispatch, useAppSelector } from "hooks/useRedux";
import { formatTokenI } from "utils/functions/tokens";
import {
  selectToToken,
  selectToTokenDust,
} from "views/DustView/lib/dust-slice";
import { useGetAllowedOutputTokens } from "views/DustView/lib/hooks";
import ConvertButton from "./ConvertButton/ConvertButton";
import ConvertInfo from "./ConvertInfo/ConvertInfo";
import SelectAllTokens from "./SelectAllTokens/SelectAllTokens";
import SelectTokens from "./SelectTokens/SelectTokens";

const MoonDustXCard = () => {
  const dispatch = useAppDispatch();
  const selectedToToken = useAppSelector(selectToTokenDust);
  const { outputTokens: toTokensToConvert } = useGetAllowedOutputTokens();
  const { tokens } = useGetMultipleElrondTokens(toTokensToConvert);
  return (
    <Flex
      flexDir={"column"}
      bg="dark.500"
      py={10}
      px={{ xs: 3, md: 7 }}
      borderRadius={{ xs: "xl", md: "4xl" }}
    >
      <Flex
        w="full"
        justifyContent={"flex-end"}
        mb={4}
        gap={4}
        flexWrap={"wrap"}
      >
        {toTokensToConvert.map((tokenI) => {
          const elrondToken = tokens?.find((t) => t.identifier === tokenI);
          return (
            <ActionButton
              key={tokenI}
              variant={selectedToToken === tokenI ? "solid" : "outline"}
              onClick={() => dispatch(selectToToken(tokenI))}
              fontSize={"14px"}
            >
              <Flex alignItems={"center"} gap={3}>
                {elrondToken?.assets?.svgUrl && (
                  <Image
                    src={elrondToken.assets.svgUrl}
                    alt=""
                    width={26}
                    height={26}
                  />
                )}
                {formatTokenI(tokenI)}
              </Flex>
            </ActionButton>
          );
        })}
      </Flex>
      <SelectTokens />
      <Flex w="full" mt={4}>
        <SelectAllTokens />
      </Flex>
      <ConvertInfo />
      <ConvertButton />
    </Flex>
  );
};

export default MoonDustXCard;
