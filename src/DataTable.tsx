import * as React from 'react';
import {
  VStack,
  UnorderedList,
  ListItem,
  Heading,
  Container,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  TableCaption,
} from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { useTable, useSortBy, Column } from 'react-table';

/**
 * code copied from
 * https://chakra-ui.com/guides/integrations/with-react-table and
 * https://codesandbox.io/s/chakra-ui-data-table-vfivp?file=/src/DataTable.tsx:0-1966
 */

type UnitConversion = {
  fromUnit: string;
  toUnit: string;
  factor: number;
};

export const data: UnitConversion[] = [
  {
    fromUnit: 'inches',
    toUnit: 'millimetres (mm)',
    factor: 25.4,
  },
  {
    fromUnit: 'feet',
    toUnit: 'centimetres (cm)',
    factor: 30.48,
  },
  {
    fromUnit: 'yards',
    toUnit: 'metres (m)',
    factor: 0.91444,
  },
];

// see https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-table
// to configure react-table typings
export const columns: Column<UnitConversion>[] = [
  {
    Header: 'To convert',
    accessor: 'fromUnit',
  },
  {
    Header: 'Into',
    accessor: 'toUnit',
  },
  {
    Header: 'Multiply by',
    accessor: 'factor',
    isNumeric: true,
  },
];

export type DataTableProps<Data extends object> = {
  data: Data[];
  columns: Column<Data>[];
};

export default function DataTable<Data extends object>({
  data,
  columns,
}: DataTableProps<Data>) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <VStack spacing={5}>
      <Heading>Data Table</Heading>
        <Container>
          Default accessibility:
          <UnorderedList>
            <ListItem>Table has role of table</ListItem>
            <ListItem>maybe more idk???</ListItem>
          </UnorderedList>
        </Container>
      <Container bg='white' padding='10px'>
        <Table {...getTableProps()}>
          <TableCaption>Imperial to metric conversion factors</TableCaption>

          <Thead>
            {headerGroups.map(headerGroup => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <Th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    isNumeric={column.isNumeric}>
                    {column.render('Header')}
                    <chakra.span pl='4'>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <TriangleDownIcon aria-label='sorted descending' />
                        ) : (
                          <TriangleUpIcon aria-label='sorted ascending' />
                        )
                      ) : null}
                    </chakra.span>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <Td
                      {...cell.getCellProps()}
                      isNumeric={cell.column.isNumeric}>
                      {cell.render('Cell')}
                    </Td>
                  ))}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Container>
    </VStack>
  );
}
