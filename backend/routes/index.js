import express from "express";
const router = express.Router();
import employeeRoutes from "./employeesRoutes.js";
import cors from "cors";

router.use(
  cors({
    origin: "http://localhost:3001", // Permitir solicitações do front
  })
);
router.use("/api", employeeRoutes);

export default router;
