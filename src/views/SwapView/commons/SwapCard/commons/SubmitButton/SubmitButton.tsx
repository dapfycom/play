import { Text } from "@chakra-ui/react";
import { useGetLoginInfo } from "@elrondnetwork/dapp-core/hooks/account/useGetLoginInfo";
import ActionButton from "components/ActionButton/ActionButton";
import useGetElrondToken from "hooks/useGetElrondToken";
import { useAppDispatch, useAppSelector } from "hooks/useRedux";
import { openLogin } from "redux/dapp/dapp-slice";
import { submitSwap } from "views/SwapView/lib/calls";
import { selectFromField } from "views/SwapView/lib/swap-slice";

const SubmitButton = () => {
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useGetLoginInfo();
  const fromField = useAppSelector(selectFromField);
  const { elrondToken } = useGetElrondToken(fromField.selectedToken);
  const handleSwap = () => {
    if (!isLoggedIn) {
      dispatch(openLogin(true));
    } else {
      if (elrondToken) {
        submitSwap(elrondToken, fromField.value);
      }
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
      py={{ xs: "29px", lg: "46px" }}
      bgColor="rgba(216, 185,25, 0.3)"
      _disabled={{
        "& p": {
          color: "dark.100 !important",
        },
        bg: "dark.400",
      }}
      onClick={handleSwap}
    >
      <Text color="primary" opacity={1} fontSize={{ xs: "lsm", lg: "30px" }}>
        {buttonText}
      </Text>
    </ActionButton>
  );
};

export default SubmitButton;
