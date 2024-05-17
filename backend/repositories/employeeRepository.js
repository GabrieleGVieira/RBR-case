import Employee from "../mongodb/models/employee.js";

async function findAll() {
  return await Employee.find();
}

async function findByID(id) {
  return await Employee.findById(id);
}


async function create(employeeData) {
  const newEmployee = new Employee({
    name: employeeData.name,
    jobTitle: employeeData.jobTitle,
    department: employeeData.department,
  });

  return await newEmployee.save();
}

export default {
  findAll,
  create,
  findByID,
};
