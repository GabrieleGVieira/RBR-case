import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Text,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem
} from "@chakra-ui/react";

interface TableRow {
  id: number;
  name: string;
  jobTitle: string;
  department: string
}

interface SimpleTableProps {
  data: TableRow[];
}

const EmployeeTable: React.FC<SimpleTableProps> = ({ data }) => {
  return (
    <Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Cargo</Th>
            <Th>Departamento</Th>
          </Tr>
        </Thead>
        {data.length > 0 ? (
          <Tbody>
            {data.map((row) => (
              <Tr key={row.id}>
                <Td>{row.name}</Td>
                <Td>{row.jobTitle}</Td>
                <Td>{row.department}</Td>
                <Td>
                  <Menu>
                    <MenuButton as={Button}>
                      Ações
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Editar</MenuItem>
                      <MenuItem>Deletar</MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            ))}
          </Tbody>
        ) : (
          <Text>No data available</Text>
        )}
      </Table>
    </Box>
  );
};

export default EmployeeTable;
