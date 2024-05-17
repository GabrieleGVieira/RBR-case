import employeeRepository from "../../../repositories/employeeRepository.js";

async function createEmployees(employeeData) {
  try {

    // validação de capos vazios
    if (
      !employeeData.name ||
      !employeeData.jobTitle ||
      !employeeData.department
    ) {
      throw new Error("Todos os campos são obrigatórios. Preencha novamente");
    }

    // validação se tem caracters inválidos

    const invalidCharactersRegex = /[^a-zA-Z\u00C0-\u017F\s_]/g;
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
      throw new Error("Nome inválido");
    }
    if (hasInvalidCharactersJobTitle) {
      console.log(hasInvalidCharactersJobTitle);
      throw new Error("Cargo inválido");
    }
    if (hasInvalidCharactersDepartment) {
      throw new Error("Departamento inválido");
    }

    employeeRepository.create(employeeData);

    return employeeData;
  } catch (error) {
    console.error(
      "Ocorreu o seguinte erro no caso de uso ao criar um novo usuário:",
      error
    );
    throw error;
  }
}

export default createEmployees;
