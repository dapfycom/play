import {
  Box,
  Center,
  CenterProps,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import MyContainer from "components/Container/Container";
import SocialButton from "components/SocialButton/SocialButton";
import { TelegramIcon, TwitterIcon } from "components/icons/ui-icons";

const Footer = () => {
  return (
    <Box as="footer" pt={"50px"}>
      <MyContainer>
        <Flex
          w="full"
          justifyContent={"space-between"}
          mb="40px"
          flexDir={{ xs: "column", md: "row" }}
        >
          <Flex
            gap="15px"
            alignItems={"center"}
            mb={{ xs: "70px", md: "0" }}
            justifyContent="center"
          >
            {/* <ChkImage
              src={beskarLogo}
              alt="logo"
              width={{ xs: "50px", "2xl": "80px" }}
              mr="15px"
            /> */}
            <Heading
              as="h6"
              fontSize={{ xs: "32px", lg: "40px" }}
              color="primary"
            >
              xBeskar{" "}
            </Heading>
          </Flex>

          <Flex flexDir={"column"}>
            <Heading
              as="h6"
              mb="30px"
              fontSize={{ xs: "md", lg: "lg" }}
              color="white"
              textAlign="center"
            >
              Social Networks
            </Heading>
            <Flex gap="20px" justifyContent={"center"}>
              <SocialButton
                ariaLabel="twitter"
                icon={<TwitterIcon fontSize={"24px"} />}
                as={Link}
                /* @ts-ignore */
                isExternal
                href="https://x.com/xBeskar"
              />
              {/* <SocialButton
                ariaLabel="discord"
                icon={<DiscordIcon fontSize={"24px"} />}
              /> */}
              <SocialButton
                ariaLabel="telegram"
                icon={<TelegramIcon fontSize={"24px"} />}
                as={Link}
                /* @ts-ignore */
                isExternal
                href="https://t.me/xBeskar"
              />
            </Flex>
          </Flex>
        </Flex>

        {/* <Line mb={"57px"} /> */}

        {/* <Flex mb="20px" flexDir={{ xs: "column", "2xl": "row" }}>
          <Flex flexDir={{ xs: "column", lg: "row" }}>
            <Box
              mr={{ xs: "0", lg: "50px" }}
              mb={{ xs: "50px", "2xl": "0" }}
              w="full"
              maxW={{ xs: "full", lg: "180px" }}
            >
              <Nav />
            </Box>
            <Box flex={1} display={{ xs: "block", lg: "none" }} mb={"30px"}>
              <JoinTelegram />
            </Box>

            <Flex
              gap={{ xs: "30px", lg: "22px" }}
              mr={{ xs: "0", lg: "43px" }}
              mb={{ xs: "30px", "2xl": "0" }}
              flexDir={{ xs: "column", lg: "row" }}
              textAlign={{ xs: "center", lg: "initial" }}
              justifyContent="center"
            >
              <Box display={{ xs: "block", "2xl": "none" }}>
                <JoinedDisclaimer />
              </Box>

              <Flex display={{ xs: "none", "2xl": "flex" }}>
                <Disclaimer1 />
                <Disclaimer2 />
              </Flex>
            </Flex>
          </Flex>

          <Box flex={1} display={{ xs: "none", lg: "block" }}>
            <JoinTelegram />
          </Box>
        </Flex> */}

        <Center mb="30px">
          <Text textAlign="center" maxW="463.5px">
            xBeskar © {new Date().getFullYear()}. All rights reserved.
          </Text>
        </Center>

        <Line mb="30px" />
        <Text align={"center"}>Build 0xA </Text>
      </MyContainer>
    </Box>
  );
};

export default Footer;

const Line = ({ ...props }: CenterProps) => {
  return (
    <Center w="full" {...props}>
      <Box
        w="60%"
        h="1px"
        bg="linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, rgb(224, 225, 226) 49.52%, rgba(224, 225, 226, 0) 100%)"
      ></Box>
    </Center>
  );
};
