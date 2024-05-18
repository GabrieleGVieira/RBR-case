import { createEmployee, getEmployees } from "@/api/employees";
import { setEmployees } from "@/redux/actions";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import ErrorAlertModal from "./ErrorAlertModal";

interface ModalParams {
  onCloseModal: () => void;
}

const CreateModal: React.FC<ModalParams> = ({ onCloseModal }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const requestOpen = [];

  // endpoint de get para atualizar

  const getEmployeesData = async () => {
    const filter = {};
    const data = await getEmployees(filter);
    dispatch(setEmployees(data));
  };

  // config Alert Modal
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Abrir Modal
  const [isOpen, setIsOpen] = useState(true);

  function onClose() {
    setIsOpen(false);
    onCloseModal();
  }

  // validar campos

  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [dtAdmission, setDtAdmission] = useState();

  // funcao que valida caracters
  function validatedInput(value: string) {
    const invalidCharactersRegex = /[^a-zA-Z\u00C0-\u017F\s_]/g;
    const hasError = invalidCharactersRegex.test(value);
    return hasError;
  }

  // Campo Name
  const handleNameChange = (e: any) => setName(e.target.value);

  const isErrorName = validatedInput(name);

  // Campo Cargo
  const handleJobTitleChange = (e: any) => setJobTitle(e.target.value);

  const isErrorJobTitle = validatedInput(jobTitle);

  // Campo Departamento
  const handleDepartmentChange = (e: any) => setDepartment(e.target.value);

  const isErrorDepartment = validatedInput(department);

  // Campo Data Admissao

  const handleDtAdmissionChange = (e: any) => setDtAdmission(e.target.value);

  // montar objeto novo funcionario
  const [newEmployee] = useState<{ [key: string]: any }>({});
  function setNewEmployeeDict() {
    const data = { ...newEmployee };

    if (name) {
      data["name"] = name;
    }

    if (department) {
      data["department"] = department;
    }
    if (jobTitle) {
      data["jobTitle"] = jobTitle;
    }

    if (dtAdmission) {
      data["dtAdmission"] = dtAdmission;
    }

    return data;
  }

  // create endpoint

  const createEmployeeData = async () => {
    if (isErrorName && isErrorJobTitle && isErrorDepartment) {
      setIsAlertModalOpen(true);
      setErrorMessage(
        "Não é possivel criar funcionário com campos inválidos. Verifique os valores e tente novamente"
      );
    } else {
      try {
        const data = setNewEmployeeDict();

        await createEmployee(data);
        onClose();
        await getEmployeesData();
        toast({
          title: "Funcionáio " + data.name + " criado com sucesso",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } catch (error: any) {
        setErrorMessage(error);
        setIsAlertModalOpen(true);
      }
    }
  };
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Adicionar Novo Funcionário</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isInvalid={isErrorName} isRequired>
              <FormLabel>Nome</FormLabel>
              <Input value={name} onChange={handleNameChange} />
              {isErrorName && (
                <FormErrorMessage>Nome inválido</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={isErrorJobTitle} isRequired>
              <FormLabel>Cargo</FormLabel>
              <Input value={jobTitle} onChange={handleJobTitleChange} />
              {isErrorJobTitle && (
                <FormErrorMessage>Cargo inválido</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={isErrorDepartment} isRequired>
              <FormLabel>Departamento</FormLabel>
              <Input value={department} onChange={handleDepartmentChange} />
              {isErrorDepartment && (
                <FormErrorMessage>Departamento inválido</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Data de Admissão</FormLabel>
              <Input
                type="date"
                value={dtAdmission}
                onChange={handleDtAdmissionChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button variant="ghost" onClick={createEmployeeData}>
              Salvar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {isAlertModalOpen && (
        <ErrorAlertModal
          onCloseModal={() => setIsAlertModalOpen(false)}
          message={errorMessage}
        />
      )}
    </div>
  );
};

export default CreateModal;
