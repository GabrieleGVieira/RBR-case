import employeeRepository from "../../../repositories/employeeRepository.js";

async function getEmployees() {
  try {
    const employees = await employeeRepository.findAll();

    // Valida se retornou algum dado
    if (!employees?.length) {
      return [];
    }

    return employees;
  } catch (error) {
    console.error(
      "Ocorreu o seguinte erro no caso de uso ao trazer dados de funcionários:",
      error
    );
    throw errorEnum.unknowError;
  }
}

export default getEmployees;
