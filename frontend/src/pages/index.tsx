
import {
  Box,
  Input,
  InputGroup,
  InputLeftAddon,
  Menu,
  MenuButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import EmployeeTable from "../components/Table";
import { useEffect, useState } from "react";
import { getEmployees } from "../api/employees";
import FilterInput from "@/components/FilterInput";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import { setEmployees } from "@/redux/actions";

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
  return (
    <Stack>
      <FilterInput />
      <EmployeeTable data={employees_data.employees} />
    </Stack>
  );
};

export default Home;
