import { equation } from ".";

// successfull test
describe("equation", () => {
  it("should return the correct result", () => {
    const result = equation(2, 3);
    expect(result).toBe(11);
  });
});

// failed test
// describe("equation", () => {
//   it("should return the correct result", () => {
//     const result = equation(2, 3);
//     expect(result).toBe(12);
//   });
// });

