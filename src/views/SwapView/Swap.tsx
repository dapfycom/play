import { Center } from "@chakra-ui/react";
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
    </MyContainer>
  );
};

export default Swap;
