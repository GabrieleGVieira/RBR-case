import updateEmployee from "./useCase/updateEmployee.js";

const updateEmployeeController = async (req, res) => {
  try {
    const employees = await updateEmployee(req.params.id, req.body);
    res.status(200).json(employees);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default updateEmployeeController;
