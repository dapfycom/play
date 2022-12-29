import { Box, Flex, Image, Input, Spinner, Text } from "@chakra-ui/react";
import ActionButton from "components/ActionButton/ActionButton";
import { AngleDownIcon } from "components/icons/ui-icons";
import useGetAccountToken from "hooks/useGetAccountToken";
import useGetElrondToken from "hooks/useGetElrondToken";
import React, { lazy, useState } from "react";
import { formatBalance } from "utils/functions/formatBalance";
const SelectTokenModal = lazy(() => import("../SelectTokenModal"));

interface IProps {
  selectedTokenI: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBox = ({ selectedTokenI, value, onChange }: IProps) => {
  const [openTokensListModal, setOpenTokensListModal] = useState(false);

  const { elrondToken, isLoading } = useGetElrondToken(selectedTokenI);
  const { accountToken } = useGetAccountToken(selectedTokenI);

  const handleClose = () => {
    setOpenTokensListModal(false);
  };
  const handleOpen = () => {
    // set to true to allow the modal to open
    setOpenTokensListModal(false);
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
            value={value}
            onChange={(e) => onChange(e)}
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
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                <Image
                  src={elrondToken?.assets.svgUrl}
                  alt={elrondToken?.ticker}
                  w={{ xs: "18px", lg: "40px" }}
                />
                <Text fontSize={{ xs: "lsm", lg: "2xl" }}>
                  {elrondToken?.ticker}
                </Text>
                <AngleDownIcon fontSize={{ xs: "13px", lg: "17px" }} />
              </>
            )}
          </ActionButton>
        </Flex>
        {accountToken && (
          <Flex justifyContent={"flex-end"}>
            <Text fontSize={{ xs: "xs", lg: "lg" }}>
              Balance: {formatBalance(accountToken)}
            </Text>
          </Flex>
        )}
      </Box>

      {openTokensListModal && (
        <SelectTokenModal isOpen={openTokensListModal} onClose={handleClose} />
      )}
    </>
  );
};

export default InputBox;
