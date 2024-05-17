import { Router } from "express";
const router = Router();
import getEmployeesData from "./getEmployeeDataController.js";

router.get("/", getEmployeesData);

export default router;
