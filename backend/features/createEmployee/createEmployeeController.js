import createEmployee from "./useCase/createEmployee.js";

const createEmployeeController = async (req, res) => {
  try {
    const employees = await createEmployee(req.body);
    res.status(201).json(employees);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default createEmployeeController;
