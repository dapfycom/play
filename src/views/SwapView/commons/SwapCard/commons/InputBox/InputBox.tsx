import { Box, Flex, Input, Text } from "@chakra-ui/react";
import ActionButton from "components/ActionButton/ActionButton";
import { EgldIcon } from "components/icons/coin-icons";
import { AngleDownIcon } from "components/icons/ui-icons";
import { lazy, useState } from "react";

const SelectTokenModal = lazy(() => import("../SelectTokenModal"));

const InputBox = () => {
  const [openTokensListModal, setOpenTokensListModal] = useState(false);

  const handleClose = () => {
    setOpenTokensListModal(false);
  };
  const handleOpen = () => {
    setOpenTokensListModal(true);
  };

  return (
    <>
      <Box bg="dark.400" borderRadius={"lg"} p={{ xs: "20px", lg: "40px" }}>
        <Flex w="full" mb="20px" gap="15px">
          <Input
            variant={"unstyled"}
            flex={1}
            placeholder="0.0"
            fontSize={{ xs: "2xl", lg: "4xl" }}
          />
          <ActionButton
            borderRadius={{ xs: "10px", lg: "20px" }}
            px="20px"
            py="15px"
            bg="dark.100"
            display={"flex"}
            justifyContent="center"
            gap="15px"
            h="auto"
            onClick={handleOpen}
          >
            <EgldIcon fontSize={{ xs: "18px", lg: "40px" }} />
            <Text fontSize={{ xs: "lsm", lg: "2xl" }}>EGLD</Text>
            <AngleDownIcon fontSize={{ xs: "13px", lg: "17px" }} />
          </ActionButton>
        </Flex>
        <Flex justifyContent={"flex-end"}>
          <Text fontSize={{ xs: "xs", lg: "lg" }}>Balance: 124,154.83</Text>
        </Flex>
      </Box>

      {openTokensListModal && (
        <SelectTokenModal isOpen={openTokensListModal} onClose={handleClose} />
      )}
    </>
  );
};

export default InputBox;
