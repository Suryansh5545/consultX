require("@nomicfoundation/hardhat-toolbox"); 
require('dotenv').config({path:'./.env.local'});

task("accounts", "Prints the list of accounts", async (taskArgs, hra) => {
  const accounts = await hre.ethers.getSigners();

  for( const account of accounts){
    console.log(account.address);
  }
})

const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "polygon",
  networks:{
    hardhat: {},
    polygon: {
      url: process.env.NEXT_PUBLIC_RPC_URL,
      accounts: [privateKey]
    }
  }
};
