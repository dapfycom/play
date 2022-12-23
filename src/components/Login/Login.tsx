import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  BoxProps,
  Center,
  Flex,
  Heading,
  Link as ChakraLink,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import {
  LegerWalletIcon,
  MaiarAppIcon,
  MaiarDefiWalletIcon,
  WebWalletIcon,
} from "components/icons/ui-icons";

import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { openLogin } from "redux/dapp/dapp-slice";
import MyModal from "../Modal/Modal";

import { ExtensionLoginButton } from "@elrondnetwork/dapp-core/UI/extension/ExtensionLoginButton";
import { LedgerLoginButton } from "@elrondnetwork/dapp-core/UI/ledger/LedgerLoginButton";
import { WalletConnectLoginButton } from "@elrondnetwork/dapp-core/UI/walletConnect/WalletConnectLoginButton";
import { WebWalletLoginButton } from "@elrondnetwork/dapp-core/UI/webWallet/WebWalletLoginButton";

import { walletConnectV2ProjectId } from "App";
import { routeNames } from "config/routes";

const webWalletLoginComponent = (
  <Flex
    alignItems={"center"}
    mb={0}
    _focusVisible={{
      outline: "none",
    }}
    gap={2}
    h="full"
  >
    {" "}
    <WebWalletIcon mr="14px" fontSize={"21px"} /> Elrond Web Wallet{" "}
  </Flex>
);
const legerLoginComponent = (
  <Flex
    alignItems={"center"}
    mb={0}
    _focusVisible={{
      outline: "none",
    }}
    gap={2}
    h="full"
  >
    {" "}
    <LegerWalletIcon mr="14px" fontSize={"21px"} /> Ledger{" "}
  </Flex>
);
const mobileLoginComponent = (
  <Flex
    alignItems={"center"}
    mb={0}
    _focusVisible={{
      outline: "none",
    }}
    gap={2}
    h="full"
  >
    {" "}
    <MaiarAppIcon mr="14px" fontSize={"21px"} /> Maiar App{" "}
  </Flex>
);
const desktopLoginComponent = (
  <Flex
    alignItems={"center"}
    mb={0}
    _focusVisible={{
      outline: "none",
    }}
    gap={2}
  >
    {" "}
    <MaiarDefiWalletIcon mr="11.5px" fontSize={"23.5px"} /> Maiar DeFi Wallet{" "}
  </Flex>
);

interface IProps {
  isLoginOpen: boolean;
}

const Login = ({ isLoginOpen }: IProps) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(openLogin(false));
  };
  const commonProps = {
    callbackRoute: routeNames.play,
    nativeAuth: true, // optional
  };

  return (
    <MyModal
      onClose={handleClose}
      isOpen={isLoginOpen}
      size={"md"}
      overlayProps={{
        backdropFilter: "blur(6px)",
        background: "transparent",
      }}
      background={"black.200"}
      borderRadius={"20px"}
      px={0}
      isCentered={false}
    >
      <ModalBody
        pb={8}
        zIndex={1}
        px={0}
        bg="linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #FFFFFF"
        color="black"
      >
        <ModalCloseButton
          fontSize={"15px"}
          _focus={{ border: "none" }}
          right="20px"
          top="18px"
        />
        <Flex direction="column" w="100%" background="transparent" mb={8}>
          <Heading fontSize="lg" px={"30px"} pt={4} mb={6}>
            Connect Wallet{" "}
          </Heading>
          <Flex flexDir={"column"} alignItems="center" gap={"3px"}>
            <LoginMethod as={ExtensionLoginButton} {...commonProps}>
              {desktopLoginComponent}
            </LoginMethod>
            <LoginMethod
              as={WalletConnectLoginButton}
              {...commonProps}
              {...(walletConnectV2ProjectId
                ? {
                    isWalletConnectV2: true,
                  }
                : {})}
            >
              {mobileLoginComponent}
            </LoginMethod>
            <LoginMethod as={LedgerLoginButton} {...commonProps}>
              {legerLoginComponent}
            </LoginMethod>
            <LoginMethod as={WebWalletLoginButton} {...commonProps}>
              {webWalletLoginComponent}
            </LoginMethod>
          </Flex>
        </Flex>
        <Center
          flexDir={"column"}
          w="full"
          fontSize={"14px"}
          maxW="70%"
          mx="auto"
          textAlign="center"
        >
          <Text color={"blackT.400"} mb="15px">
            If you’re on desktop, try Maiar DeFi Wallet
          </Text>
          <Text color={"blackT.400"} mb={6}>
            If you’re on mobile, try Maiar App
          </Text>

          <Text color={"blackT.400"} mb="15px">
            New to MultiversX?
          </Text>
          <ChakraLink isExternal href="" textDecor="underline">
            Learn How <br /> to setup a wallet
          </ChakraLink>
        </Center>
      </ModalBody>
    </MyModal>
  );
};

export default Login;

interface LoginMethodProps extends BoxProps {
  children: ReactNode;
}

const LoginMethod = ({ children, ...props }: LoginMethodProps) => {
  return (
    <Box
      display={"flex"}
      fontSize="lsm"
      bg={"light.100"}
      w="full"
      h="62px"
      alignItems={"center"}
      justifyContent="space-between"
      cursor={"pointer"}
      // onClick={onClick}
      px="30px"
      fontWeight={"500"}
      color="black"
      border={"none"}
      margin={0}
      {...props}
    >
      {children}

      <ChevronRightIcon fontSize={"2xl"} />
    </Box>
  );
};
