import { Button, ButtonProps } from "@chakra-ui/react";
import Ripple from "components/Ripple/Ripple";
import { PropsWithChildren } from "react";

interface IProps extends PropsWithChildren<ButtonProps> {
  noRipple?: boolean;
}

const ActionButton = ({ children, noRipple, ...props }: IProps) => {
  return (
    <Button
      position={"relative"}
      overflow="hidden"
      _hover={{ bg: props.bg, opacity: 0.8 }}
      _active={{ bg: props.bg, opacity: 0.8 }}
      {...props}
    >
      {children}
      {!noRipple && <Ripple radius={props.borderRadius} />}
    </Button>
  );
};

export default ActionButton;
