import express from "express";
const router = express.Router();
import employeeRoutes from "./employeesRoutes.js";

router.use("/api", employeeRoutes);

export default router;
