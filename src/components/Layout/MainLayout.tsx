import { Box, ChakraProvider } from "@chakra-ui/react";
import { useGetLoginInfo } from "@multiversx/sdk-dapp/hooks/account";
import { useGetAccountInfo } from "@multiversx/sdk-dapp/hooks/account/useGetAccountInfo";
import Footer from "components/Footer";
import Login from "components/Login/Login";
import { routeNames } from "config/routes";

import { useAppSelector } from "hooks/useRedux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import {
  openLogin,
  selectIsLoginModal,
  setShard,
  setUserAddress,
} from "redux/dapp/dapp-slice";
import { mainTheme } from "styles/mainTheme/theme";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isLoginModal: boolean = useAppSelector(selectIsLoginModal);
  const { address, shard } = useGetAccountInfo();
  const { isLoggedIn } = useGetLoginInfo();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(openLogin(false));
    }
  }, [isLoggedIn, dispatch]);

  useEffect(() => {
    dispatch(
      setUserAddress(process.env.REACT_APP_CONNECTED_ADDRESS || address)
    );
    dispatch(setShard(shard || 1));
  }, [address, dispatch, shard]);

  const showFooter =
    location.pathname !== routeNames.swap &&
    location.pathname !== routeNames.swapLp;
  return (
    <ChakraProvider resetCSS theme={mainTheme}>
      <Box pb="20">
        <Navbar />
        {isLoginModal && <Login isLoginOpen={isLoginModal} />}
        <Box
          sx={{
            "& >div": {
              pt: "70px",
            },
          }}
        >
          <Outlet />
        </Box>
        {showFooter && <Footer />}
      </Box>
    </ChakraProvider>
  );
};

export default Layout;
