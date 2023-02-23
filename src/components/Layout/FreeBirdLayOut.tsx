import { Avatar, Box, Flex, Grid, Icon } from "@chakra-ui/react";
import beskarLogo from "assets/images/logo/beskar.svg";
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
    <Box
      minH="100vh"
      bg="white"
      fontFamily={
        "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"
      }
      paddingTop={"0px !important"}
      sx={{
        "*": {
          "&::-webkit-scrollbar": {
            width: 1.5,
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "light.100",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "dark.500",
            borderRadius: 1.5,
          },
          "*::placeholder": {
            color: "#747A84",
          },
          scrollbarWidth: "auto",
          scrollbarColor: "light.baseLight dark.baseDark",
        },
      }}
    >
      <Grid w="full" templateColumns={{ xs: "1fr", xl: "220px auto" }}>
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
          bg={{ xs: "white", xl: "gray.50" }}
          zIndex={1}
        >
          <Flex w="full" px={4} gap={3} alignItems="center" pt="4" mb={4}>
            <Avatar size="xs" name="Beskar Dao" src={beskarLogo} />{" "}
            <Flex color="gray.700" fontSize={"12px"} fontWeight="600">
              Beskar DAO | Multiversx
            </Flex>
          </Flex>

          {twitterRoutes?.map((route) => {
            const isActive = isActiveRoute(route.path, location.pathname);

            return (
              <Flex
                key={route.path}
                px={4}
                py={2}
                _hover={{
                  color: "primary",
                }}
                color={isActive ? "primary" : "gray.600"}
                gap={2}
                as={Link}
                to={route.path}
                alignItems="center"
              >
                <Icon as={route.icon} fontSize={{ xs: "20px", md: "18px" }} />
                <Box
                  as="span"
                  display={{ xs: "none", xl: "inline" }}
                  fontSize="14px"
                  fontWeight={"500"}
                >
                  {route.title}
                </Box>
              </Flex>
            );
          })}
        </Flex>
        <Flex w="full" pt="8" overflow={"auto"} mb={"50px"}>
          <Outlet />
        </Flex>
      </Grid>
    </Box>
  );
};

export default FreeBirdLayOut;
