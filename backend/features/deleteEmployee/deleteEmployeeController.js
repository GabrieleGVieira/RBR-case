import deleteEmployee from "./useCase/deleteEmployee.js";

const deleteEmployeeController = async (req, res) => {
  try {
    const msg = await deleteEmployee(req.params.id);

    res.json(msg);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default deleteEmployeeController;
