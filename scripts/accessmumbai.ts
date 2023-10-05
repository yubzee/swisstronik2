import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();
    const storageContractAddress = "0xE17AeDcebc74bB7AD9C89f931D330F41c201033C"; 
  
    console.log("Accessing storage variable on the Mumbai Testnet:");
  
    const storageValueMumbai = await ethers.provider.send("eth_getStorageAt", [storageContractAddress, '0x0', 'latest']);
    console.log("Retrieved storage value on Mumbai:", storageValueMumbai);
  
    
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  