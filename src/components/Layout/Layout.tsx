import { Box } from "@chakra-ui/react";
import { useGetLoginInfo } from "@elrondnetwork/dapp-core/hooks/account";
import { useGetAccountInfo } from "@elrondnetwork/dapp-core/hooks/account/useGetAccountInfo";
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
  setUserAddress,
} from "redux/dapp/dapp-slice";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isLoginModal: boolean = useAppSelector(selectIsLoginModal);
  const { address } = useGetAccountInfo();
  const { isLoggedIn } = useGetLoginInfo();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(openLogin(false));
    }
  }, [isLoggedIn, dispatch]);

  useEffect(() => {
    dispatch(
      setUserAddress(process.env.NEXT_PUBLIC_CONNECTED_ADDRESS || address)
    );
  }, [address, dispatch]);

  const showFooter =
    location.pathname !== routeNames.swap &&
    location.pathname !== routeNames.swapLp;
  return (
    <Box pb="20">
      <Navbar />
      {isLoginModal && <Login isLoginOpen={isLoginModal} />}
      <Box pt={"70px"}>
        <Outlet />
      </Box>
      {showFooter && <Footer />}
    </Box>
  );
};

export default Layout;
