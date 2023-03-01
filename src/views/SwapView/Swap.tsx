import { Center, Link, Text } from "@chakra-ui/react";
import MyContainer from "components/Container/Container";
import MyTabs from "components/MyTabs/MyTabs";
import { routeNames } from "config/routes";

const Swap = () => {
  return (
    <MyContainer mb={10}>
      <Center>
        <MyTabs
          isForRouter
          tabsProps={{
            width: "full",
            display: "flex",
            justifyContent: "center",
            flexDir: "column",
            alignItems: "center",
          }}
          tabListWarapperProps={{
            mb: "40px ",
          }}
          tabProps={{
            width: { xs: "150px", tablet: "170px", lg: "246px" },
          }}
          tabData={[
            {
              tabText: "SWAP TOKENS",
              routerLink: {
                path: routeNames.swap,
              },
            },
            {
              tabText: "Buy Liquidity",
              routerLink: {
                path: routeNames.swapLp,
              },
            },
          ]}
        />
      </Center>
      <Center mt={12} flexDir="column">
        <Link isExternal href="http://xport.al/referral/v3pqh6iqco">
          <Text
            align={"center"}
            fontSize="sm"
            color={"gray.500"}
            mb={4}
            textDecor="underline"
          >
            New to MultiversX? Create your FREE wallet in seconds
          </Text>
        </Link>
        <Link isExternal href="https://buy.multiversx.com/gb">
          <Text align={"center"} fontSize="2xl" color={"secondary"}>
            + Buy EGLD
          </Text>
        </Link>
      </Center>
    </MyContainer>
  );
};

export default Swap;
