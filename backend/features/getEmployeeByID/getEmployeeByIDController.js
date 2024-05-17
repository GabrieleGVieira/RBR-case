import getEmployeeByID from "./useCase/getEmployeeByID.js";

const getEmployeeByIDController = async (req, res) => {
  try {
    const employee = await getEmployeeByID(req.params.id);
    res.json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default getEmployeeByIDController;
