require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    Sepolia: {
      url: 'https://eth-mainnet.g.alchemy.com/v2/CVYXtWAhHS01FvZXEAi8lYdg-AitebUz',
      accounts: ['fe16d5f501b0a932d6811a067b5a6d2f0f1576d54a13d7453f89f2670dfa4393'],
    },
  },
};
