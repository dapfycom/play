import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { checkNestedRoute } from "utils/functions/urls";
import MyContainer from "../Container/Container";
import Menu from "./commons/Menu/Menu";
import { MoreOptionsV2 } from "./commons/NavButtons/commons/MoreOptions/MoreOptions";
import NavButtons from "./commons/NavButtons/NavButtons";
import PlayMenuBar from "./commons/PlayMenuBar/PlayMenuBar";
const Navbar = () => {
  return (
    <Box bg="dark.600" borderTop={"3px solid"} borderColor="primary">
      <MyContainer borderBottom="1px" borderColor={"dark.300"}>
        <Flex>
          <Flex
            gap="30px"
            alignItems="center"
            height={{ xs: "70px", md: "85px" }}
          >
            <Flex gap="3px">
              <Box>
                <MoreOptionsV2 />
              </Box>
              <Link to="/">
                <Flex alignItems={"center"}>
                  {/* <ChkImage
                    src={beskarLogo}
                    alt="logo"
                    width={{ xs: "38px", md: "65px" }}
                    mr="15px"
                  /> */}

                  <Heading
                    as="h3"
                    textTransform={"uppercase"}
                    color="primary"
                    fontSize={"md"}
                    display={{ xs: "none", tablet: "block" }}
                  >
                    Beskar{" "}
                    <Box as="span" color="secondary">
                      play
                    </Box>
                  </Heading>
                </Flex>
              </Link>
            </Flex>
            <Divider
              orientation="vertical"
              borderColor="dark.300"
              maxH={"45px"}
              mt="10px !important"
              display={{ xs: "none", "1.5xl": "block" }}
            />
            <Flex h={"full"} display={{ xs: "none", "1.5xl": "flex" }}>
              <Menu />
            </Flex>
          </Flex>
          <NavButtons />
        </Flex>
      </MyContainer>

      {checkNestedRoute("/play") && (
        <MyContainer
          borderBottom="1px"
          borderColor={"dark.300"}
          display={{ xs: "none", "1.5xl": "block" }}
        >
          <Flex alignItems="center" height={{ xs: "65px", md: "85px" }}>
            <NoScroll h={"full"} overflowX="auto">
              <PlayMenuBar noBorder />
            </NoScroll>
          </Flex>
        </MyContainer>
      )}
      <MyContainer
        borderBottom="1px"
        borderColor={"dark.300"}
        display={{ xs: "block", "1.5xl": "none" }}
      >
        <Flex alignItems="center" height={{ xs: "65px", md: "85px" }}>
          <NoScroll h={"full"} overflowX="auto">
            {checkNestedRoute("/play") ? (
              <PlayMenuBar noBorder />
            ) : (
              <Menu noBorder />
            )}
          </NoScroll>
        </Flex>
      </MyContainer>
    </Box>
  );
};

export default Navbar;

const NoScroll = styled(Flex)`
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
`;
