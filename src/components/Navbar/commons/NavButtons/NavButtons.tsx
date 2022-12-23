import { Flex } from "@chakra-ui/react";
import { useGetLoginInfo } from "@elrondnetwork/dapp-core/hooks/account";
import { logout } from "@elrondnetwork/dapp-core/utils";
import ActionButton from "components/ActionButton/ActionButton";
import { EgldIcon } from "components/icons/coin-icons";
import { DotIcon, ZapIcon } from "components/icons/ui-icons";
import { useAppDispatch } from "hooks/useRedux";
import { openLogin } from "redux/dapp/dapp-slice";
const NavButtons = () => {
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useGetLoginInfo();

  const handleConnect = () => {
    dispatch(openLogin(true));
  };
  const handleDisconnect = () => {
    logout();
  };

  return (
    <Flex
      flex={1}
      justifyContent={"flex-end"}
      gap={{ xs: "10px", md: "20px" }}
      alignItems={"center"}
    >
      <ActionButton
        variant={"secondary"}
        fontSize="lg"
        h={{ xs: "40px", md: "46px" }}
      >
        <Flex
          gap={{ xs: "5px", md: "10px" }}
          alignItems={"center"}
          fontSize={{ xs: "sm", "2xl": "md" }}
        >
          <EgldIcon fontSize={{ xs: "20px", "2xl": "24px" }} />{" "}
          <DotIcon fontSize={"5px"} color="green2" /> ELROND
        </Flex>
      </ActionButton>
      {isLoggedIn ? (
        <ActionButton
          fontSize={{ xs: "sm", "2xl": "lsm" }}
          h={{ xs: "40px", md: "46px" }}
          px={{ xs: "10px", md: "42px" }}
          onClick={handleDisconnect}
        >
          {" "}
          <Flex gap="10px" alignItems={"center"}>
            Disconnect <ZapIcon fontSize={"20px"} />
          </Flex>{" "}
        </ActionButton>
      ) : (
        <ActionButton
          fontSize={{ xs: "sm", "2xl": "lsm" }}
          h={{ xs: "40px", md: "46px" }}
          px={{ xs: "10px", md: "42px" }}
          onClick={handleConnect}
        >
          {" "}
          <Flex gap="10px" alignItems={"center"}>
            Connect <ZapIcon fontSize={"20px"} />
          </Flex>{" "}
        </ActionButton>
      )}
      {/* <MoreOptions /> */}
    </Flex>
  );
};

export default NavButtons;
