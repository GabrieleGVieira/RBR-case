import updateEmployee from "./useCase/updateEmployee.js";

const updateEmployeeController = async (req, res) => {
  try {
    await updateEmployee(req.params.id, req.body);
    res.status(200).send("Funcionario atualizado com sucesso");
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default updateEmployeeController;
