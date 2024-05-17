import express from "express";
const router = express.Router();

import getEmployeesRouter from "../features/getEmployeeData/getEmployeeDataRouter.js";
import createEmployee from "../features/createEmployee/createEmployeeRouter.js"

router.use("/employees", getEmployeesRouter);

router.use("/employees", createEmployee);

export default router;
