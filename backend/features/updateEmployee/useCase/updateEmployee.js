import employeeRepository from "../../../repositories/employeeRepository.js";
import errorEnum from "../../../entities/errorEnum.js";

async function updateEmployee(id, dataForUpdate) {
  try {
    // Validando para caso nao venha nehum campo para edição
    if (!dataForUpdate) {
      throw new Error(errorEnum.emptyField);
    }
    await employeeRepository.update(id, dataForUpdate);
  } catch (error) {
    console.error(
      "Ocorreu o seguinte erro no caso de uso ao trazer dados de funcionários:",
      error
    );
    throw errorEnum.unknowError;
  }
}

export default updateEmployee;
