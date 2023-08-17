import { Button, Flex, Text } from "@chakra-ui/react";
import { useTrackTransactionStatus } from "@multiversx/sdk-dapp/hooks";
import ActionButton from "components/ActionButton/ActionButton";
import useGetElrondToken from "hooks/useGetElrondToken";
import { useAppDispatch, useAppSelector } from "hooks/useRedux";
import React, { useState } from "react";
import { flipCoin } from "views/CoinFlipView/lib/calls";
import {
  changeUserCoinSide,
  selectCoinFlipBetAmount,
  selectCoinFlipSide,
  selectCoinFlipTokenStr,
} from "views/CoinFlipView/lib/con-flip-slice";
import ResultModal from "../../ResultModal/ResultModal";

const GameActions = () => {
  const dispatch = useAppDispatch();
  const selectedSide = useAppSelector(selectCoinFlipSide);
  const tokenStr = useAppSelector(selectCoinFlipTokenStr);
  const betAmount = useAppSelector(selectCoinFlipBetAmount);
  const [txData, setTxData] = useState("");
  const [sessionId, setSessionId] = React.useState("");
  const { elrondToken } = useGetElrondToken(tokenStr);

  const onSuccess = () => {
    setTxData(transactions.length > 0 ? transactions[0]?.hash || "" : "");
  };

  const { transactions } = useTrackTransactionStatus({
    transactionId: sessionId,
    onSuccess,

    onFail: (transactionId: string, errorMessage?: string) => {
      console.log("transactionId", transactionId);
      console.log("errorMessage", errorMessage);
    },
  });

  const handleFilp = async () => {
    if (betAmount) {
      const res = await flipCoin(selectedSide, elrondToken, betAmount);
      setSessionId(res?.sessionId);
      console.log("res", res);
    }
  };
  const handleChangeCoinSide = () => {
    dispatch(changeUserCoinSide(!selectedSide));
  };

  const handleClose = () => {
    setTxData("");
  };

  const txSuccess = Boolean(txData);
  return (
    <>
      {" "}
      <ResultModal isOpen={txSuccess} onClose={handleClose} txHash={txData} />
      <Flex
        flexDir={"column"}
        bg="dark.600"
        border={"1px"}
        borderColor="dark.300"
        w="full"
        borderRadius={"lg"}
        px="20px"
        py="35px"
        gap="22px"
        flex={1}
      >
        <Flex alignItems={"flex-start"} gap={"15px"} fontSize="sm">
          <Text color="white">2.</Text>
          <Flex flexDir={"column"} flex={1}>
            <Text mb={"12px"} color="white">
              Select side of coin
            </Text>
            <Flex w="full" gap={3}>
              <Button
                variant={selectedSide ? "solid" : "outline"}
                flex={1}
                fontSize="xs"
                onClick={handleChangeCoinSide}
              >
                Heads
              </Button>
              <Button
                variant={selectedSide ? "outline" : "solid"}
                flex={1}
                fontSize="xs"
                onClick={handleChangeCoinSide}
              >
                Tail
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex gap="15px" fontSize="sm">
          <Text color="white">3.</Text>
          <ActionButton fontSize={"xs"} flex={1} onClick={handleFilp}>
            Place bet and flip coin{" "}
          </ActionButton>
        </Flex>
      </Flex>
    </>
  );
};

export default GameActions;
