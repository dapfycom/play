import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Input,
  ModalBody,
} from "@chakra-ui/react";
import ActionButton from "components/ActionButton/ActionButton";
import MyModal from "components/Modal/Modal";
import TokenBox from "./commons/TokenBox/TokenBox";
import TokenList from "./commons/TokenList/TokenList";

interface IProps {
  onClose: () => void;
  isOpen: boolean;
}

const SelectTokenModal = ({ isOpen, onClose }: IProps) => {
  return (
    <MyModal
      isOpen={isOpen}
      onClose={onClose}
      background="dark.500"
      py="50px"
      borderRadius={"xl"}
      size="xl"
      isCentered={false}
      px={0}
    >
      <ModalBody color="white" px={0}>
        <Box px="50px" mb="22px">
          <Flex
            justifyContent={"space-between"}
            mb="17px"
            alignItems={"center"}
          >
            <Heading as="h3" fontSize={"lsm"}>
              {" "}
              Select token
            </Heading>
            <ActionButton bg="transparent" aria-label="close" onClick={onClose}>
              <CloseIcon />
            </ActionButton>
          </Flex>
          <Input
            borderColor={"primary"}
            border="2px"
            borderRadius={"17px"}
            p="20px"
            h="auto"
            fontSize={"sm"}
            placeholder="Search name or paste address"
            _placeholder={{
              color: "whiteT.200",
            }}
            mb={"22px"}
          />

          <Flex w="full" flexWrap={"wrap"} gap="15px">
            <TokenBox />
            <TokenBox />
            <TokenBox />
            <TokenBox />
            <TokenBox />
          </Flex>
        </Box>

        <Divider borderColor={"whiteT.100"} mb="30px" />

        <TokenList />
      </ModalBody>
    </MyModal>
  );
};

export default SelectTokenModal;
