import Employee  from "../mongodb/models/employee.js";

async function findAll() {
  return await Employee.find();
}


export default {
  findAll,
};
