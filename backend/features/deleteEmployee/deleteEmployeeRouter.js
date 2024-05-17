import { Router } from "express";
const router = Router();
import deleteEmployeeController from "./deleteEmployeeController.js";

router.delete("/:id", deleteEmployeeController);

export default router;
