import { Text } from "@chakra-ui/react";
import { useGetLoginInfo } from "@elrondnetwork/dapp-core/hooks/account/useGetLoginInfo";
import ActionButton from "components/ActionButton/ActionButton";
import { useAppDispatch } from "hooks/useRedux";
import { openLogin } from "redux/dapp/dapp-slice";

const SubmitButton = () => {
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useGetLoginInfo();

  const handleSwap = () => {
    if (!isLoggedIn) {
      dispatch(openLogin(true));
    } else {
    }
  };

  let buttonText = isLoggedIn ? "Enter an amount" : "Connect wallet";
  return (
    <ActionButton
      width={"full"}
      h="auto"
      py="46px"
      bgColor="rgba(216, 185,25, 0.3)"
      _disabled={{
        "& p": {
          color: "dark.100 !important",
        },
        bg: "dark.400",
      }}
      onClick={handleSwap}
    >
      <Text color="primary" opacity={1} fontSize="30px">
        {buttonText}
      </Text>
    </ActionButton>
  );
};

export default SubmitButton;
