import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { selectedNetwork } from "config/network";
import { AppState } from "redux/store";

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
    changeFromFieldToken: (state, action: PayloadAction<string>) => {
      state.fromField.selectedToken = action.payload;
    },
    changeToFieldToken: (state, action: PayloadAction<string>) => {
      state.toField.selectedToken = action.payload;
    },
    onChageFromFieldValue: (state, action: PayloadAction<string>) => {
      state.fromField.value = action.payload;
    },
    onChangeToField: (state, action: PayloadAction<string>) => {
      state.toField.value = action.payload;
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

export const {
  onChageFromFieldValue,
  onChangeToField,
  changeFromFieldToken,
  changeToFieldToken,
  setRate,
} = swap.actions;
export default swap.reducer;
