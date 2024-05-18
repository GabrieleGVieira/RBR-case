// pages/index.tsx

import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftAddon,
  Menu,
  MenuButton,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import EmployeeTable from "../components/Table";
import { useEffect, useState } from "react";
import { getEmployees } from "../api/employees";
import FilterInput from "@/components/FilterInput";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import { setEmployees } from "@/redux/actions";
import CreateModal from "@/components/CreateModal";

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
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={5}
      align="stretch"
    >
      <Container maxW="100%" bg="gray.600" color="white">
        <Box h="50px">Funcionarios</Box>
      </Container>
      <Container maxW="90%">
        <Box h="40px">
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            <GridItem colSpan={2} h="10">
              <FilterInput />
            </GridItem>
            <GridItem colStart={4} colEnd={6} h="10">
              <Button onClick={() => setIsOpen(true)}>Adicionar Usuario</Button>
            </GridItem>
          </Grid>
        </Box>
      </Container>
      <Container maxW="90%">
        <Box h="40px">
          <EmployeeTable data={employees_data.employees} />
        </Box>
      </Container>
      {isOpen && <CreateModal onCloseModal={() => setIsOpen(false)} />}
    </VStack>
  );
};

export default Home;
