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
  onChangeToken: (t: string) => void;
}

const InputBox = ({
  selectedTokenI,
  value,
  onChange,
  onChangeToken,
}: IProps) => {
  const [openTokensListModal, setOpenTokensListModal] = useState(false);

  const { elrondToken, isLoading } = useGetElrondToken(selectedTokenI);
  const { accountToken } = useGetAccountToken(selectedTokenI);

  const handleClose = () => {
    setOpenTokensListModal(false);
  };
  const handleOpen = () => {
    // set to true to allow the modal to open
    setOpenTokensListModal(true);
  };

  return (
    <>
      <Box
        bg="whiteT.50"
        borderRadius={{ xs: "md", md: "lg" }}
        p={{ xs: "20px", lg: "30px" }}
        border={"1px"}
        borderColor="whiteT.100"
      >
        <Flex w="full" mb="20px" gap="15px">
          <Input
            variant={"unstyled"}
            flex={1}
            placeholder="0.0"
            fontSize={{ xs: "2xl", lg: "4xl" }}
            value={value}
            onChange={(e) => onChange(e)}
            color="white"
          />

          <ActionButton
            borderRadius={{ xs: "10px", lg: "20px" }}
            px={{ xs: "10px", md: "20px" }}
            w={{ xs: "130px", md: "220px" }}
            py="15px"
            bg="dark.100"
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
            h="auto"
            onClick={handleOpen}
          >
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                <Flex gap={{ xs: "5px", md: "15px" }} alignItems="center">
                  <Image
                    src={elrondToken?.assets.svgUrl}
                    alt={elrondToken?.ticker}
                    w={{ xs: "18px", lg: "40px" }}
                  />
                  <Text fontSize={{ xs: "lsm", lg: "2xl" }}>
                    {elrondToken?.ticker}
                  </Text>
                </Flex>
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
        <SelectTokenModal
          isOpen={openTokensListModal}
          onClose={handleClose}
          selectToken={(t) => {
            handleClose();
            onChangeToken(t);
          }}
        />
      )}
    </>
  );
};

export default InputBox;
