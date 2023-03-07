import { Text } from "@chakra-ui/react";
import { useTrackTransactionStatus } from "@multiversx/sdk-dapp/hooks";
import { useGetLoginInfo } from "@multiversx/sdk-dapp/hooks/account/useGetLoginInfo";
import ActionButton from "components/ActionButton/ActionButton";
import Realistic from "components/Conffeti/Realistic";
import useGetElrondToken from "hooks/useGetElrondToken";
import { useAppDispatch, useAppSelector } from "hooks/useRedux";
import React from "react";
import { openLogin } from "redux/dapp/dapp-slice";
import { lpSwap } from "views/SwapView/lib/calls";
import { useSwapLpRate } from "views/SwapView/lib/hooks";
import {
  selectFromField,
  selectSlippage,
} from "views/SwapView/lib/swapLp-slice";
const SubmitButton = () => {
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useGetLoginInfo();
  const fromField = useAppSelector(selectFromField);
  // const toField = useAppSelector(selectToField);
  const slippage = useAppSelector(selectSlippage);
  const { data: swapRoutes } = useSwapLpRate();
  const [sessionId, setSessionId] = React.useState("");
  const [txSuccess, setTxSuccess] = React.useState(false);

  const { elrondToken: fromElrondToken } = useGetElrondToken(
    fromField.selectedToken
  );
  const onSuccess = React.useCallback(() => {
    setTxSuccess(true);
  }, []);

  useTrackTransactionStatus({
    transactionId: sessionId,
    onSuccess,

    onFail: (transactionId: string, errorMessage?: string) => {
      console.log("transactionId", transactionId);
      console.log("errorMessage", errorMessage);
    },
  });

  const handleSwap = async () => {
    if (!isLoggedIn) {
      dispatch(openLogin(true));
    } else {
      setTxSuccess(false);

      const res = await lpSwap(
        swapRoutes,
        fromField,
        slippage,
        fromElrondToken
      );
      console.log("res", res);

      setSessionId(res.sessionId);
    }
  };

  let buttonText = isLoggedIn
    ? fromField.value !== ""
      ? "confirm"
      : "Enter an amount"
    : "Connect wallet";

  console.log("txSuccess", txSuccess);

  return (
    <>
      {txSuccess && <Realistic />}
      <ActionButton
        width={"full"}
        h="auto"
        py={"29px"}
        bgColor="rgba(216, 185,25, 0.3)"
        _disabled={{
          "& p": {
            color: "dark.100 !important",
          },
          bg: "dark.400",
        }}
        onClick={handleSwap}
      >
        <Text color="primary" opacity={1} fontSize={"md"}>
          {buttonText}
        </Text>
      </ActionButton>
    </>
  );
};

export default SubmitButton;
