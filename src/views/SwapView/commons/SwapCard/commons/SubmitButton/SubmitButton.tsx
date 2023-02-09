import { Text } from "@chakra-ui/react";
import { useTrackTransactionStatus } from "@elrondnetwork/dapp-core/hooks";
import { useGetLoginInfo } from "@elrondnetwork/dapp-core/hooks/account/useGetLoginInfo";
import ActionButton from "components/ActionButton/ActionButton";
import useGetElrondToken from "hooks/useGetElrondToken";
import { useAppDispatch, useAppSelector } from "hooks/useRedux";
import React from "react";
import { openLogin } from "redux/dapp/dapp-slice";
import { submitSwap } from "views/SwapView/lib/calls";
import { useGetSwapRate } from "views/SwapView/lib/hooks";
import {
  selectFromField,
  selectSlippage,
  selectToField,
} from "views/SwapView/lib/swap-slice";
const SubmitButton = () => {
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useGetLoginInfo();
  const fromField = useAppSelector(selectFromField);
  const toField = useAppSelector(selectToField);
  const slippage = useAppSelector(selectSlippage);
  const { data: swapRoutes } = useGetSwapRate();
  const [sessionId, setSessionId] = React.useState("");
  const { elrondToken: fromElrondToken } = useGetElrondToken(
    fromField.selectedToken
  );
  const onSuccess = React.useCallback(() => {
    window.location.reload();
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
      const res = await submitSwap(
        swapRoutes,
        slippage,
        {
          token: fromField.selectedToken,
          value: Number(fromField.value),
        },
        {
          token: toField.selectedToken,
          value: Number(toField.value),
        },
        fromElrondToken
      );

      setSessionId(res.sessionId);
    }
  };

  let buttonText = isLoggedIn
    ? fromField.value !== ""
      ? "confirm"
      : "Enter an amount"
    : "Connect wallet";
  return (
    <ActionButton
      width={"full"}
      h="auto"
      py={{ xs: "29px", lg: "36px" }}
      bgColor="rgba(216, 185,25, 0.3)"
      _disabled={{
        "& p": {
          color: "dark.100 !important",
        },
        bg: "dark.400",
      }}
      onClick={handleSwap}
    >
      <Text color="primary" opacity={1} fontSize={{ xs: "lsm", lg: "26px" }}>
        {buttonText}
      </Text>
    </ActionButton>
  );
};

export default SubmitButton;
