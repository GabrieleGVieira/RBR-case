import employeeRepository from "../../../repositories/employeeRepository.js";

async function getEmployeeByID(id) {
  try {
    const employee = await employeeRepository.findByID(id);

    console.log(employee);

    // Valida se retornou algum dado
    if (!employee) {
      return null;
    }

    return employee;
  } catch (error) {
    console.error(
      "Ocorreu o seguinte erro no caso de uso ao trazer dados de funcionários:",
      error
    );
    throw error;
  }
}

export default getEmployeeByID;
