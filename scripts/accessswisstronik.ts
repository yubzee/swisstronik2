import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();
    const storageContractAddress = "0xc60e011986bE908f05F05823E00b1AF07EA7b115"; 
  
    console.log("Accessing storage variable on the Swisstronik Testnet:");
  
    const storageValueSwiss = await ethers.provider.send("eth_getStorageAt", [storageContractAddress, '0x0', 'latest']);
    console.log("Retrieved storage value on Swisstronik:", storageValueSwiss);
  
    
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  