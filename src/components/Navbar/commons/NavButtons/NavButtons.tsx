import { Box, Flex } from "@chakra-ui/react";
import { useGetLoginInfo } from "@elrondnetwork/dapp-core/hooks/account";
import { logout } from "@elrondnetwork/dapp-core/utils";
import ActionButton from "components/ActionButton/ActionButton";
import { EgldIcon } from "components/icons/coin-icons";
import { DotIcon, ZapIcon } from "components/icons/ui-icons";
import { useAppDispatch } from "hooks/useRedux";
import { openLogin } from "redux/dapp/dapp-slice";
import MoreOptions from "./commons/MoreOptions/MoreOptions";
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
        h={{ xs: "36px", md: "46px" }}
        px={{ xs: "8px", md: "42px" }}
      >
        <Flex
          gap={{ xs: "5px", md: "10px" }}
          alignItems={"center"}
          fontSize={{ xs: "xs", "2xl": "md" }}
        >
          <EgldIcon fontSize={{ xs: "15px", "2xl": "24px" }} />{" "}
          <DotIcon fontSize={"5px"} color="green2" /> MultiversX
        </Flex>
      </ActionButton>

      <Box display={{ xs: "none", lsm: "block" }}>
        {isLoggedIn ? (
          <ActionButton
            fontSize={{ xs: "xs", "2xl": "lsm" }}
            h={{ xs: "36px", md: "46px" }}
            px={{ xs: "8px", md: "42px" }}
            onClick={handleDisconnect}
          >
            {" "}
            <Flex gap={{ xs: "6px", md: "10px" }} alignItems={"center"}>
              Disconnect <ZapIcon fontSize={"20px"} />
            </Flex>{" "}
          </ActionButton>
        ) : (
          <ActionButton
            fontSize={{ xs: "xs", "2xl": "lsm" }}
            h={{ xs: "36px", md: "46px" }}
            px={{ xs: "8px", md: "42px" }}
            onClick={handleConnect}
          >
            {" "}
            <Flex gap={{ xs: "6px", md: "10px" }} alignItems={"center"}>
              Connect <ZapIcon fontSize={"20px"} />
            </Flex>{" "}
          </ActionButton>
        )}
      </Box>
      <MoreOptions />
    </Flex>
  );
};

export default NavButtons;
