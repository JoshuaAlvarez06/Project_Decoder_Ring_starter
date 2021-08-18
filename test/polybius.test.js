const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
  it("should encode a given string", () => {
    const inputA = "hello my name is steve";
    const inputB = true;
    const expected = "3251131343 2345 33112351 4234 3444511551";
    const actual = polybius(inputA, inputB);
    expect(actual).to.equal(expected);
  });
  it("should encode both i/j into the number 42", () => {
    const inputA = "ijij";
    const inputB = true;
    const expected = "42424242";
    const actual = polybius(inputA, inputB);
    expect(actual).to.equal(expected);
  });
  it("should decode 42 to i/j", () => {
    const inputA = "42";
    const inputB = false;
    const expected = "i/j";
    const actual = polybius(inputA, inputB);
    expect(actual).to.equal(expected);
  });
  it("should encode regardless of capitalization in the string", () => {
    const inputA = "Hello My Name Is Steve";
    const inputB = true;
    const expected = "3251131343 2345 33112351 4234 3444511551";
    const actual = polybius(inputA, inputB);
    expect(actual).to.equal(expected);
  });
  it("should decode a string of numbers, if inputted correctly", () => {
    const expected = "hello my name i/js steve";
    const inputB = false;
    const inputA = "3251131343 2345 33112351 4234 3444511551";
    const actual = polybius(inputA, inputB);
    expect(actual).to.equal(expected);
  })
  it("should return false if an odd amount of numbers is given in the string when decoding, excluding spaces", () => {
    const inputA = "442372443 2443 11 44154344";
    const inputB = false;
    const actual = polybius(inputA, inputB);
    expect(actual).to.be.false;
  })
  it("should maintain spaces when encoding", () => {
    const inputA = "hello my name is steve";
    const inputB = true;
    const expected = "3251131343 2345 33112351 4234 3444511551";
    const actual = polybius(inputA, inputB);
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces when decoding", () => {
    const inputA = "3251131343 2345 33112351 4234 3444511551";
    const inputB = false;
    const expected = "hello my name i/js steve";
    const actual = polybius(inputA, inputB);
    expect(actual).to.equal(expected);
  })
})