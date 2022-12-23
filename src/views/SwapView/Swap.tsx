import { Center } from "@chakra-ui/react";
import MyContainer from "components/Container/Container";
import MyTabs from "components/MyTabs/MyTabs";
import { lazy } from "react";

const SwapLpTab = lazy(() => import("./commons/SwapLpTab"));

const Swap = () => {
  return (
    <MyContainer>
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
            width: "246px",
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
