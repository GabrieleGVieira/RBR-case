// pages/index.tsx

import { Box, Text } from "@chakra-ui/react";
import EmployeeTable from "../components/Table";
import { useEffect, useState } from "react";
import getEmployees from "../api/employees";

const data = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

const Home: React.FC = () => {
  const [employees, setEmployees] = useState<any[]>([]);

  useEffect(() => {
    const getEmployeesData = async () => {

      const filter = {}
      const data = await getEmployees(filter);
      if (data) {
        console.log(data)
        setEmployees(data);
      }
    };

    getEmployeesData();
  }, []);
  return (
      <EmployeeTable data={employees} />

  );
};

export default Home;
