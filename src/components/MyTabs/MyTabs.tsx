import {
  Box,
  BoxProps,
  Tab,
  TabList,
  TabListProps,
  TabPanel,
  TabPanels,
  TabProps,
  Tabs,
  Text,
} from "@chakra-ui/react";

interface IProps {
  tabData: {
    tabText: string;
    tabPanel: JSX.Element;
  }[];

  tabListProps?: TabListProps;
  tabListWarapperProps?: BoxProps;
  tabsProps?: any;
  tabProps?: TabProps;
}

const MyTabs = ({
  tabData,
  tabListProps,
  tabsProps,
  tabProps,
  tabListWarapperProps,
}: IProps) => {
  return (
    <Tabs variant={"unstyled"} isLazy {...tabsProps}>
      <Box overflow={"auto"} {...tabListWarapperProps}>
        <TabList
          bg="dark.500"
          w="fit-content"
          borderRadius={"full"}
          p="9px"
          {...tabListProps}
        >
          {tabData.map((e) => (
            <Tab
              key={e.tabText}
              _selected={{
                bg: "dark.400",
                color: "black.dark",
              }}
              fontSize={{ xs: "xs", tablet: "sm", lg: "md" }}
              py={"10px"}
              px={0}
              borderRadius={"full"}
              fontWeight="500"
              color="white"
              {...tabProps}
            >
              <Text>{e.tabText}</Text>
            </Tab>
          ))}
        </TabList>
      </Box>
      <TabPanels>
        {tabData.map((e) => (
          <TabPanel key={e.tabText} px={0}>
            {e.tabPanel}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default MyTabs;
