import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, useOutsideClick } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface IProps {
  onClose: () => void;
}
const MoreOptionsModal = ({ onClose }: IProps) => {
  const ref: any = React.useRef();
  useOutsideClick({
    ref: ref,
    handler: onClose,
  });

  return (
    <Box
      border={"1px"}
      borderColor="dark.300"
      borderRadius={"lg"}
      ref={ref}
      position="absolute"
      right={0}
      top={"60px"}
      bg="dark.500"
      p="20px"
      w="220px"
    >
      <OptionModal title="About" icon={<InfoOutlineIcon />} />
      <OptionModal title="Help Center" icon={<InfoOutlineIcon />} />
      <OptionModal title="Telegram" icon={<InfoOutlineIcon />} />
      <OptionModal title="Docs" icon={<InfoOutlineIcon />} />
    </Box>
  );
};

export default MoreOptionsModal;

const OptionModal = ({
  title = "About",
  icon = <InfoOutlineIcon />,
}: {
  title: string;
  icon: ReactNode;
}) => {
  return (
    <Flex
      w="full"
      py="4px"
      cursor={"pointer"}
      justifyContent="space-between"
      alignItems={"center"}
      _hover={{
        color: "white",
      }}
      mb="2px"
    >
      <Text fontSize={"sm"}>{title}</Text>
      {icon}
    </Flex>
  );
};
