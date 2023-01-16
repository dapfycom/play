import { Heading, HeadingProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const MyHeading = ({ children, ...props }: PropsWithChildren<HeadingProps>) => {
  return (
    <Heading
      fontSize={{ xs: "2xl", md: "3xl", lg: "4xl" }}
      color="white"
      {...props}
    >
      {children}
    </Heading>
  );
};

export default MyHeading;
