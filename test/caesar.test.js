const { caesar } = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
  it("should encode an inputted string by shifting each character by the number given", () => {
    const inputA = "hello my name is steve.";
    const inputB = 3;
    const expected = "khoor pb qdph lv vwhyh.";
    const actual = caesar(inputA, inputB);
    expect(actual).to.equal(expected);
  });
  it("should wrap around to the front/end of the alphabet", () => {
    const inputA = "zxy";
    const inputB = 7;
    const expected = "gef";
    const actual = caesar(inputA, inputB);
    expect(actual).to.equal(expected);
  });
  it("should account for other characters, such as spaces and periods", () => {
    const inputA = "hello my name is steve...";
    const inputB = 3;
    const expected = "khoor pb qdph lv vwhyh...";
    const actual = caesar(inputA, inputB);
    expect(actual).to.equal(expected);
  });
  it("should return false if shift is not given", () => {
    const inputA = "hello my name is steve...";
    const expected = false;
    const actual = caesar(inputA);
    expect(actual).to.be.false;
  });
  it("should return false if shift is equal to 0", () => {
    const inputA = "hello my name is steve...";
    const inputB = 0;
    const expected = false;
    const actual = caesar(inputA, inputB);
    expect(actual).to.be.false;
  });
  it("should return false if shift is less than -25", () => {
    const inputA = "hello my name is steve...";
    const inputB = -35;
    const expected = false;
    const actual = caesar(inputA, inputB);
    expect(actual).to.be.false;
  });
  it("should return false if shift is greater than 25", () => {
    const inputA = "hello my name is steve...";
    const inputB = 44;
    const expected = false;
    const actual = caesar(inputA, inputB);
    expect(actual).to.be.false;
  });
  it("should encode a string regardless of letter capitalization", () => {
    const inputA = "HelLo my nAme is steVe...";
    const inputB = -3;
    const expected = "ebiil jv kxjb fp pqbsb...";
    const actual = caesar(inputA, inputB);
    expect(actual).to.equal(expected);
  });
  it("should decode a string", () => {
    const inputA = "khoor pb qdph lv vwhyh...";
    const inputB = 3;
    const inputC = false;
    const expected = "hello my name is steve...";
    const actual = caesar(inputA, inputB, inputC);
    expect(actual).to.equal(expected);
  });
  it("should decode a string regardless of capitalization", () => {
    const inputA = "khooR pb Qdph lv vwHyh...";
    const inputB = 3;
    const inputC = false;
    const expected = "hello my name is steve...";
    const actual = caesar(inputA, inputB, inputC);
    expect(actual).to.equal(expected);
  });
  it("should decode a string and keep the special characters and spaces", () => {
    const inputA = "zkdw grhv wklv phvvdjh vdb?!";
    const inputB = 3;
    const inputC = false;
    const expected = "what does this message say?!";
    const actual = caesar(inputA, inputB, inputC);
    expect(actual).to.equal(expected);
  });
  it("should return numbers if a part of the string", () => {
    const inputA = "zkdw grhv wklv phvvdjh vdb 9aaa872?";
    const inputB = 3;
    const inputC = false;
    const expected = "what does this message say 9xxx872?";
    const actual = caesar(inputA, inputB, inputC);
    expect(actual).to.equal(expected);
  });
});
