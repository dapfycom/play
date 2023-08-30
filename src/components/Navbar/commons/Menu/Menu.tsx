import { Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import { mainSiteRoutes } from "config/routes";
import { Link, useLocation } from "react-router-dom";
import { isActiveRoute } from "utils/functions/urls";

interface IProps {
  noBorder?: boolean;
}

const Menu = ({ noBorder }: IProps) => {
  let location = useLocation();

  return (
    <Flex as="nav" gap={{ xs: "28px", md: "50px" }}>
      {mainSiteRoutes.map((route) => {
        if (route?.hide) {
          return null;
        }
        if (route?.soon) {
          return (
            <Tooltip label="Coming soon" placement="right" key={route.title}>
              <Flex
                gap="10px"
                borderBottom={"1px solid"}
                borderColor={"transparent"}
                height="full"
                pt={{ xs: "22.5px", md: "31px" }}
                fontSize={{ xs: "lsm", "2xl": "md" }}
                _hover={{
                  "& p": {
                    color: "white",
                  },
                  "& div": {
                    color: "white",
                  },
                }}
                whiteSpace="nowrap"
              >
                <Box color={"grayText"}>{route.icon}</Box>
                <Text color={"grayText"}>{route.title}</Text>
              </Flex>
            </Tooltip>
          );
        }
        // if (route?.isExternal) {
        //   return (
        //     <ChLink href={route.path} key={route.path} isExternal>
        //       <Flex
        //         gap="10px"
        //         borderBottom={"1px solid"}
        //         borderColor={"transparent"}
        //         height="full"
        //         pt={{ xs: "22.5px", md: "31px" }}
        //         fontSize={{ xs: "lsm", "2xl": "md" }}
        //         _hover={{
        //           "& p": {
        //             color: "white",
        //           },
        //           "& div": {
        //             color: "white",
        //           },
        //         }}
        //         whiteSpace="nowrap"
        //       >
        //         <Box color={"grayText"}>{route.icon}</Box>
        //         <Text color={"grayText"}>{route.title}</Text>
        //       </Flex>
        //     </ChLink>
        //   );
        // }

        let isActive = isActiveRoute(route.path, location.pathname);
        return (
          <Link to={route.path} key={route.path}>
            <Flex
              gap="10px"
              borderBottom={"1px solid"}
              borderColor={
                noBorder ? "transparent" : isActive ? "primary" : "transparent"
              }
              height="full"
              pt={{ xs: "22.5px", md: "31px" }}
              fontSize={{ xs: "lsm", "2xl": "md" }}
              _hover={{
                "& p": {
                  color: "white",
                },
                "& div": {
                  color: "white",
                },
              }}
              whiteSpace="nowrap"
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
