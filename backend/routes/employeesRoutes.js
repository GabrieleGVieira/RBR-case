import express from "express";
const router = express.Router();

import getEmployeesRouter from "../features/getEmployeeData/getEmployeeDataRouter.js";

router.use("/employees", getEmployeesRouter);


export default router;
