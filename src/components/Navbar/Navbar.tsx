import {
  Box,
  Divider,
  Flex,
  Heading,
  Image as ChkImage,
} from "@chakra-ui/react";
import beskarLogo from "assets/images/logo/beskar.svg";
import MyContainer from "../Container/Container";
import Menu from "./commons/Menu/Menu";
import { MoreOptionsV2 } from "./commons/NavButtons/commons/MoreOptions/MoreOptions";
import NavButtons from "./commons/NavButtons/NavButtons";
const Navbar = () => {
  return (
    <Box bg="dark.600" borderTop={"3px solid"} borderColor="primary">
      <MyContainer>
        <Flex>
          <Flex gap="25px" alignItems="center" height={"85px"}>
            <MoreOptionsV2 />
            <Flex alignItems={"center"}>
              <ChkImage
                src={beskarLogo}
                alt="logo"
                width={{ xs: "38px", md: "65px" }}
                mr="15px"
              />

              <Heading
                as="h3"
                textTransform={"uppercase"}
                color="primary"
                fontSize={"md"}
                display={{ xs: "none", lg: "block" }}
              >
                Beskar{" "}
                <Box as="span" color="secondary">
                  play
                </Box>
              </Heading>
            </Flex>
            <Divider
              orientation="vertical"
              borderColor="dark.300"
              maxH={"45px"}
              mt="10px !important"
              display={{ xs: "none", lg: "block" }}
            />
            <Flex h={"full"} display={{ xs: "none", "1.5xl": "flex" }}>
              <Menu />
            </Flex>
          </Flex>
          <NavButtons />
        </Flex>
      </MyContainer>
    </Box>
  );
};

export default Navbar;
