import { useSum } from "../packages";

describe("useSum", () => {
  test("useSum(1, 2)", () => {
    expect(useSum(1, 2)).toBe(3);
  });

  test("useSum(1, 2, 3)", () => {
    expect(useSum(1, 2, 3)).toBe(6);
  });
});

