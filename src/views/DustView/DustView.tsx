import { Box, Center } from "@chakra-ui/react";
import { MetaHead } from "components/MetaHead/MetaHead";
import MoonDustXCard from "./components/ConvertCard/MoonDustXCard";

const DustView = () => {
  return (
    <>
      <MetaHead metaTitle="Dust" />
      <Center>
        <Box maxW={"750px"} w="80%">
          <MoonDustXCard />
        </Box>
      </Center>
    </>
  );
};

export default DustView;
