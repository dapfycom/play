import { ButtonProps } from "@chakra-ui/react";
import ActionButton from "components/ActionButton/ActionButton";
import { ReactNode } from "react";

interface IProps extends ButtonProps {
  icon: ReactNode;
  ariaLabel: string;
}

const SocialButton = ({ ariaLabel, icon, ...props }: IProps) => {
  return (
    <ActionButton
      boxSize={"70px"}
      h="auto"
      aria-label={ariaLabel}
      color="white"
      borderRadius={"md"}
      border="1px"
      borderColor={"dark.300"}
      bg="dark.600"
      {...props}
    >
      {icon}
    </ActionButton>
  );
};

export default SocialButton;
