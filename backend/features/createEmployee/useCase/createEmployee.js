import employeeRepository from "../../../repositories/employeeRepository.js";

async function createEmployees(employeeData) {
  try {
    // const employees = await employeeRepository.create(employeeData);

    // validação de capos vazios
    if (
      !employeeData.name ||
      !employeeData.jobTitle ||
      !employeeData.department
    ) {
        throw new Error("Todos os campos são obrigatórios. Preencha novamente");
    }
      
      // validação se tem caracters inválidos
      
      const invalidCharactersRegex = /[\W_]+/g;
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
      throw new Error("Cargo inválido");
    }
      if (hasInvalidCharactersDepartment) {
        throw new Error("Departamento inválido");
      }
      
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
