import { useDivide } from "../packages";

describe("useDivide", () => {
  test("useDivide(1, 2)", () => {
    expect(useDivide(1, 2)).toBe(0.5);
  });

  test("useDivide(1, 2, 2)", () => {
    expect(useDivide(1, 2, 2)).toBe(0.25);
  });
});

