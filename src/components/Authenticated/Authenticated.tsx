import { Flex, Spinner } from "@chakra-ui/react";
import { FC, PropsWithChildren, ReactElement } from "react";

import {
  useGetAccountInfo,
  useGetLoginInfo,
} from "@elrondnetwork/dapp-core/hooks/account";

interface AuthenticatedProps {
  fallback?: ReactElement;
  noSpinner?: boolean;
  spinnerCentered?: boolean;
}

export const Authenticated: FC<PropsWithChildren<AuthenticatedProps>> = ({
  children,
  fallback = null,
  noSpinner = false,
  spinnerCentered = false,
}) => {
  const { isLoggedIn } = useGetLoginInfo();
  const { isAccountLoading } = useGetAccountInfo();

  if (isAccountLoading)
    return noSpinner ? null : (
      <Flex justify={spinnerCentered ? "center" : "flex-start"}>
        <Spinner
          thickness="3px"
          speed="0.4s"
          color="elvenTools.color2.base"
          size="md"
          mt={3}
        />
      </Flex>
    );

  if (!isLoggedIn) return fallback;

  return <>{children}</>;
};
