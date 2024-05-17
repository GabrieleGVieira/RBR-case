import { Router } from "express";
const router = Router();
import getEmployeeByIDController from "./getEmployeeByIDController.js";

router.get("/:id", getEmployeeByIDController);

export default router;
