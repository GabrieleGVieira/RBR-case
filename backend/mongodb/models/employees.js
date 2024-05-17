const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: String,
  job_title: String,
  department: String,
});

const Employees = mongoose.model("Employees", employeeSchema);

module.exports = Employees;
