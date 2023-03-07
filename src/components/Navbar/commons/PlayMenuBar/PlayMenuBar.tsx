import { Flex } from "@chakra-ui/react";

interface IProps {
  noBorder?: boolean;
}

const PlayMenuBar = ({ noBorder }: IProps) => {
  // let location = useLocation();

  return (
    <Flex as="nav" gap={{ xs: "28px", md: "50px" }}>
      {/* {mainSiteRoutes
        .find((route) => route.path === "/play")
        .children.map((route) => {
          let isActive = isActiveRoute(route.path, location.pathname);

          return (
            <Link to={route.path} key={route.path}>
              <Flex
                gap="10px"
                borderBottom={"1px solid"}
                borderColor={
                  noBorder
                    ? "transparent"
                    : isActive
                    ? "primary"
                    : "transparent"
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
                <Box color={isActive ? "primary" : "grayText"}>
                  {route.icon}
                </Box>
                <Text color={isActive ? "secondary" : "grayText"}>
                  {route.title}
                </Text>
              </Flex>
            </Link>
          );
        })} */}
    </Flex>
  );
};

export default PlayMenuBar;
