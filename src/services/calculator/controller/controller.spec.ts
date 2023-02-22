import supertest from "supertest";
import { createServer } from "../../../server";

const app = createServer();

describe("Controller Calculator", () => {
  it("GET -> should return a message with status code 200", async () => {
    const { statusCode, text } = await supertest(app).get("/calculator");
    expect(statusCode).toBe(200);
    expect(text).toStrictEqual(expect.any(String));
  });

  it("POST -> should return 700 with status 200", async () => {
    const { statusCode, text } = await supertest(app)
      .post("/calculator")
      .send({ equation: "10*(2+5)*10" });
    expect(statusCode).toBe(200);
    expect(text).toStrictEqual("700");
  });

  it("POST -> should return status 400 and message error", async () => {
    const { statusCode, text } = await supertest(app)
      .post("/calculator")
      .send({ equation: "10*(2%5)" });
    expect(statusCode).toBe(400);
    expect(text).toStrictEqual(
      "Wrong Equation, TypeError: Error in character %"
    );
  });
});
