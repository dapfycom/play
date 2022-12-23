import { Button, ButtonProps } from "@chakra-ui/react";
import Ripple from "components/Ripple/Ripple";
import { PropsWithChildren } from "react";

const ActionButton = ({
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <Button
      position={"relative"}
      overflow="hidden"
      _hover={{ bg: props.bg, opacity: 0.8 }}
      _active={{ bg: props.bg, opacity: 0.8 }}
      {...props}
    >
      {children}
      <Ripple radius={props.borderRadius} />
    </Button>
  );
};

export default ActionButton;
