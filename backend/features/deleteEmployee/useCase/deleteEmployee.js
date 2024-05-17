import employeeRepository from "../../../repositories/employeeRepository.js";

async function deleteEmployee(id) {
  try {
    await employeeRepository.remove(id);

    return "Usuario deletado com sucesso";
  } catch (error) {
    console.error(
      "Ocorreu o seguinte erro no caso de uso ao trazer dados de funcionários:",
      error
    );
    throw error;
  }
}

export default deleteEmployee;
