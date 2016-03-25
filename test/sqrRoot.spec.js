var SquareFinder = require("../js/sqrRoot.js");
var chai = require('chai');
var expect = chai.expect;
chai.should();

describe("SquareFinder", function(){
  it("should be a function", function(){
    expect(SquareFinder).to.be.a("function");
  });
  it("should check if the input is a number", function(){
    expect(SquareFinder("string")).to.be.false;
  });
  it("should find the square root of a given number", function(){
    expect(SquareFinder(9).sqrRoot).to.equal(3);
  });
  it("should return the sum of all numbers' up to its root as well", function(){
    expect(SquareFinder(9).sum).to.equal(19.30600052603572);
  });
});
