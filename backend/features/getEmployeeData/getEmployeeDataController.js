import getEmployees from "./useCase/getEmployeeData.js";

const getEmployeesController = async (req, res) => {
  try {
    const employees = await getEmployees();
    res.status(200).json(employees);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default getEmployeesController;
