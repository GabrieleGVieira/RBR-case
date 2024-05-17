import mongoose from "mongoose";

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
});

const Employee = mongoose.model("Employee", employeeSchema, "employee");

export default Employee;
