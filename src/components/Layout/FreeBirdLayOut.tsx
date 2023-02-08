import { Box, Flex, Grid, Icon } from "@chakra-ui/react";
import { mainSiteRoutes, routeNames } from "config/routes";
import { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { isActiveRoute } from "utils/functions/urls";

const FreeBirdLayOut = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const twitterRoutes = mainSiteRoutes.find(
    (route) => route.path === "/freebird"
  )?.children;

  useEffect(() => {
    if (location.pathname === routeNames.freebird) {
      console.log("redirecr");
      navigate(routeNames.freebirdWelcomeMessage);
    }
  }, [location.pathname, navigate]);
  return (
    <Box minH="100vh">
      <Grid w="full" templateColumns={{ xs: "1fr", xl: "30% auto" }}>
        <Flex flexDir={"column"} display={{ xs: "none", xl: "flex" }}>
          {twitterRoutes?.map((route) => {
            const isActive = isActiveRoute(route.path, location.pathname);

            return (
              <Flex
                key={route.path}
                p={4}
                _hover={{
                  color: "primary",
                }}
                color={isActive ? "primary" : "white"}
                gap={4}
              >
                <Icon as={route.icon} fontSize="30px" />
                <Link to={route.path}>{route.title}</Link>
              </Flex>
            );
          })}
        </Flex>
        <Flex w="full">
          <Outlet />
        </Flex>
      </Grid>
    </Box>
  );
};

export default FreeBirdLayOut;
