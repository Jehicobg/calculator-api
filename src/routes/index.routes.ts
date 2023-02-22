import express from "express";
import calculatorRoutes from "../services/calculator/routes/routes";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { options } from "../swaggerOptions";

const specs = swaggerJsDoc(options);
const router = express.Router();

router.use("/calculator", calculatorRoutes);
router.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));

export default router;
