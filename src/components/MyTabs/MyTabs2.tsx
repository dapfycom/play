import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";

interface IProps {
  tabs: {
    label: string;
    content: React.ReactNode;
  }[];
  alingRight?: boolean;
}

const MyTabs2 = ({ tabs, alingRight = true }: IProps) => {
  return (
    <Tabs variant="soft-rounded" colorScheme="green">
      <Flex justify={alingRight ? "flex-end" : "normal"} pr="15px">
        <TabList
          fontSize={"12px"}
          borderRadius={"full"}
          overflow="hidden"
          color="white"
          bg="dark.600"
          boxShadow={"inset 0 0 0 1px #34383C"}
          alignItems="center"
          w="fit-content"
        >
          {tabs.map((tabEl, index) => {
            return (
              <Tab
                fontSize={"inherit"}
                key={index}
                _selected={{
                  bg: "primary",
                }}
                color="white"
              >
                {tabEl.label}
              </Tab>
            );
          })}
        </TabList>
      </Flex>
      <TabPanels>
        {tabs.map((tabEl, index) => {
          return <TabPanel key={index}>{tabEl.content}</TabPanel>;
        })}
      </TabPanels>
    </Tabs>
  );
};

export default MyTabs2;
