import { Router } from "express";
const router = Router();
import getEmployeesController from "./getEmployeeDataController.js";

router.get("/", getEmployeesController);

export default router;
