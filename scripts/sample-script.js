// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile 
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Dinosaur = await hre.ethers.getContractFactory("Dinosaur");
  console.log((Dinosaur.getDeployTransaction("0xF48fa092dD3D5a86B1dd4d8d8f0146176C3A9160","0xF48fa092dD3D5a86B1dd4d8d8f0146176C3A9160",1653433200)).gasLimit);
  const dinosaur = await Dinosaur.deploy("0xF48fa092dD3D5a86B1dd4d8d8f0146176C3A9160","0xF48fa092dD3D5a86B1dd4d8d8f0146176C3A9160",1653433200);

  await dinosaur.deployed();

  console.log("Dinosaur deployed to:", dinosaur.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
