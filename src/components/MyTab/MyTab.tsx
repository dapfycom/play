import {
  Box,
  BoxProps,
  Tab,
  TabList,
  TabListProps,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

interface IProps {
  tabData: {
    tabText: string;
    tabPanel: JSX.Element;
  }[];

  tabListProps?: TabListProps;
  tabListWarapperProps?: BoxProps;
}

const MyTab = ({ tabData, tabListProps, tabListWarapperProps }: IProps) => {
  const bgTab = useColorModeValue(
    "rgba(91, 192, 245, 0.05)",
    "darkGray.darker"
  );
  const secodary = useColorModeValue("black.100", "white.400");
  return (
    <Tabs variant={"unstyled"} isLazy>
      <Box overflow={"auto"} {...tabListWarapperProps}>
        <TabList
          border={"0.5px solid"}
          borderColor={secodary}
          w="fit-content"
          borderRadius={"7px"}
          {...tabListProps}
        >
          {tabData.map((e) => (
            <Tab
              key={e.tabText}
              _selected={{
                bg: bgTab,
                fontWeight: "bold",
                "&[aria-selected=true]": {
                  p: {
                    bg: "main",
                    bgClip: "text",
                  },
                },
              }}
              fontSize={{ xs: "sm", md: "md", xl: "lg" }}
              py={"10px"}
              px={{ xs: "20px", md: "30px", xl: "40px" }}
              borderRadius={"10px"}
              fontWeight="500"
              m="5px"
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

export default MyTab;
