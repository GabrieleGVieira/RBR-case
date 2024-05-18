import employeeRepository from "../../../repositories/employeeRepository.js";
import errorEnum from "../../../entities/errorEnum.js";

async function createEmployees(employeeData) {
  try {
    // validação de capos vazios
    if (
      !employeeData.name ||
      !employeeData.jobTitle ||
      !employeeData.department
    ) {
      throw new Error(errorEnum.emptyField);
    }

    // validação se tem caracters inválidos

    const invalidCharactersRegex = /[^a-zA-Z\u00C0-\u017F\s_]/g; // permite minusculas e maiusculas, acentos, letra "ç" e espaços
    const hasInvalidCharactersName = invalidCharactersRegex.test(
      employeeData.name
    );
    const hasInvalidCharactersJobTitle = invalidCharactersRegex.test(
      employeeData.jobTitle
    );
    const hasInvalidCharactersDepartment = invalidCharactersRegex.test(
      employeeData.department
    );

    if (hasInvalidCharactersName) {
      throw new Error(errorEnum.invalidName);
    }
    if (hasInvalidCharactersJobTitle) {
      throw new Error(errorEnum.invalidJobTitle);
    }
    if (hasInvalidCharactersDepartment) {
      throw new Error(errorEnum.nvalidDepartment);
    }

    employeeRepository.create(employeeData);

    return employeeData;
  } catch (error) {
    console.error(
      "Ocorreu o seguinte erro no caso de uso ao criar um novo usuário:",
      error
    );
    throw errorEnum.unknowError;
  }
}

export default createEmployees;
