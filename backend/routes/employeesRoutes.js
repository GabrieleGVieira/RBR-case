import express from "express";
const router = express.Router();

import getEmployeesRouter from "../features/getEmployeeData/getEmployeeDataRouter.js";
import createEmployee from "../features/createEmployee/createEmployeeRouter.js"
import getEmployeeByID from "../features/getEmployeeByID/getEmployeeByIDRouter.js";
import deleteEmployee from "../features/deleteEmployee/deleteEmployeeRouter.js";

router.use("/employees", getEmployeesRouter);

router.use("/employees", createEmployee);

router.use("/employees", getEmployeeByID);

router.use("/employees", deleteEmployee);

export default router;
