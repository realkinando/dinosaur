require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const seed = fs.readFileSync(".seed").toString().trim();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.5.16",
  networks: {
    hardhat: {
      accounts : {
        mnemonic : seed
      }
    },
    polygon: {
      url: "https://matic-mainnet.chainstacklabs.com",
      accounts : {
        mnemonic : seed
      },
      gasPrice : 1000000000,
      gas : 10000000
    }
  }
};

/*

*/