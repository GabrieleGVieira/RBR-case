import { HamburgerIcon } from "@chakra-ui/icons";
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
  MenuList,
  MenuItem,
  useToast,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { deleteEmployee, getEmployees } from "../api/employees";
import { useState } from "react";
import { setEmployees } from "@/redux/actions";
import ErrorAlertModal from "./ErrorAlertModal";
import { useDispatch } from "react-redux";
import UpdateModal from "./UpdateModal";

interface TableRow {
  _id: string;
  name: string;
  jobTitle: string;
  department: string;
  dtAdmission: string;
}

interface SimpleTableProps {
  data: TableRow[];
}

const EmployeeTable: React.FC<SimpleTableProps> = ({ data }) => {

  const toast = useToast();
  const dispatch = useDispatch();

  // config update Modal

    const [isUpdateModalOpen, setOpenUpdateModal] = useState(false);
   const [idForUpdate, setIdForUpdate] = useState("");


  // config Alert Modal
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // update function

  function updateEmployee(id: string) {
    setOpenUpdateModal(true)
    setIdForUpdate(id)
  }

  // delete function 

  const deleteEmployeeData = async (id: string) => {
    try {
      await deleteEmployee(id);
      await getEmployeesData();
      toast({
        title: "Funcionáio deletado com sucesso",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error: any) {
      setIsOpen(true);
      setErrorMessage(error);
      return error;
    }
  };

  const getEmployeesData = async () => {
    const filter = {};
    const data = await getEmployees(filter);
    dispatch(setEmployees(data));
  };


  return (
    <Box>
      <Table variant="simple">
        <Thead bg="#041e49">
          <Tr>
            <Th color="#dde3eb">Name</Th>
            <Th color="#dde3eb">Cargo</Th>
            <Th color="#dde3eb">Departamento</Th>
            <Th color="#dde3eb">Data de Admissão</Th>
            <Th color="#dde3eb"> Ações</Th>
          </Tr>
        </Thead>
        {data.length > 0 ? (
          <Tbody>
            {data.map((row) => (
              <Tr key={row._id}>
                <Td>{row.name}</Td>
                <Td>{row.jobTitle}</Td>
                <Td>{row.department}</Td>
                <Td>{row.dtAdmission}</Td>
                <Td>
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      aria-label="Options"
                      icon={<HamburgerIcon />}
                      variant="outline"
                    />
                    <MenuList>
                      <MenuItem onClick={() => updateEmployee(row._id)}>
                        Editar
                      </MenuItem>
                      <MenuItem onClick={() => deleteEmployeeData(row._id)}>
                        Deletar
                      </MenuItem>
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
      {isOpen && (
        <ErrorAlertModal
          onCloseModal={() => setIsOpen(false)}
          message={errorMessage}
        />
      )}
      {isUpdateModalOpen && (
        <UpdateModal
          id={idForUpdate}
          onCloseModal={() => setOpenUpdateModal(false)}
        />
      )}
    </Box>
  );
};

export default EmployeeTable;
