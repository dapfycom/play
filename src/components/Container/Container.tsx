import { Container, ContainerProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface IProps extends PropsWithChildren<ContainerProps> {
  large?: boolean;
}

const MyContainer = ({ children, large, ...props }: IProps) => {
  return (
    <Container
      maxW={{
        sm: "100%",
      }}
      px={"30px"}
      {...props}
    >
      {children}
    </Container>
  );
};

export default MyContainer;
