import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";

import { useRef, useState } from "react";

interface ErrorAlertProps {
  message: string;
  requestOpen: boolean;
}

const ErrorAlertModal: React.FC<ErrorAlertProps> = ({
  requestOpen,
  message,
}) => {

  const leastDestructiveRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);

  function errorMessageFunction(message) {
     
    if (message == "EMPTY_FIELD") {
      const error_msg =
        "Campos vazios. Um ou mais campo é obrigatório, verifique os valores preenchidos e tente novamente.";
      return error_msg;
    } else if (message == "INVALID_NAME") {
      const error_msg =
        "Campos 'Nome' inválido ou vazio. Verifique os valores preenchidos e tente novamente. Não é possivel inserir caracteres especiais.";
      return error_msg;
    } else if (message == "INVALID_JOB_TITLE") {
      const error_msg =
        "Campos 'Cargo' inválido ou vazio. Verifique os valores preenchidos e tente novamente. Não é possivel inserir caracteres especiais.";
      return error_msg;
    } else if (message == "INVALID_DEPARTMENT") {
      const error_msg =
        "Campos 'Departamento' inválido ou vazio. Verifique os valores preenchidos e tente novamente. Não é possivel inserir caracteres especiais.";
      return error_msg;
    } else if (message == "UNKNOW_ERROR") {
      const error_msg = "Erro desconhecido ao realizar requisições. Tente novamente.";
      return error_msg;
    } else {
      const error_msg = "Erro desconhecido.";
      return error_msg;
    }

  }

  if (requestOpen) {
    setIsOpen(true);
  }
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={leastDestructiveRef}
      onClose={onClose}
    >
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader fontSize="lg" fontWeight="bold">
          {"Error"}
        </AlertDialogHeader>

        <AlertDialogBody>{errorMessageFunction(message)}</AlertDialogBody>

        <AlertDialogFooter>
          <Button onClick={onClose}>Ok</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ErrorAlertModal;
