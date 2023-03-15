import { useMultiply } from "../packages";

describe("useMultiply", () => {
  test("useMultiply(1, 2)", () => {
    expect(useMultiply(1, 2)).toBe(2);
  });

  test("useMultiply(1, 2, 2)", () => {
    expect(useMultiply(1, 2, 2)).toBe(4);
  });
});

