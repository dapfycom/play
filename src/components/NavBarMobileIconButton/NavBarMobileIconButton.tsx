import {
  IconButton,
  IconButtonProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const NavBarMobileIconButton = ({
  children,
  ...props
}: PropsWithChildren<IconButtonProps>) => {
  const bg = useColorModeValue("lightGray.base", "#191919");
  return (
    <IconButton
      boxSize={"40px"}
      minW="unset"
      variant={"unstyled"}
      bg={bg}
      borderRadius={"md"}
      color="#60CCF5"
      fontSize={"sm"}
      {...props}
    >
      {children}
    </IconButton>
  );
};

export default NavBarMobileIconButton;
