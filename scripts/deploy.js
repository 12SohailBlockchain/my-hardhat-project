const { ethers } = require("hardhat");

async function main() {
  // Get the contract factory
   const HelloWorld = await ethers.getContractFactory("Calculator");

  // Start deployment, returning a promise that resolves to a contract object
  const hello_world = await HelloWorld.deploy();

  // Wait for the contract to be mined and deployed
  await hello_world.deployTransaction.wait();

  console.log("Contract deployed to address:", hello_world.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error("Error deploying contract:", error);
    process.exit(1);
  });
