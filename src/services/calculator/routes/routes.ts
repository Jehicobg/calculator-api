import express from "express";
import { calculate, greetings } from "../controller/controller";

const router = express.Router();

router.get("/", greetings);
router.post("/", calculate);

export default router;