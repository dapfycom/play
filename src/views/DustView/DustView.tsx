import { Box, Center } from "@chakra-ui/react";
import MoonDustXCard from "./components/ConvertCard/MoonDustXCard";

const DustView = () => {
  return (
    <Center>
      <Box maxW={"750px"} w="80%">
        <MoonDustXCard />
      </Box>
    </Center>
  );
};

export default DustView;
