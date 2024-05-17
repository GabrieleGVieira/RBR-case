import getEmployeeByID from "./useCase/getEmployeeByID.js";

const getEmployeeByIDController = async (req, res) => {
  try {
    const employee = await getEmployeeByID(req.params.id);
    res.status(200).json(employee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default getEmployeeByIDController;
