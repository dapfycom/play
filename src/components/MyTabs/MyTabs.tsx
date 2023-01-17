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
import { Link, Outlet, useLocation } from "react-router-dom";

interface IProps {
  tabData: {
    tabText: string;
    tabPanel?: JSX.Element;
    routerLink?: {
      path: string;
    };
  }[];
  isForRouter?: boolean;

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
  isForRouter,
}: IProps) => {
  // get the current path with hook of react-router-dom
  const currentPath = useLocation().pathname;

  // get the index of the tab that matches the current path
  const index = tabData.findIndex((e) => e.routerLink?.path === currentPath);

  return (
    <Tabs
      variant={"unstyled"}
      isLazy
      {...tabsProps}
      index={isForRouter ? index : undefined}
    >
      <Box overflow={"auto"} {...tabListWarapperProps}>
        <TabList
          bg="dark.500"
          w="fit-content"
          borderRadius={"full"}
          p={{ xs: "5px", md: "9px" }}
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
              {e.routerLink ? (
                <Link to={e.routerLink.path}>
                  <Text>{e.tabText}</Text>
                </Link>
              ) : (
                <Text>{e.tabText}</Text>
              )}
            </Tab>
          ))}
        </TabList>
      </Box>
      <TabPanels>
        {isForRouter ? (
          <Outlet />
        ) : (
          <>
            {tabData.map((e) => (
              <TabPanel key={e.tabText} px={0}>
                {e.tabPanel}
              </TabPanel>
            ))}
          </>
        )}
      </TabPanels>
    </Tabs>
  );
};

export default MyTabs;
