import { processEquation } from "./utils";

describe("Utils", () => {
  it("should return a number and that number must be 10", () => {
    const expected = expect.any(Number);
    const result = processEquation("10*1");

    expect(result).toStrictEqual(expected);
    expect(result).toStrictEqual(10);
  });

  it("should return 700 when equation is '10*(2+5)*10'", () => {
    const expected = 700;
    const result = processEquation("10*(2+5)*10");

    expect(result).toStrictEqual(expected);
  });

  it("should return an error and message error must be: 'Error in character %'", () => {
    expect(() => processEquation("10*(2%5)*10")).toThrow(TypeError);
    expect(() => processEquation("10*(2%5)*10")).toThrow(
      "Error in character %"
    );
  });
});
