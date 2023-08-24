import BigNumber from "bignumber.js";
import ActionButton from "components/ActionButton/ActionButton";
import useGetElrondToken from "hooks/useGetElrondToken";
import { useAppSelector } from "hooks/useRedux";
import {
  selectConvertInfo,
  selectToTokenDust,
} from "views/DustView/lib/dust-slice";
import { useGetAmountOut } from "views/DustView/lib/hooks";
import { converTokens } from "views/DustView/lib/services";

const ConvertButton = () => {
  const toTokenI = useAppSelector(selectToTokenDust);

  const { elrondToken: toToken } = useGetElrondToken(toTokenI);
  const selectedTokens = useAppSelector(selectConvertInfo);
  const { data } = useGetAmountOut(selectedTokens);

  const handleSubmit = () => {
    const slippage = 1;
    console.log("data.amountOut)", data.amountOut);

    const bnAmountOut = new BigNumber(data.amountOut);
    const amountWithSlipage = new BigNumber(bnAmountOut).minus(
      new BigNumber(slippage / 100).multipliedBy(bnAmountOut)
    );
    converTokens(
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
  };

  return (
    <ActionButton
      onClick={handleSubmit}
      mt={16}
      // disabled={swapInfo.length === 0}
      fontWeight="600"
    >
      Convert tokens
    </ActionButton>
  );
};

export default ConvertButton;
