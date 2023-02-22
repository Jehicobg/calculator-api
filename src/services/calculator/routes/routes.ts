import express from "express";
import { calculate, greetings } from "../controller/controller";

const router = express.Router();

/**
 * @swagger
 * tags:
 *  name: Calculator
 *  description: Calculator Endpoints
 */

/**
 * @swagger
 *  /calculator:
 *  get:
 *      summary: Return a greatting message
 *      tags: [Calculator]
 *      responses:
 *          200:
 *              description: message
 *              content:
 *                  text/plain:
 *                      schema:
 *                          type: string
 *                          example: Send a POST for use the calculator :)
 */

router.get("/", greetings);

/**
 * @swagger
 *  /calculator:
 *  post:
 *      summary: Return result from equation
 *      tags: [Calculator]
 *      requestBody: 
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      Equation:
 *                       type: object
 *                       properties:
 *                          equation:
 *                              type: string
 *                      required:
 *                          - equation
 *                      example:
 *                          equation: 10*(2+5)*10   
 *      responses:
 *          200:
 *              description: result
 *              content:
 *                  text/plain:
 *                      schema:
 *                          type: string
 *                          example: 700
 *          400:
 *              description: Incorrect math equation
 *              content:
 *                  text/plain:
 *                      schema:
 *                          type: string
 *                          example: Wrong Equation, TypeError 
 */
router.post("/", calculate);

export default router;
