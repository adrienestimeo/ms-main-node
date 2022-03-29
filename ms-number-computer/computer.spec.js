"use strict";

const should = require("chai").should();
const expect = require("chai").expect;
const computer = require("./computer");
// TODO: Create our computer function test here

describe("Computer test suit", () => {
  describe('"add" function', () => {
    it("should exist", () => {
      expect(computer.add).to.be.a("function");
    });

    describe("Error", () => {
      it("should throw error if no argument provided", () => {
        expect(computer.add.bind(computer)).to.throw("Arguments missing.");
      });

      it("should throw error if the first argument is null", () => {
        expect(computer.add.bind(computer, null, 2)).to.throw(
          '"null" is not a valid number [arg 0].'
        );
      });

      it("should throw error if the second argument is null", () => {
        expect(computer.add.bind(computer, 40, null)).to.throw(
          '"null" is not a valid number [arg 1].'
        );
      });

      it("should throw error if the first argument is undefined", () => {
        expect(computer.add.bind(computer, undefined, 2)).to.throw(
          '"undefined" is not a valid number [arg 0].'
        );
      });

      it("should throw error if the second argument is undefined", () => {
        expect(computer.add.bind(computer, 40, undefined)).to.throw(
          '"undefined" is not a valid number [arg 1].'
        );
      });

      it("should throw error if the first argument is a String", () => {
        expect(computer.add.bind(computer, "toto", 2)).to.throw(
          "a String is not a valid number [arg 0]."
        );
      });

      it("should throw error if the second argument is a String", () => {
        expect(computer.add.bind(computer, 40, "titi")).to.throw(
          "a String is not a valid number [arg 1]."
        );
      });
    });

    describe("Compute", () => {
      it("0 + 0 should be equal to 0", () => {
        expect(computer.add(0, 0)).to.be.equal(0);
      });

      it("-1 + 1 should be equal to 0", () => {
        expect(computer.add(-1, 1)).to.be.equal(0);
      });

      it("1 + -1 should be equal to 0", () => {
        expect(computer.add(1, -1)).to.be.equal(0);
      });

      it("40 + 2 should be equal to 42", () => {
        expect(computer.add(40, 2)).to.be.equal(42);
      });

      it("2 + 40 should be equal to 42", () => {
        expect(computer.add(2, 40)).to.be.equal(42);
      });
    });
  });
});
