const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Calculator", function () {
  let Calculator;
  let calculator;

  beforeEach(async function () {
    Calculator = await ethers.getContractFactory("Calculator");
    calculator = await Calculator.deploy();
    // await calculator.waitForDeployment();  // Correct method to wait for the deployment to be mined
  });

  it("should return correct addition result", async function () {
    expect(await calculator.add(10, 5)).to.equal(15);
  });

  it("should return correct subtraction result", async function () {
    expect(await calculator.subtract(10, 5)).to.equal(5);
  });

  it("should return correct multiplication result", async function () {
    expect(await calculator.multiply(10, 5)).to.equal(50);
  });

  it("should return correct division result", async function () {
    expect(await calculator.divide(10, 5)).to.equal(2);
  });

  it("should revert division by zero", async function () {
    await expect(calculator.divide(10, 0)).to.be.revertedWith("Division by zero");
  });
});
