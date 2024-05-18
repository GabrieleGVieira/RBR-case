import employeeRepository from "../../../repositories/employeeRepository.js";
import errorEnum from "../../../entities/errorEnum.js";

async function updateEmployee(id, dataForUpdate) {
  try {
    // Validando para caso nao venha nehum campo para edição
    if (Object.keys(dataForUpdate).length === 0) {
      throw errorEnum.emptyField;
    }

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
