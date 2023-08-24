import ActionButton from "components/ActionButton/ActionButton";
import { useAppDispatch } from "hooks/useRedux";
import { selectOutputToken } from "views/DustView/lib/dust-slice";
import { useSelectableDustTokens } from "views/DustView/lib/hooks";

const SelectAllTokens = () => {
  const { finalTokens } = useSelectableDustTokens();
  const dispatch = useAppDispatch();
  const handleSelectAll = () => {
    dispatch(
      selectOutputToken({
        data: finalTokens,
        isCheked: true,
      })
    );
  };
  return <ActionButton onClick={handleSelectAll}>Select All</ActionButton>;
};

export default SelectAllTokens;
