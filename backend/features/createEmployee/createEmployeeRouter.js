import { Router } from "express";
const router = Router();
import createEmployeeController from "./createEmployeeController.js";

router.post("/", createEmployeeController);

export default router;
