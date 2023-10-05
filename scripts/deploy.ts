import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // Deploy to Mumbai
  //const StorageContractMumbai = await ethers.getContractFactory("StorageContract");
  //const storageContractMumbai = await StorageContractMumbai.deploy();
  //console.log("StorageContract address on Mumbai:", storageContractMumbai.target);

  // Deploy to Swisstronik
  const StorageContractSwisstronik = await ethers.getContractFactory("StorageContract");
  const storageContractSwisstronik = await StorageContractSwisstronik.deploy();
  console.log("StorageContract address on Swisstronik:", storageContractSwisstronik.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
