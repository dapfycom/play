import { Box, Grid, GridItem, SimpleGrid, Stack } from "@chakra-ui/react";
import MyContainer from "components/Container/Container";
import { MetaHead } from "components/MetaHead/MetaHead";
import ChooseBetSection from "./common/ChooseBetSection/ChooseBetSection";
import Coin from "./common/GameSection/common/Coin";
import GameActions from "./common/GameSection/common/GameActions";
import StatsSection from "./common/StatsSection/StatsSection";
import TableSection from "./common/TableSection/TableSection";

const CoinFlipView = () => {
  return (
    <>
      <MetaHead metaTitle="Coin Flip" />

      <MyContainer mb={"80px"}>
        <SimpleGrid
          columns={{ xs: 1, "3xl": 2 }}
          columnGap="20px"
          rowGap={"40px"}
        >
          <SimpleGrid columns={{ xs: 1, md: 2 }} gap="20px">
            <Stack gap={"20px"}>
              <Coin />
              <GameActions />
            </Stack>
            <Box>
              <ChooseBetSection />
            </Box>
          </SimpleGrid>
          <Grid templateColumns={{ xs: "1fr", lg: "1fr 2fr" }} gap="20px">
            <GridItem>
              <StatsSection />
            </GridItem>
            <GridItem
              overflow={"auto"}
              sx={
                {
                  //   scrollbarWidth: "none",
                  //   "& ::-webkit-scrollbar": {
                  //     display: "none",
                  //   },
                  //   msOverflowStyle: "none",
                }
              }
            >
              <TableSection />
            </GridItem>
          </Grid>
        </SimpleGrid>
      </MyContainer>
    </>
  );
};

export default CoinFlipView;
