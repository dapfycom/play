import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import dappReducer from "redux/dapp/dapp-slice";
import swapReducer from "views/SwapView/lib/swap-slice";
export function makeStore() {
  return configureStore({
    reducer: {
      dapp: dappReducer,
      swap: swapReducer,
    },
  });
}
const store = makeStore();
setupListeners(store.dispatch);

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
