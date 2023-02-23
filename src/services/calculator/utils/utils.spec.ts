import { processEquation } from "./utils";

describe("Utils", () => {
  it("should return a number and that number must be 10", () => {
    const expected = expect.any(String);
    const result = processEquation("10*1");

    expect(result).toStrictEqual(expected);
    expect(result).toStrictEqual("10");
  });

  it("should return 700 when equation is '10*(2+5)*10'", () => {
    const expected = "700";
    const result = processEquation("10*(2+5)*10");

    expect(result).toStrictEqual(expected);
  });

  it("should return -30 when equation is '10*(6-3)'", () => {
    const expected = "-30";
    const result = processEquation("10*(3-6)");

    expect(result).toStrictEqual(expected);
  });

  it("should return 5 when equation is '10/2'", () => {
    const expected = "5";
    const result = processEquation("10/2");

    expect(result).toStrictEqual(expected);
  });

  it("should return an error and message error must be: 'Error in character %'", () => {
    expect(() => processEquation("10*(2%5)*10")).toThrow(TypeError);
    expect(() => processEquation("10*(2%5)*10")).toThrow(
      "Error in character %"
    );
  });

  it("should return same expression when not encountered a special character", () => {
    expect(processEquation("10`8")).toStrictEqual("10`8");
  });
});
