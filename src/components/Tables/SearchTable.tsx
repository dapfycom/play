import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  BoxProps,
  Button,
  Flex,
  Input,
  Select,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import ActionButton from "components/ActionButton/ActionButton";
import { useMemo } from "react";

import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

interface IProps {
  columnsData: any[];
  tableData: any[];
  notShowEntriesText?: boolean;
  notShowPagination?: boolean;
  notShowEntriesAndSearch?: boolean;
  tableWrapperProps?: BoxProps;
}

function SearchTable(props: IProps) {
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: {
        pageSize: 8,
      },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    gotoPage,
    pageCount,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    setPageSize,
    setGlobalFilter,
    state,
  } = tableInstance;

  const createPages = (count) => {
    const arrPageCount = [];

    for (let i = 1; i <= count; i++) {
      arrPageCount.push(i);
    }

    return arrPageCount;
  };

  const { pageIndex, pageSize } = state;

  return (
    <>
      <Flex
        direction="column"
        w="100%"
        overflowX={{ sm: "auto", lg: "hidden" }}
        overflow="auto"
      >
        {!props.notShowEntriesAndSearch && (
          <Flex
            justify="space-between"
            align="center"
            w="100%"
            px={{ xs: "15px", lg: "22px" }}
            bg="black.light"
            borderRadius={"lg"}
            mb="10px"
            py="15px"
          >
            <Stack
              direction={{ sm: "column", md: "row" }}
              spacing={{ sm: "4px", md: "12px" }}
              align="center"
              minW={{ sm: "100px", md: "200px" }}
            >
              <Select
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
                border="0.5px solid"
                borderRadius="15px"
                size="sm"
                maxW="75px"
                cursor="pointer"
              >
                <option>8</option>
                <option>15</option>
                <option>20</option>
                <option>25</option>
              </Select>
              <Text
                fontSize="sm"
                color="white.400"
                display={{ xs: "none", md: "block" }}
              >
                entries per page
              </Text>
            </Stack>
            <Flex
              maxW="188px"
              w="full"
              minW="75px"
              p="10px 20px"
              borderRadius="md"
              fontSize="md"
              alignItems={"center"}
              gap="10px"
            >
              <SearchIcon />
              <Input
                variant={"unstyled"}
                type="text"
                placeholder="Search"
                w="full"
                _focus={{ borderColor: "main" }}
                _placeholder={{ color: "rgba(255, 255, 255, 0.15)" }}
                onChange={(e) => setGlobalFilter(e.target.value)}
              />
            </Flex>
          </Flex>
        )}
        <TableWrapperS
          borderRadius={"lg"}
          p={{ xs: "30px 10px", md: "30px" }}
          overflow="auto"
          {...props.tableWrapperProps}
        >
          <Table
            {...getTableProps()}
            variant="unstyled"
            mb="24px"
            sx={{
              borderCollapse: "separate",
              borderSpacing: "0 10px",
            }}
          >
            <Thead>
              {headerGroups.map((headerGroup, index) => (
                <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
                  {headerGroup.headers.map((column, index) => (
                    <Th
                      px={{ xs: "10px !important", md: "auto" }}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      key={index}
                    >
                      <Flex
                        align="center"
                        fontSize={{ sm: "sm", lg: "md" }}
                        textTransform="capitalize"
                        color="white.400"
                        fontWeight={"400"}
                        whiteSpace="nowrap"
                      >
                        {column.render("Header")}
                      </Flex>
                    </Th>
                  ))}
                </Tr>
              ))}
            </Thead>

            <Tbody {...getTableBodyProps()}>
              {page.map((row, index) => {
                prepareRow(row);
                return (
                  <Tr {...row.getRowProps()} key={index} borderRadius={"md"}>
                    {row.cells.map((cell, index) => {
                      return (
                        <Td
                          {...cell.getCellProps()}
                          px={{ xs: "10px !important", md: "20px !important" }}
                          key={index}
                        >
                          {cell.render("Cell")}
                        </Td>
                      );
                    })}
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
          <Flex
            direction={{ sm: "column", md: "row" }}
            justify="space-between"
            align="center"
            w="100%"
            px={{ md: "22px" }}
          >
            {!props.notShowEntriesText && (
              <Text
                fontSize="sm"
                fontWeight="500"
                mb={{ sm: "24px", md: "0px" }}
              >
                Showing {pageSize * pageIndex + 1} to{" "}
                {pageSize * (pageIndex + 1) <= tableData.length
                  ? pageSize * (pageIndex + 1)
                  : tableData.length}{" "}
                of {tableData.length} entries
              </Text>
            )}
            <Stack direction="row" alignSelf="flex-end" spacing="4px" ms="auto">
              <Button
                variant="no-hover"
                onClick={() => previousPage()}
                transition="all .5s ease"
                w="40px"
                h="40px"
                borderRadius="50%"
                bg="#fff"
                border="1px solid lightgray"
                display={
                  pageSize === 8 ? "none" : canPreviousPage ? "flex" : "none"
                }
                _hover={{
                  bg: "gray.200",
                  opacity: "0.7",
                  borderColor: "gray.500",
                }}
                aria-label="previous"
              >
                {/* <Icon as={GrFormPrevious} w="16px" h="16px" /> */}
              </Button>
              {!props.notShowPagination && (
                <>
                  {createPages(pageCount).map((pageNumber, index) => {
                    return (
                      <ActionButton
                        variant="no-hover"
                        transition="all .5s ease"
                        onClick={() => gotoPage(pageNumber - 1)}
                        w="40px"
                        h="40px"
                        bg={"black.baseDark"}
                        key={index}
                        aria-label={"page " + pageNumber}
                      >
                        <Text
                          fontSize="15px"
                          fontWeight={"500"}
                          color={
                            pageNumber === pageIndex + 1 ? "main" : "white"
                          }
                        >
                          {pageNumber}
                        </Text>
                      </ActionButton>
                    );
                  })}
                </>
              )}
              <ActionButton
                variant="no-hover"
                onClick={() => nextPage()}
                transition="all .5s ease"
                w="40px"
                h="40px"
                display={
                  pageSize === 8 ? "none" : canNextPage ? "flex" : "none"
                }
                aria-label="next"
              >
                {/* <Icon as={GrFormNext} w="16px" h="16px" /> */}
              </ActionButton>
            </Stack>
          </Flex>
        </TableWrapperS>
      </Flex>
    </>
  );
}

export default SearchTable;

const TableWrapperS = styled(Box)`
  tr:nth-of-type(n) td:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-left: 20px;

    padding-right: 40px;
  }
  tr:nth-of-type(n) td:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-right: 48px;
    padding-left: 40px;
  }
  tr:nth-of-type(n) th:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-left: 20px;

    padding-right: 40px;
  }
  tr:nth-of-type(n) th:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-right: 48px;
    padding-left: 40px;
  }
`;
