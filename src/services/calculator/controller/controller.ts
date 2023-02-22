import { Request, Response } from "express";
import { processEquation } from "../utils/utils";

const calculate = (req: Request, res: Response) => {
  try {
    const { equation } = req.body;
    const equationResolved = processEquation(equation);
    res.status(200).send(equationResolved.toString());
  } catch (error) {
    res.status(400).send(`Wrong Equation, ${error}`);
  }
};

const greetings = (req: Request, res: Response) =>
  res.status(200).send("Send a POST for use the calculator :)");

export { calculate, greetings };
