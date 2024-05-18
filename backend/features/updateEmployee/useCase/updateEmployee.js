import employeeRepository from "../../../repositories/employeeRepository.js";
import errorEnum from "../../../entities/errorEnum.js";

async function updateEmployee(id, dataForUpdate) {
  try {
    // Validando para caso nao venha nehum campo para edição
    if (!dataForUpdate) {
      throw errorEnum.emptyField;
    }
 
    // validação se tem caracters inválidos

    // const invalidCharactersRegex = /[^a-zA-Z\u00C0-\u017F\s_]/g; // permite minusculas e maiusculas, acentos, letra "ç" e espaços
    // const hasInvalidCharactersName = invalidCharactersRegex.test(
    //   dataForUpdate.name
    // );
    // if (hasInvalidCharactersName) {
    //   throw new Error(errorEnum.invalidName);
    // }

    await employeeRepository.update(id, dataForUpdate);
  } catch (error) {
    console.error(
      "Ocorreu o seguinte erro no caso de uso ao editar dados de funcionários:",
      error
    );
    throw new Error(error);
  }
}

export default updateEmployee;
