require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    Sepolia: {
      url: 'https://thirdweb.com/team/8bcacc688f44fc3c88061f4db7a1014456837659/Krypt-project-19af2a',
      accounts: ['fe16d5f501b0a932d6811a067b5a6d2f0f1576d54a13d7453f89f2670dfa4393'],
    },
  },
};
