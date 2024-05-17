import employeeRepository from "../../../repositories/employeeRepository.js";

async function updateEmployee(id, dataForUpdate) {
  try {
    if (!dataForUpdate) {
      throw new Error(
        "Nenhum campo para atualizar. Preencha algum campo para dar continuidade"
      );
    }

    await employeeRepository.update(id, dataForUpdate);
    return "Atualização feita com sucesso";
  } catch (error) {
    console.error(
      "Ocorreu o seguinte erro no caso de uso ao trazer dados de funcionários:",
      error
    );
    throw error;
  }
}

export default updateEmployee;
