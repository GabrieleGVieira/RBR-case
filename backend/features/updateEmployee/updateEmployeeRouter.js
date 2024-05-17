import { Router } from "express";
const router = Router();
import updateEmployeeController from "./updateEmployeeController.js";

router.put("/:id", updateEmployeeController);

export default router;
