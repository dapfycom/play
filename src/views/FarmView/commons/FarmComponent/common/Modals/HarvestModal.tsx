import {
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Spinner,
  Text,
} from "@chakra-ui/react";
import ActionButton from "components/ActionButton/ActionButton";
import { LpTokenImageV2 } from "components/LpTokenImage/LpTokenImage";
import MyModal from "components/Modal/Modal";
import { selectedNetwork } from "config/network";
import { useFormik } from "formik";
import useGetAccountToken from "hooks/useGetAccountToken";
import useGetElrondToken from "hooks/useGetElrondToken";
import { formatBalance } from "utils/functions/formatBalance";
import { useGetFarmUserInfo } from "views/FarmView/utils/hooks";
import { harvest } from "views/FarmView/utils/services";
import * as yup from "yup";
interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const HarvestModal = ({ isOpen, onClose }: IProps) => {
  const { data: userFarmInfo } = useGetFarmUserInfo();

  const { elrondToken: stakedToken, isLoading } = useGetElrondToken(
    selectedNetwork.tokensID.bskwegld
  );
  const { accountToken: userStakedToken } = useGetAccountToken(
    selectedNetwork.tokensID.bskwegld
  );
  const stakeSchema = yup.object({
    amount: yup
      .number()
      .required("This field is required")
      .min(0, "Negative number")
      .max(
        formatBalance(
          { balance: userFarmInfo.lpActive, decimals: stakedToken.decimals },
          true,
          18
        ) as number,
        "Insufficient funds"
      ),
  });

  const formik = useFormik({
    initialValues: {
      amount: "",
    },
    onSubmit: (values) => {
      harvest(values.amount, [0]);
    },
    validationSchema: stakeSchema,
  });
  const handleMax = () => {
    const value = formatBalance(
      { balance: userFarmInfo.lpActive, decimals: stakedToken.decimals },
      true,
      18
    );
    formik.setFieldValue("amount", value);
  };

  return (
    <MyModal isOpen={isOpen} onClose={onClose} size="2xl" py={6}>
      {isLoading ? (
        <Spinner />
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <ModalHeader>
            <Flex alignItems={"center"} gap={3}>
              <LpTokenImageV2 lpToken={stakedToken} size={35} />
              <Heading fontSize={"lg"}>Harvest in BSK-EGLD farm</Heading>
            </Flex>
          </ModalHeader>
          <ModalBody>
            <InputGroup size={"lg"}>
              <Input
                name="amount"
                type={"number"}
                placeholder="Amount"
                fontSize={"sm"}
                onChange={formik.handleChange}
                value={formik.values.amount}
                isInvalid={
                  formik.touched.amount && Boolean(formik.errors.amount)
                }
              />
              <InputRightElement
                pointerEvents="none"
                children={
                  <Flex pt={2}>
                    <LpTokenImageV2 lpToken={stakedToken} size={20} />
                  </Flex>
                }
              />
            </InputGroup>
            <Flex justifyContent="space-between" mt={3} fontSize={"xs"}>
              <Text color="tomato">{formik.errors.amount}</Text>
              <Text onClick={handleMax} cursor="pointer">
                Balance:{" "}
                {formatBalance({
                  balance: userFarmInfo.lpActive,
                  decimals: stakedToken.decimals,
                })}
              </Text>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Flex w="full" gap={4}>
              <ActionButton flex={1} bg="dark.500" onClick={onClose}>
                Cancel
              </ActionButton>
              <ActionButton flex={1} type="submit">
                Harvest
              </ActionButton>
            </Flex>
          </ModalFooter>
        </form>
      )}
    </MyModal>
  );
};

export default HarvestModal;
