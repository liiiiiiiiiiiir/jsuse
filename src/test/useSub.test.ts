import { useSub } from "../packages";

describe("useSub", () => {
  test("useSub(1, 2)", () => {
    expect(useSub(1, 2)).toBe(-1);
  });

  test("useSub(1, 2, 3)", () => {
    expect(useSub(1, 2, 3)).toBe(-4);
  });
});

