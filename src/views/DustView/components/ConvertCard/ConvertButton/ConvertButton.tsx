import { useTrackTransactionStatus } from "@multiversx/sdk-dapp/hooks";
import BigNumber from "bignumber.js";
import ActionButton from "components/ActionButton/ActionButton";
import useGetUserTokens from "hooks/useGetUserTokens";
import { useAppSelector } from "hooks/useRedux";
import { useState } from "react";
import { selectConvertInfo } from "views/DustView/lib/dust-slice";
import { useGetAmountOut } from "views/DustView/lib/hooks";
import { converTokens } from "views/DustView/lib/services";

const ConvertButton = () => {
  const selectedTokens = useAppSelector(selectConvertInfo);
  const { data } = useGetAmountOut(selectedTokens);
  const [sessionId, setSessionId] = useState("");
  const { mutate } = useGetUserTokens();
  const onSuccess = () => {
    mutate();
  };
  useTrackTransactionStatus({
    transactionId: sessionId,
    onSuccess,
  });
  const handleSubmit = async () => {
    const slippage = 1;

    const bnAmountOut = new BigNumber(data.amountOut);
    const amountWithSlipage = new BigNumber(bnAmountOut).minus(
      new BigNumber(slippage / 100).multipliedBy(bnAmountOut)
    );
    const res = await converTokens(
      data.tokenIdentifier,
      amountWithSlipage.toFixed(0),
      selectedTokens.map((token) => {
        return {
          collection: token.identifier,
          nonce: 0,
          value: token.balance,
        };
      })
    );
    if (res) {
      setSessionId(res?.sessionId || "");
    }
  };

  return (
    <ActionButton
      onClick={handleSubmit}
      mt={16}
      // disabled={swapInfo.length === 0}
      fontWeight="600"
      fontSize={"14px"}
    >
      Convert tokens
    </ActionButton>
  );
};

export default ConvertButton;
