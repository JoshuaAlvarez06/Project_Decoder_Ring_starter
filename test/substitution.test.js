const { substitution } = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
  it("should correctly translate the inputted string, based on the alphabet inputted in the parameter", () => {
    const inputA = "test";
    const inputB = "xoyqmcgrukswaflnthdjpzibev";
    const inputC = true;
    const expected = "jmdj";
    const actual = substitution(inputA, inputB, inputC);
    expect(actual).to.equal(expected);
  });
  it("should include spaces, letters, and special characters when being encoded", () => {
    const inputA = "hello, this is a test.";
    const inputB = "xoyqmcgrukswaflnthdjpzibev";
    const inputC = true;
    const expected = "rmwwl, jrud ud x jmdj.";
    const actual = substitution(inputA, inputB, inputC);
    expect(actual).to.equal(expected);
  });
  it("should include spaces, letters, and special characters when being decoded", () => {
    const inputA = "rmwwl, jrud ud x jmdj.";
    const inputB = "xoyqmcgrukswaflnthdjpzibev";
    const inputC = false;
    const expected = "hello, this is a test.";
    const actual = substitution(inputA, inputB, inputC);
    expect(actual).to.equal(expected);
  });
  it("should encode regardless of capitalization", () => {
    const inputA = "Hello, This Is a Test.";
    const inputB = "xoyqmcgrukswaflnthdjpzibev";
    const inputC = true;
    const expected = "rmwwl, jrud ud x jmdj.";
    const actual = substitution(inputA, inputB, inputC);
    expect(actual).to.equal(expected);
  });
  it("should decode regardless of capitalization", () => {
    const inputA = "Rmwwl, Jrud Ud x Jmdj.";
    const inputB = "xoyqmcgrukswaflnthdjpzibev";
    const inputC = false;
    const expected = "hello, this is a test.";
    const actual = substitution(inputA, inputB, inputC);
    expect(actual).to.equal(expected);
  });
  it("should return false if alphabet parameter is not exactly 26 characters", () => {
    const inputA = "rmwwl, jrud ud x jmdj.";
    const inputB = "xoyqmcgruskswaflnthdjpzibev1";
    const inputC = false;
    const actual = substitution(inputA, inputB, inputC);
    expect(actual).to.be.false;
  });
  it("should return false if not all characters in alphabet parameter are unique", () => {
    const inputA = "rmwwl, jrud ud x jmdj.";
    const inputB = "xooyyqmcgrukswaflnthdjpzibev";
    const inputC = false;
    const actual = substitution(inputA, inputB, inputC);
    expect(actual).to.be.false;
  })
})
