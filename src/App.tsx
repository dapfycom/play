import { EnvironmentsEnum } from "@elrondnetwork/dapp-core/types";
import {
  NotificationModal,
  SignTransactionsModals,
  TransactionsToastList,
} from "@elrondnetwork/dapp-core/UI";
import {
  AxiosInterceptorContext,
  DappProvider,
} from "@elrondnetwork/dapp-core/wrappers";
import { routes } from "config/routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "styles/globals.css";
const router = createBrowserRouter(routes);
export const walletConnectV2ProjectId = "9b1a9564f91cb659ffe21b73d5c4e2d8";

function App() {
  return (
    <AxiosInterceptorContext.Provider>
      <AxiosInterceptorContext.Interceptor
        authenticatedDomanis={["https://tools.elrond.com"]}
      >
        <DappProvider
          environment={EnvironmentsEnum.mainnet}
          customNetworkConfig={{
            name: "customConfig",
            apiTimeout: 10000,
            walletConnectV2ProjectId,
          }}
        >
          <>
            <AxiosInterceptorContext.Listener />
            <TransactionsToastList />
            <NotificationModal />
            <SignTransactionsModals className="custom-class-for-modals" />
            <RouterProvider router={router} />
          </>
        </DappProvider>
      </AxiosInterceptorContext.Interceptor>
    </AxiosInterceptorContext.Provider>
  );
}

export default App;
