import createEmployee from "./useCase/createEmployee.js";

const createEmployeeController = async (req, res) => {
  try {
    const employees = await createEmployee(req.body);
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default createEmployeeController;
