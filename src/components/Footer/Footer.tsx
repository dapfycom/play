import {
  Box,
  Center,
  CenterProps,
  Flex,
  Heading,
  Image as ChkImage,
  Text,
} from "@chakra-ui/react";
import beskarLogo from "assets/images/logo/beskar.svg";
import MyContainer from "components/Container/Container";
import {
  DiscordIcon,
  TelegramIcon,
  TwitterIcon,
} from "components/icons/ui-icons";
import SocialButton from "components/SocialButton/SocialButton";
import Disclaimer1, { Disclaimer2 } from "./commons/Disclaimer/Disclaimer";
import JoinTelegram from "./commons/JoinTelegram";
import Nav from "./commons/Nav";

const Footer = () => {
  return (
    <Box as="footer">
      <MyContainer>
        <Flex w="full" justifyContent={"space-between"} mb="40px">
          <Flex gap="15px" alignItems={"center"}>
            <ChkImage src={beskarLogo} alt="logo" width={"65px"} mr="15px" />
            <Heading as="h6" fontSize={"40px"} color="primary">
              Beskar{" "}
              <Box as="span" color="secondary">
                play
              </Box>{" "}
            </Heading>
          </Flex>

          <Flex flexDir={"column"}>
            <Heading as="h6" mb="30px" fontSize={"md"} color="white">
              Social Networks
            </Heading>
            <Flex gap="20px">
              <SocialButton
                ariaLabel="twitter"
                icon={<TwitterIcon fontSize={"24px"} />}
              />
              <SocialButton
                ariaLabel="discord"
                icon={<DiscordIcon fontSize={"24px"} />}
              />
              <SocialButton
                ariaLabel="telegram"
                icon={<TelegramIcon fontSize={"24px"} />}
              />
            </Flex>
          </Flex>
        </Flex>

        <Line mb={"57px"} />

        <Flex mb="20px">
          <Box mr="50px">
            <Nav />
          </Box>

          <Flex gap="22px" mr="43px">
            <Disclaimer1 />
            <Disclaimer2 />
          </Flex>

          <Box flex={1}>
            <JoinTelegram />
          </Box>
        </Flex>
        <Center mb="30px">
          <Text fontSize={"lsm"} textAlign="center" maxW="463.5px">
            BeskarDAO © 2022. All rights reserved.
          </Text>
        </Center>

        <Line mb="30px" />
        <Text align={"center"}>Build @1</Text>
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
