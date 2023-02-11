import { Box, Flex } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "hooks/useRedux";
import {
  onChageFromFieldValue,
  onChangeToField,
  selectFromField,
  selectToField,
} from "views/SwapView/lib/swapLp-slice";
import InputBox from "../InputBox/InputBox";
import SubmitButton from "../SubmitButton";

const SwapLpCard = () => {
  const dispatch = useAppDispatch();
  const fromField = useAppSelector(selectFromField);
  const toField = useAppSelector(selectToField);

  const handleonChangeInput = (type: "from" | "to", value) => {
    if (type === "from") {
      dispatch(onChageFromFieldValue(value));
    } else {
      dispatch(onChangeToField(value));
    }
  };

  return (
    <Box
      borderRadius={"2xl"}
      bg="dark.500"
      maxW={"850px"}
      w="full"
      px={{ xs: "30px", lg: "50px" }}
      py="35px"
      border="1px"
      borderColor={"primary"}
    >
      <Flex flexDir={"column"} gap={8} mb={10}>
        <InputBox
          type="from"
          tokenI={fromField.selectedToken}
          inputValue={fromField.value}
          handleChange={(value) => handleonChangeInput("from", value)}
        />
        <InputBox
          type="to"
          tokenI={toField.selectedToken}
          inputValue={toField.value}
          handleChange={(value) => handleonChangeInput("to", value)}
          isReadOnly
        />
      </Flex>
      <SubmitButton />
    </Box>
  );
};

export default SwapLpCard;
