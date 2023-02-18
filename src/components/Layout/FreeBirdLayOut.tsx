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
  const id = "section-id-" + Date.now();

  return (
    <Box minH="100vh" bg="white" fontFamily={"mono"}>
      <Grid w="full" templateColumns={{ xs: "1fr", xl: "350px auto" }}>
        <Flex
          flexDir={{ xs: "row", xl: "column" }}
          display={"flex"}
          position={{ xs: "fixed", xl: "static" }}
          bottom={0}
          justifyContent={{ xs: "space-around", xl: "initial" }}
          borderTop="1px solid"
          borderColor={{ xs: "blackT.200", xl: "transparent" }}
          pb={{ xs: "5px", xl: "0" }}
          w="full"
          bg={{ xs: "white", xl: "transparent" }}
          zIndex={1}
        >
          {twitterRoutes?.map((route) => {
            const isActive = isActiveRoute(route.path, location.pathname);

            return (
              <Flex
                key={route.path}
                p={4}
                _hover={{
                  color: "primary",
                }}
                color={isActive ? "primary" : "blackT.600"}
                gap={4}
                as={Link}
                to={route.path}
              >
                <Icon as={route.icon} fontSize={{ xs: "20px", md: "30px" }} />
                <Box as="span" display={{ xs: "none", xl: "inline" }}>
                  {route.title}
                </Box>
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
