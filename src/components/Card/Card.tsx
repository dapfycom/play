import { Flex, FlexProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
interface IProps extends PropsWithChildren<FlexProps> {
  ref?: any;
}

const Card = ({ children, ref, ...props }: IProps) => {
  return (
    <Flex
      flexDir={"column"}
      px={3}
      py={6}
      borderRadius="lg"
      bg={"dark.600"}
      border={"1px solid #34383C"}
      {...props}
      ref={ref}
    >
      {children}
    </Flex>
  );
};

export default Card;
