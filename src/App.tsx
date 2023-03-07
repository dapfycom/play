import {
  NotificationModal,
  SignTransactionsModals,
  TransactionsToastList,
} from "@multiversx/sdk-dapp/UI";
import {
  AxiosInterceptorContext,
  DappProvider,
} from "@multiversx/sdk-dapp/wrappers";
import LoadingPage from "components/LoadingPage";
import { ENVIROMENT } from "config/network";
import { routes } from "config/routes";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "styles/globals.css";

const router = createBrowserRouter(routes);
export const walletConnectV2ProjectId = "a5e4dd12d896af078bd26e68295a8c94";

function App() {
  return (
    <AxiosInterceptorContext.Provider>
      <AxiosInterceptorContext.Interceptor
        authenticatedDomanis={["https://tools.elrond.com"]}
      >
        <DappProvider
          environment={ENVIROMENT}
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
            <React.Suspense fallback={<LoadingPage />}>
              <RouterProvider router={router} />
            </React.Suspense>
          </>
        </DappProvider>
      </AxiosInterceptorContext.Interceptor>
    </AxiosInterceptorContext.Provider>
  );
}

export default App;
