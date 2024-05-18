import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Icon,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import EmployeeTable from "../components/Table";
import { useEffect, useState } from "react";
import { getEmployees } from "../api/employees";
import FilterInput from "@/components/FilterInput";
import { useDispatch, useSelector } from "react-redux";
import { setEmployees } from "@/redux/actions";
import CreateModal from "@/components/CreateModal";
import { AddIcon } from "@chakra-ui/icons";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const employees_data = useSelector((state: any) => state.employees);

  useEffect(() => {
    const getEmployeesData = async () => {
      const filter = {};
      const data = await getEmployees(filter);
      if (data) {
        dispatch(setEmployees(data));
      }
    };

    getEmployeesData();
  }, [dispatch]);

  // config Create Modal
  const [isOpen, setIsOpen] = useState(false);

  return (
    <VStack spacing={10} align="stretch">
      <Container maxW="100%" color="#dde3eb" bg="#041e49">
        <Box h="50px" textAlign="center">
          <Text fontSize="2xl" as="b">
            Controle de Funcionários
          </Text>
        </Box>
      </Container>
      <Container maxW="90%" color="#171113">
        <Box h="40px">
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            <GridItem colSpan={2} h="10">
              <FilterInput />
            </GridItem>
            <GridItem colStart={4} colEnd={6} h="10">
              <Button leftIcon={<AddIcon />} onClick={() => setIsOpen(true)}>
                Adicionar Funcionário
              </Button>
            </GridItem>
          </Grid>
        </Box>
      </Container>
      <Container maxW="90%" color="#171113">
        <Box h="40px">
          <EmployeeTable data={employees_data.employees} />
        </Box>
      </Container>
      {isOpen && <CreateModal onCloseModal={() => setIsOpen(false)} />}
    </VStack>
  );
};

export default Home;
