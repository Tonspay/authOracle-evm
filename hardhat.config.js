require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.27",
      },
      {
        version: "0.4.11",
      },
    ],
  },
  networks: {
    arb: {
      url: `https://arbitrum.llamarpc.com`,
      accounts: [''],
    },
  },
  


};
