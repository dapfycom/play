import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import dappReducer from "redux/dapp/dapp-slice";
import coinFlipReducer from "views/CoinFlipView/lib/con-flip-slice";
import swapReducer from "views/SwapView/lib/swap-slice";
import swapLpReducer from "views/SwapView/lib/swapLp-slice";
export function makeStore() {
  return configureStore({
    reducer: {
      dapp: dappReducer,
      swap: swapReducer,
      swapLp: swapLpReducer,
      coinFlip: coinFlipReducer,
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
