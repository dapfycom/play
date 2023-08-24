import { Center, CheckboxGroup, Flex, Spinner, Text } from "@chakra-ui/react";
import Card from "components/Card/Card";

import { useAppSelector } from "hooks/useRedux";
import { selectConvertInfo } from "views/DustView/lib/dust-slice";
import { useSelectableDustTokens } from "views/DustView/lib/hooks";
import RowToken from "./RowToken";

const SelectTokens = () => {
  const selectedTokens = useAppSelector(selectConvertInfo);
  const { finalTokens, isLoading } = useSelectableDustTokens();

  return (
    <Card
      as={Flex}
      flexDir={"column"}
      gap={"17px"}
      py={5}
      maxH="500px"
      overflow={"auto"}
      rounded="xl"
      px={{ xs: "12px", md: "20px" }}
    >
      {isLoading ? (
        <Center w="full" minH="400px">
          <Spinner />
        </Center>
      ) : (
        <CheckboxGroup
          colorScheme="green"
          value={selectedTokens.map((item) => item.identifier)}
        >
          {finalTokens.map((token) => {
            return <RowToken key={token.identifier} token={token} />;
          })}

          {finalTokens.length === 0 && (
            <Center w="full" minH="200px">
              <Text fontSize={"xl"}>No tokens found</Text>
            </Center>
          )}
        </CheckboxGroup>
      )}
    </Card>
  );
};

export default SelectTokens;
