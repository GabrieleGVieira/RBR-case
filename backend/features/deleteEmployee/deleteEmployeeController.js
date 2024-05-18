import deleteEmployee from "./useCase/deleteEmployee.js";

const deleteEmployeeController = async (req, res) => {
  try {
    await deleteEmployee(req.params.id);

    res.status(200);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default deleteEmployeeController;
