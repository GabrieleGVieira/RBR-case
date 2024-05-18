import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import getEmployees from "@/api/employees";
import { useDispatch } from "react-redux";
import { setEmployees } from "@/redux/actions";

const FilterInput: React.FC = () => {
  // Filtros Existentes
  const menuItems = [
    { label: "Nome", value: "name" },
    { label: "Cargo", value: "jobTitle" },
    { label: "Departamento", value: "department" },
  ];

  // constantes para armazenar filtros

  const [selectedFilter, setSelectedFilter] = useState<string>("name");
  const [searchText, setSearchText] = useState<string>("");

  // endpoint config
  const dispatch = useDispatch();

  const getEmployeesData = async () => {
    const filter = searchText ? { [selectedFilter]: searchText } : {};
    const data = await getEmployees(filter);
    if (data) {
      console.log(data);
      dispatch(setEmployees(data));
    }
  };

  useEffect(() => {
    getEmployeesData();
  }, []);

  // Mudar tipo de filtro
  const handleMenuItemClick = (filter: string) => {
    setSelectedFilter(filter);
  };

  // Fazer Busca

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    getEmployeesData();
  };

  return (
    <InputGroup>
      <InputLeftAddon>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {menuItems.find((item) => item.value === selectedFilter)?.label}
          </MenuButton>
          <MenuList>
            {menuItems.map((item) => (
              <MenuItem
                key={item.value}
                onClick={() => handleMenuItemClick(item.value)}
              >
                {item.label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </InputLeftAddon>
      <Input onChange={handleInputChange} />
      <Button onClick={handleSearch}>Buscar</Button>
    </InputGroup>
  );
};

export default FilterInput;
