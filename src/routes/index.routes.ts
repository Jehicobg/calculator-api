import express from "express";
import calculatorRoutes from "../services/calculator/routes/routes"

const router = express.Router();

router.use("/calculator", calculatorRoutes);

export default router;
