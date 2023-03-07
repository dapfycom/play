import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  FlexProps,
  IconProps,
  Text,
  useOutsideClick,
} from "@chakra-ui/react";
import { useGetLoginInfo } from "@multiversx/sdk-dapp/hooks/account";
import { logout } from "@multiversx/sdk-dapp/utils";
import {
  BookIcon,
  ChatIcon,
  QuestionIcon,
  ZapIcon,
} from "components/icons/ui-icons";
import { useAppDispatch } from "hooks/useRedux";
import React, { ReactNode } from "react";
import { openLogin } from "redux/dapp/dapp-slice";

interface IProps {
  onClose: () => void;
  placement?: "right" | "left";
}
const MoreOptionsModal = ({ onClose, placement = "right" }: IProps) => {
  const ref: any = React.useRef();
  const dispatch = useAppDispatch();
  useOutsideClick({
    ref: ref,
    handler: onClose,
  });
  const { isLoggedIn } = useGetLoginInfo();

  const handleConnect = () => {
    dispatch(openLogin(true));
  };
  const handleDisconnect = () => {
    logout();
  };

  const iconProps: IconProps = {
    fontSize: "12px",
  };
  const containerProps = {} as any;
  containerProps[placement] = 0;
  return (
    <Box
      border={"1px"}
      borderColor="whiteT.100"
      borderRadius={"lg"}
      ref={ref}
      position="absolute"
      top={"60px"}
      bg="dark.500"
      p="20px"
      w="209px"
      {...containerProps}
    >
      <Box display={{ xs: "bloack", lsm: "none" }}>
        {isLoggedIn ? (
          <OptionModal
            title="Disconnect"
            icon={<ZapIcon {...iconProps} />}
            onClick={handleDisconnect}
          />
        ) : (
          <OptionModal
            title="Connect"
            icon={<ZapIcon {...iconProps} />}
            onClick={handleConnect}
          />
        )}
      </Box>
      <OptionModal title="About" icon={<InfoOutlineIcon {...iconProps} />} />
      <OptionModal title="Help Center" icon={<QuestionIcon {...iconProps} />} />
      <OptionModal title="Telegram" icon={<ChatIcon {...iconProps} />} />
      <OptionModal title="Docs" icon={<BookIcon {...iconProps} />} />
    </Box>
  );
};

export default MoreOptionsModal;

interface IOptionModal extends FlexProps {
  title: string;
  icon: ReactNode;
}

const OptionModal = ({
  title = "About",
  icon = <InfoOutlineIcon />,
  ...props
}: IOptionModal) => {
  return (
    <Flex
      w="full"
      py="4px"
      cursor={"pointer"}
      justifyContent="space-between"
      alignItems={"center"}
      color="whiteT.600"
      _hover={{
        color: "white",
      }}
      mb="2px"
      {...props}
    >
      <Text fontSize={"sm"}>{title}</Text>
      {icon}
    </Flex>
  );
};
