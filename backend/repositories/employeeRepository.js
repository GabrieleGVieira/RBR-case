import Employee from "../mongodb/models/employee.js";

async function findAll(filter) {
  return await Employee.find(filter);
}

async function findByID(id) {
  return await Employee.findById(id);
}

async function remove(id) {
  return await Employee.deleteOne({ _id: id });
}

async function create(employeeData) {
  const newEmployee = new Employee({
    name: employeeData.name,
    jobTitle: employeeData.jobTitle,
    department: employeeData.department,
    dtAdmission: employeeData.dtAdmission,
  });

  return await newEmployee.save();
}

async function update(id, employeeData) {
  return await Employee.findByIdAndUpdate(id, employeeData, { new: true });
}

export default {
  findAll,
  create,
  findByID,
  remove,
  update,
};
