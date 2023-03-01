import { useGetLoginInfo } from "@elrondnetwork/dapp-core/hooks";
import { logout } from "@elrondnetwork/dapp-core/utils";
import { openLogin } from "redux/dapp/dapp-slice";
import { useAppDispatch } from "./useRedux";

const useAuthentication = () => {
  const dispatch = useAppDispatch();

  const { isLoggedIn } = useGetLoginInfo();

  const handleConnect = () => {
    dispatch(openLogin(true));
  };
  const handleDisconnect = () => {
    logout();
  };

  return {
    isLoggedIn,
    handleConnect,
    handleDisconnect,
  };
};

export default useAuthentication;
