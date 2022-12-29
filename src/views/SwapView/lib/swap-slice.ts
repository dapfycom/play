import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { selectedNetwork } from "config/network";
import { AppState } from "redux/store";
import { handleSwap } from "./functions";

export interface SwapState {
  fromField: {
    value: string;
    selectedToken: string;
  };
  toField: {
    value: string;
    selectedToken: string;
  };
  rate: number;
  slipage: number;
}

const initialState: SwapState = {
  fromField: {
    value: "",
    selectedToken: selectedNetwork.tokensID.egld,
  },
  toField: {
    value: "",
    selectedToken: selectedNetwork.tokensID.bsk,
  },
  rate: 0,
  slipage: 1,
};

export const swap = createSlice({
  name: "swap",
  initialState,
  reducers: {
    setRate: (state, action: PayloadAction<number>) => {
      state.rate = action.payload;
    },
    onChageFromFieldValue: (state, action: PayloadAction<string>) => {
      const { value1, value2 } = handleSwap(action.payload, state.rate);
      state.fromField.value = value1;
      state.toField.value = value2;
    },
    onChangeToField: (state, action: PayloadAction<string>) => {
      const { value1, value2 } = handleSwap(action.payload, 1 / state.rate);
      state.toField.value = value1;
      state.fromField.value = value2;
    },
  },
});

export const selectFromFieldValue = (state: AppState) =>
  state.swap.fromField.value;
export const selectFromFieldSelectedToken = (state: AppState) =>
  state.swap.fromField.selectedToken;
export const selectToFieldValue = (state: AppState) => state.swap.toField.value;
export const selectToFieldSelectedToken = (state: AppState) =>
  state.swap.toField.selectedToken;

export const selectFromField = (state: AppState) => state.swap.fromField;
export const selectToField = (state: AppState) => state.swap.toField;
export const selectSlippage = (state: AppState) => state.swap.slipage;

export const { onChageFromFieldValue, onChangeToField, setRate } = swap.actions;
export default swap.reducer;
