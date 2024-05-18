// components/SimpleTable.tsx

import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

interface TableRow {
  id: number;
  name: string;
  email: string;
}

interface SimpleTableProps {
  data: TableRow[];
}

const CreateModal: React.FC<SimpleTableProps> = ({ data }) => {
  return (
    <Table variant="simple">
    </Table>
  );
};

export default CreateModal;
