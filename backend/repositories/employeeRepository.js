import Employee  from "../mongodb/models/employee.js";

async function findAll() {
  return await Employee.find();
}

async function create(employeeData) {
  return await Employee.create(employeeData);
}


export default {
  findAll,
  create
};
