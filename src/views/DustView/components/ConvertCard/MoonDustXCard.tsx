import { Flex } from "@chakra-ui/react";
import ActionButton from "components/ActionButton/ActionButton";

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
  console.log("toTokensToConvert", toTokensToConvert);

  return (
    <Flex
      flexDir={"column"}
      bg="dark.500"
      py={10}
      px={{ xs: 3, md: 7 }}
      borderRadius={{ xs: "xl", md: "4xl" }}
    >
      <Flex w="full" justifyContent={"flex-end"} mb={4} gap={4}>
        {toTokensToConvert.map((tokenI) => {
          return (
            <ActionButton
              key={tokenI}
              variant={selectedToToken === tokenI ? "solid" : "outline"}
              onClick={() => dispatch(selectToToken(tokenI))}
            >
              {formatTokenI(tokenI)}
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
