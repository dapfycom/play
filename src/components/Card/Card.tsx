import { Flex, FlexProps, useColorModeValue } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
interface IProps extends PropsWithChildren<FlexProps> {
  ref?: any;
}

const Card = ({ children, ref, ...props }: IProps) => {
  const bg = useColorModeValue("lightGray.base", "dark.darker");
  return (
    <Flex
      flexDir={"column"}
      px={3}
      py={6}
      borderRadius="lg"
      bg={bg}
      {...props}
      ref={ref}
    >
      {children}
    </Flex>
  );
};

export default Card;
