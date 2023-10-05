import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const config: HardhatUserConfig = {
  
 networks : {
  mumbai: {
    url: "https://rpc-mumbai.maticvigil.com/",
    accounts : [process.env.PRIVATE_KEY],
  },
  swisstronik : {
      url : "https://json-rpc.testnet.swisstronik.com/",
      accounts : [process.env.PRIVATE_KEY],
    },
 },

 solidity : {
  version : "0.8.19"
 }


};

export default config;
