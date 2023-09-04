import { Box, Flex } from "@chakra-ui/react";
import { useGetLoginInfo } from "@multiversx/sdk-dapp/hooks/account";
import { logout } from "@multiversx/sdk-dapp/utils";
import ActionButton from "components/ActionButton/ActionButton";
import { EgldIcon } from "components/icons/coin-icons";
import { DotIcon, ZapIcon } from "components/icons/ui-icons";
import { routeNames } from "config/routes";
import { useAppDispatch } from "hooks/useRedux";
import { Link } from "react-router-dom";
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
        h={{ xs: "36px", md: "46px" }}
        px={{ xs: "8px", md: "20px" }}
      >
        <Flex gap={{ xs: "5px", md: "10px" }} alignItems={"center"}>
          <EgldIcon fontSize={{ xs: "30px", "2xl": "35px" }} />{" "}
          <DotIcon fontSize={"5px"} color="green2" /> MultiversX
        </Flex>
      </ActionButton>

      <Box display={{ xs: "none", lsm: "block" }}>
        {isLoggedIn ? (
          <ActionButton
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
      <Link to={routeNames.dust}>
        <ActionButton
          variant={"secondary"}
          h={{ xs: "40px", md: "46px" }}
          aria-label="Dust"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          fontSize={"20px"}
        >
          💨
        </ActionButton>
      </Link>
      {/* <MoreOptions /> */}
    </Flex>
  );
};

export default NavButtons;
