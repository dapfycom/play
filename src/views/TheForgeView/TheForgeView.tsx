import {
  Box,
  Center,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import ActionButton from "components/ActionButton/ActionButton";
import MyContainer from "components/Container/Container";
import { RingIcon } from "components/icons/ui-icons";
import FireLeft from "./commons/FireLeft";
import FireRight from "./commons/FireRight";
import ForgeCard from "./commons/ForgeCard";

const TheForgeView = () => {
  return (
    <Box position={"relative"}>
      <Box display={{ xs: "none", "2xl": "block" }}>
        <FireLeft />
        <FireRight />
      </Box>
      <MyContainer mb="150px">
        <Center flexDir={"column"} w="full" gap="30px">
          <ForgeCard>
            <Heading as="h2" color="white" mb="20px" fontSize={"28px"}>
              Beskar Forge
            </Heading>
            <Stack spacing={"30px"} mb="50px" fontSize={"lg"}>
              <Text fontSize={"28px"}>
                Sell your $BSK with NO PRICE IMPACT and make the DAO stronger
                while doing so!
              </Text>
              <Text>
                Welcome to the{" "}
                <Box as="span" color="white">
                  $BSK
                </Box>{" "}
                forge Portal! We’re excited to see you here. This burn portal is
                set to make it rewarding for users to regularly burn{" "}
                <Box as="span" color="white">
                  $BSK
                </Box>{" "}
                while effectively reducing its circulating supply.
              </Text>
              <Text>
                Burn{" "}
                <Box as="span" color="white">
                  $BSK
                </Box>
                , reduce its circulating supply, and generate passive income
                while doing so!
              </Text>
              <Text>
                No fees - The Forge will charge 0 fees + pay the transaction
                fees
              </Text>

              <Text>
                Burn $BSK, Reduce its circulating supply and Get rewarded
              </Text>
            </Stack>

            <Text color="primary" textDecor={"underline"}>
              learn More
            </Text>
          </ForgeCard>
          <ForgeCard gap="30px">
            <Center
              bg="#292C2F"
              borderRadius={"lg"}
              border={"1px"}
              borderColor="dark.300"
              px="50px"
              w="full"
            >
              <Stack
                divider={<StackDivider borderColor="dark.300" />}
                width="full"
              >
                <Center py="25px">
                  <Text fontSize={"lg"}>
                    Total burnt:{" "}
                    <Box as="span" color="white">
                      {" "}
                      2,442,597,894.2 bsk
                    </Box>
                  </Text>
                </Center>
                <Center py="25px">
                  <Text fontSize={"lg"}>
                    you burnt:
                    <Box as="span" color="white">
                      {" "}
                      0 bsk
                    </Box>
                  </Text>
                </Center>
                <Center pb="25px" pt="20px">
                  <Text fontSize={"lg"}>
                    you own:
                    <Box as="span" color="white" fontSize={"3xl"}>
                      {" "}
                      0.00%
                    </Box>{" "}
                    of the pool
                  </Text>
                </Center>
              </Stack>
            </Center>
            <Center
              bg="#292C2F"
              borderRadius={"lg"}
              border={"1px"}
              borderColor="dark.300"
              px="50px"
              w="full"
              flexDir={"column"}
              gap="30px"
              p="30px"
            >
              <Text fontSize={"lg"}>Collectable Egld</Text>
              <RingIcon fontSize={"36px"} />
              <Text fontSize={"13px"}>collected till now: 0 egld</Text>
              <ActionButton fontSize={"24px"} h="auto" py="15px" px="42px">
                Claim
              </ActionButton>
            </Center>

            <Center
              bg="#292C2F"
              borderRadius={"lg"}
              border={"1px"}
              borderColor="dark.300"
              px="50px"
              w="full"
              flexDir={"column"}
              gap="30px"
              p="30px"
            >
              <Center
                flexDir={"column"}
                gap="30px"
                px="25px"
                py="30px"
                bg="dark.800"
                borderRadius={"lg"}
                boxShadow="0px 4px 14px 10px rgba(0, 0, 0, 0.25)"
              >
                <Text fontSize={"lg"} mb="30px" color="white">
                  it looks like your $bsk balance is zero!
                </Text>
                <Text
                  color="primary"
                  fontSize={"lsm"}
                  textDecoration="underline"
                >
                  Click here to buy and burn $bsk
                </Text>
              </Center>
            </Center>
          </ForgeCard>
        </Center>
      </MyContainer>
    </Box>
  );
};

export default TheForgeView;
