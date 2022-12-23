import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "redux/store";

export interface GeneralState {
  isLoginModal: boolean;
  userAddress: string;
  sidebarMenu: boolean;
}

const initialState: GeneralState = {
  isLoginModal: false,
  userAddress: "",
  sidebarMenu: false,
};

export const dapp = createSlice({
  name: "dapp",
  initialState,
  reducers: {
    openLogin: (state, action: PayloadAction<boolean>) => {
      state.isLoginModal = action.payload;
    },
    setUserAddress: (state, action: PayloadAction<string>) => {
      state.userAddress = action.payload;
    },

    setSidebarMenu: (state, action: PayloadAction<boolean>) => {
      state.sidebarMenu = action.payload;
    },
  },
});

export const selectIsLoginModal = (state: AppState) => state.dapp.isLoginModal;

export const { openLogin, setUserAddress, setSidebarMenu } = dapp.actions;
export default dapp.reducer;
