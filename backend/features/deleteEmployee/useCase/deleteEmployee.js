import employeeRepository from "../../../repositories/employeeRepository.js";
import errorEnum from "../../../entities/errorEnum.js";

async function deleteEmployee(id) {
  try {
    await employeeRepository.remove(id);
  } catch (error) {
    console.error(
      "Ocorreu o seguinte erro no caso de uso ao deletar um funcionário:",
      error
    );
    throw errorEnum.unknowError;
  }
}

export default deleteEmployee;
