import {
  Box,
  Divider,
  Flex,
  Heading,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { checkNestedRoute } from "utils/functions/urls";
import MyContainer from "../Container/Container";
import FishingWarn from "./commons/FishingWarn/FishingWarn";
import Menu from "./commons/Menu/Menu";
import NavButtons from "./commons/NavButtons/NavButtons";
import { MoreOptionsV2 } from "./commons/NavButtons/commons/MoreOptions/MoreOptions";
import PlayMenuBar from "./commons/PlayMenuBar/PlayMenuBar";
const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      {!isOpen && <FishingWarn close={onToggle} />}
      <Box bg="dark.600" borderTop={"3px solid"} borderColor="primary">
        <MyContainer borderBottom="1px" borderColor={"dark.300"}>
          <Flex>
            <Flex
              gap="15px"
              alignItems="center"
              height={{ xs: "70px", md: "60px" }}
            >
              <Flex gap="3px">
                <Box>
                  <MoreOptionsV2 />
                </Box>
                <Tooltip label="Coming soon">
                  {/* <Link to="/"> */}
                  <Flex alignItems={"center"}>
                    {/* <Image
                    src={"/images/bsk-logo.svg"}
                    alt="logo"
                    width={{ xs: "38px", md: "50px" }}
                    mr="10px"
                  /> */}

                    <Heading fontSize={"3xl"} cursor={"pointer"} ml={"-10px"}>
                      🔋
                    </Heading>
                    {/* <Heading
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
                  </Heading> */}
                  </Flex>
                  {/* </Link> */}
                </Tooltip>
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
    </>
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
