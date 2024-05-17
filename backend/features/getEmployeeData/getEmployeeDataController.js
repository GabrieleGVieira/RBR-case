import getEmployees from "./useCase/getEmployeeData.js";

const getEmployeesController = async (req, res) => {
  try {
    const employees = await getEmployees();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export default getEmployeesController;