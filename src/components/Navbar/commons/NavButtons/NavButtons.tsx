import { Flex } from "@chakra-ui/react";
import { useGetLoginInfo } from "@elrondnetwork/dapp-core/hooks/account";
import { logout } from "@elrondnetwork/dapp-core/utils";
import ActionButton from "components/ActionButton/ActionButton";
import { EgldIcon } from "components/icons/coin-icons";
import { DotIcon, ThreeDotsIcon, ZapIcon } from "components/icons/ui-icons";
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
    <Flex flex={1} justifyContent={"flex-end"} gap="20px" alignItems={"center"}>
      <ActionButton variant={"seconday"} fontSize="lg" h={"46px"}>
        <Flex gap="10px" alignItems={"center"}>
          <EgldIcon fontSize={"24px"} />{" "}
          <DotIcon fontSize={"5px"} color="green2" /> ELROND
        </Flex>
      </ActionButton>
      {isLoggedIn ? (
        <ActionButton
          fontSize={"lsm"}
          h={"46px"}
          px="42px"
          onClick={handleDisconnect}
        >
          {" "}
          <Flex gap="10px" alignItems={"center"}>
            Disconnect <ZapIcon fontSize={"20px"} />
          </Flex>{" "}
        </ActionButton>
      ) : (
        <ActionButton
          fontSize={"lsm"}
          h={"46px"}
          px="42px"
          onClick={handleConnect}
        >
          {" "}
          <Flex gap="10px" alignItems={"center"}>
            Connect <ZapIcon fontSize={"20px"} />
          </Flex>{" "}
        </ActionButton>
      )}
      <ActionButton variant={"seconday"} px="10px" h={"46px"}>
        <ThreeDotsIcon fontSize={"25px"} />
      </ActionButton>
    </Flex>
  );
};

export default NavButtons;
