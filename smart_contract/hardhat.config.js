require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/AXnQYXpquyd3ZvCGFuUPe1gDZQaUIfZh',
      accounts: ['9def704a65cecb2fe8245e2aced12b7dfab2ea1f49012961205884622f8d9d5d'],
    },
  },
};
