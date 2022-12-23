import { Box, Flex, Text } from "@chakra-ui/react";
import { mainSiteRoutes } from "config/routes";
import { Link, useLocation } from "react-router-dom";
import { isActiveRoute } from "utils/functions/urls";
const Menu = () => {
  let location = useLocation();

  return (
    <Flex as="nav" gap="50px">
      {mainSiteRoutes.map((route) => {
        const isActive = isActiveRoute(route.path, location.pathname);

        return (
          <Link to={route.path} key={route.path}>
            <Flex
              gap="10px"
              borderBottom={"1px solid"}
              borderColor={isActive ? "primary" : "transparent"}
              height="full"
              pt="31px"
            >
              <Box color={isActive ? "primary" : "grayText"}>{route.icon}</Box>
              <Text color={isActive ? "secondary" : "grayText"}>
                {route.title}
              </Text>
            </Flex>
          </Link>
        );
      })}
    </Flex>
  );
};

export default Menu;
