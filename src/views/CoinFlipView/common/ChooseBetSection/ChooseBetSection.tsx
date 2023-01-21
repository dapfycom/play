import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Card from "components/Card/Card";

//bet options
const betOptions = [1, 2, 3, 5, 10, 20, 100, 150, 200, 300, 400, 500, 100];

const ChooseBetSection = () => {
  return (
    <Card px="15px" py="30px" w="full">
      <Flex mb={3}>
        <Text fontSize={"sm"} color="white">
          1. Choose your bet
        </Text>
      </Flex>
      <Card
        flexDir={"row"}
        justify="space-between"
        fontSize={"xs"}
        px={"15px"}
        py="12px"
        borderRadius={"md"}
        mb={4}
      >
        <Text>Balance:</Text>
        <Text color="primary">2500000 BSK</Text>
      </Card>

      <Grid templateColumns={"repeat(2, 1fr)"} rowGap={"12px"} columnGap="15px">
        {betOptions.map((bet, i) => {
          return (
            <GridItem key={bet} colSpan={betOptions.length - 1 === i ? 2 : 1}>
              <Card
                key={bet}
                px={"15px"}
                py="15px"
                align="center"
                color="white"
                fontSize={"sm"}
                borderRadius={"md"}
              >
                {bet}
              </Card>
            </GridItem>
          );
        })}
      </Grid>
    </Card>
  );
};

export default ChooseBetSection;
