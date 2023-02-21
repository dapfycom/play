import {
  Alert,
  AlertIcon,
  Divider,
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
import useGetElrondToken from "hooks/useGetElrondToken";
import { formatBalance } from "utils/functions/formatBalance";
import { useGetFarmUserInfo } from "views/FarmView/utils/hooks";
import { stop } from "views/FarmView/utils/services";
import * as yup from "yup";
interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const WithdrawModal = ({ isOpen, onClose }: IProps) => {
  const { data: userFarmInfo } = useGetFarmUserInfo();

  const { elrondToken: stakedToken, isLoading } = useGetElrondToken(
    selectedNetwork.tokensID.bskwegld
  );

  const stakeSchema = yup.object({
    amount: yup
      .number()
      .required("This field is required")
      .min(0, "Negative number")
      .max(
        formatBalance(
          { balance: userFarmInfo?.lpActive, decimals: stakedToken.decimals },
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
      stop(values.amount, []);
    },
    validationSchema: stakeSchema,
  });
  const handleMax = () => {
    const value = formatBalance(
      { balance: userFarmInfo?.lpActive, decimals: stakedToken.decimals },
      true,
      18
    );
    formik.setFieldValue("amount", value);
  };
  const date = new Date(userFarmInfo.lock * 100);
  console.log("date", date.toLocaleString());

  return (
    <MyModal isOpen={isOpen} onClose={onClose} size="2xl" py={6}>
      {isLoading ? (
        <Spinner />
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <ModalHeader>
            <Flex alignItems={"center"} gap={3}>
              <LpTokenImageV2 lpToken={stakedToken} size={35} />
              <Heading fontSize={"lg"}>Withdraw in BSK-EGLD farm</Heading>
            </Flex>
          </ModalHeader>
          <ModalBody>
            <Alert status="warning" borderRadius={"md"} mb={4} fontSize="14px">
              <AlertIcon />
              Please note that your LP tokens will be available to claim in 48
              hours after unstaking.
            </Alert>
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
                  balance: userFarmInfo?.lpActive,
                  decimals: stakedToken.decimals,
                })}
              </Text>
            </Flex>
            <Flex w="full" gap={4} mt={6} mb={8}>
              <ActionButton flex={1} type="submit">
                Unstake
              </ActionButton>
            </Flex>

            <Divider />

            <Flex mt={4} flexDir="column">
              <Text fontSize={"sm"} color="white">
                Available to claim :{" "}
                {formatBalance({
                  balance: userFarmInfo.lpStopped,
                  decimals: stakedToken.decimals,
                })}{" "}
                LP
              </Text>
              <Flex w="full" gap={4} mt={3} mb={8}>
                <ActionButton flex={1} type="submit">
                  Claim
                </ActionButton>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Flex w="full" gap={4}>
              <ActionButton flex={1} bg="dark.500" onClick={onClose}>
                Cancel
              </ActionButton>
            </Flex>
          </ModalFooter>
        </form>
      )}
    </MyModal>
  );
};

export default WithdrawModal;
