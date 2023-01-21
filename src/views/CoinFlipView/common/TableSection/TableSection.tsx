import {
  Divider,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Card from "components/Card/Card";

const TableSection = () => {
  return (
    <Card w="full" py="30px" px="0px" h={"592px"} overflowX={"auto"}>
      <Flex
        justify={"space-between"}
        px="30px"
        mb={5}
        flexDir={{ xs: "column", md: "row" }}
        gap={3}
      >
        <Text
          fontSize={"sm"}
          color="white"
          display="flex"
          alignItems={"center"}
        >
          Last 100 games
        </Text>

        <Flex
          fontSize={"8px"}
          borderRadius={"full"}
          overflow="hidden"
          color="white"
          bg="dark.600"
          boxShadow={"inset 0 0 0 1px #34383C"}
          alignItems="center"
          w="fit-content"
        >
          <Flex
            bg="primary"
            px="25px"
            py="10px"
            borderRadius={"full"}
            cursor="pointer"
          >
            All bets
          </Flex>
          <Flex px="25px" py="10px" borderRadius={"full"} cursor="pointer">
            Your bets
          </Flex>
        </Flex>
      </Flex>
      <Divider borderColor="dark.300" />
      <TableContainer fontSize={"xs"} overflowY="auto" overflowX={"auto"}>
        <Table variant="simple" overflowX={"auto"}>
          <Thead>
            <Tr>
              <Th px={"10px"} py={"12px"}>
                Players
              </Th>
              <Th px={"10px"} py={"12px"}>
                Txn
              </Th>
              <Th px={"10px"} py={"12px"}>
                Amount
              </Th>
              <Th px={"10px"} py={"12px"}>
                Choice
              </Th>
              <Th px={"10px"} py={"12px"}>
                Result
              </Th>
              <Th px={"10px"} py={"12px"}>
                Payoff
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td px={"10px"} color="primary">
                0xfab4g...
              </Td>
              <Td px={"10px"}>0xfab4g...</Td>
              <Td px={"10px"}>504 CRO</Td>
              <Td px={"10px"}>Heads</Td>
              <Td px={"10px"}>Heads</Td>
              <Td px={"10px"}>364.32 CRO</Td>
            </Tr>
            <Tr>
              <Td px={"10px"} color="primary">
                0xfab4g...
              </Td>
              <Td px={"10px"}>0xfab4g...</Td>
              <Td px={"10px"}>504 CRO</Td>
              <Td px={"10px"}>Heads</Td>
              <Td px={"10px"}>Heads</Td>
              <Td px={"10px"}>364.32 CRO</Td>
            </Tr>
            <Tr>
              <Td px={"10px"} color="primary">
                0xfab4g...
              </Td>
              <Td px={"10px"}>0xfab4g...</Td>
              <Td px={"10px"}>504 CRO</Td>
              <Td px={"10px"}>Heads</Td>
              <Td px={"10px"}>Heads</Td>
              <Td px={"10px"}>364.32 CRO</Td>
            </Tr>
            <Tr>
              <Td px={"10px"} color="primary">
                0xfab4g...
              </Td>
              <Td px={"10px"}>0xfab4g...</Td>
              <Td px={"10px"}>504 CRO</Td>
              <Td px={"10px"}>Heads</Td>
              <Td px={"10px"}>Heads</Td>
              <Td px={"10px"}>364.32 CRO</Td>
            </Tr>
            <Tr>
              <Td px={"10px"} color="primary">
                0xfab4g...
              </Td>
              <Td px={"10px"}>0xfab4g...</Td>
              <Td px={"10px"}>504 CRO</Td>
              <Td px={"10px"}>Heads</Td>
              <Td px={"10px"}>Heads</Td>
              <Td px={"10px"}>364.32 CRO</Td>
            </Tr>
            <Tr>
              <Td px={"10px"} color="primary">
                0xfab4g...
              </Td>
              <Td px={"10px"}>0xfab4g...</Td>
              <Td px={"10px"}>504 CRO</Td>
              <Td px={"10px"}>Heads</Td>
              <Td px={"10px"}>Heads</Td>
              <Td px={"10px"}>364.32 CRO</Td>
            </Tr>
            <Tr>
              <Td px={"10px"} color="primary">
                0xfab4g...
              </Td>
              <Td px={"10px"}>0xfab4g...</Td>
              <Td px={"10px"}>504 CRO</Td>
              <Td px={"10px"}>Heads</Td>
              <Td px={"10px"}>Heads</Td>
              <Td px={"10px"}>364.32 CRO</Td>
            </Tr>
            <Tr>
              <Td px={"10px"} color="primary">
                0xfab4g...
              </Td>
              <Td px={"10px"}>0xfab4g...</Td>
              <Td px={"10px"}>504 CRO</Td>
              <Td px={"10px"}>Heads</Td>
              <Td px={"10px"}>Heads</Td>
              <Td px={"10px"}>364.32 CRO</Td>
            </Tr>
            <Tr>
              <Td px={"10px"} color="primary">
                0xfab4g...
              </Td>
              <Td px={"10px"}>0xfab4g...</Td>
              <Td px={"10px"}>504 CRO</Td>
              <Td px={"10px"}>Heads</Td>
              <Td px={"10px"}>Heads</Td>
              <Td px={"10px"}>364.32 CRO</Td>
            </Tr>
            <Tr>
              <Td px={"10px"} color="primary">
                0xfab4g...
              </Td>
              <Td px={"10px"}>0xfab4g...</Td>
              <Td px={"10px"}>504 CRO</Td>
              <Td px={"10px"}>Heads</Td>
              <Td px={"10px"}>Heads</Td>
              <Td px={"10px"}>364.32 CRO</Td>
            </Tr>
            <Tr>
              <Td px={"10px"} color="primary">
                0xfab4g...
              </Td>
              <Td px={"10px"}>0xfab4g...</Td>
              <Td px={"10px"}>504 CRO</Td>
              <Td px={"10px"}>Heads</Td>
              <Td px={"10px"}>Heads</Td>
              <Td px={"10px"}>364.32 CRO</Td>
            </Tr>
            <Tr>
              <Td px={"10px"} color="primary">
                0xfab4g...
              </Td>
              <Td px={"10px"}>0xfab4g...</Td>
              <Td px={"10px"}>504 CRO</Td>
              <Td px={"10px"}>Heads</Td>
              <Td px={"10px"}>Heads</Td>
              <Td px={"10px"}>364.32 CRO</Td>
            </Tr>
            <Tr>
              <Td px={"10px"} color="primary">
                0xfab4g...
              </Td>
              <Td px={"10px"}>0xfab4g...</Td>
              <Td px={"10px"}>504 CRO</Td>
              <Td px={"10px"}>Heads</Td>
              <Td px={"10px"}>Heads</Td>
              <Td px={"10px"}>364.32 CRO</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default TableSection;
