import employeeRepository from "../../../repositories/employeeRepository.js";
import errorEnum from "../../../entities/errorEnum.js";

async function getEmployeeByID(id) {
  try {
    const employee = await employeeRepository.findByID(id);

    // Valida se retornou algum dado
    if (!employee) {
      return null;
    }

    return employee;
  } catch (error) {
    console.error(
      "Ocorreu o seguinte erro no caso de uso ao trazer dados de um funcionário:",
      error
    );
    throw errorEnum.unknowError;
  }
}

export default getEmployeeByID;
