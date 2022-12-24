import { Center } from "@chakra-ui/react";
import MyContainer from "components/Container/Container";
import MyTabs from "components/MyTabs/MyTabs";
import { lazy } from "react";

const SwapLpTab = lazy(() => import("./commons/SwapLpTab"));

const Swap = () => {
  return (
    <MyContainer mb={10}>
      <Center>
        <MyTabs
          tabsProps={{
            width: "full",
            display: "flex",
            justifyContent: "center",
            flexDir: "column",
            alignItems: "center",
          }}
          tabListWarapperProps={{
            mb: "60px ",
          }}
          tabProps={{
            width: { xs: "150px", tablet: "170px", lg: "246px" },
          }}
          tabData={[
            {
              tabText: "Swap LP",
              tabPanel: <SwapLpTab />,
            },
            {
              tabText: "SWAP TOKENS",
              tabPanel: <SwapLpTab />,
            },
          ]}
        />
      </Center>
    </MyContainer>
  );
};

export default Swap;
