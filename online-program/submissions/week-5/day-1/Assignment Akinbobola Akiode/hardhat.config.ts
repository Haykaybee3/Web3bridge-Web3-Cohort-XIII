require("@nomicfoundation/hardhat-toolbox");
const { vars } = require("hardhat/config");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  defaultNetwork: "sepolia",

  networks: {
    "lisk-sepolia": {
      url: "https://rpc.sepolia-api.lisk.com", 
      accounts: vars.has("PRIVATE_KEY") ? [vars.get("PRIVATE_KEY")] : [],
      chainId: 4202, 
      gasPrice: 1000000000, // 1 gwei
    },
    "sepolia": {
      url: vars.has("INFURA_API_KEY") 
        ? `https://sepolia.infura.io/v3/${vars.get("INFURA_API_KEY")}`
        : vars.has("ALCHEMY_API_KEY")
        ? `https://eth-sepolia.g.alchemy.com/v2/${vars.get("ALCHEMY_API_KEY")}`
        : "https://rpc.sepolia.org",
      accounts: vars.has("PRIVATE_KEY") ? [vars.get("PRIVATE_KEY")] : [],
      chainId: 11155111,
    },
  },
  sourcify: {
    enabled: false,
  },
  etherscan: {
    apiKey: {
      "lisk-sepolia": "123",
      "sepolia": vars.get("ETHERSCAN_API_KEY"),
    },
    customChains: [
      {
        network: "lisk-sepolia",
        chainId: 4202,
        urls: {
          apiURL: "https://sepolia-blockscout.lisk.com/api",
          browserURL: "https://sepolia-blockscout.lisk.com",
        },
      },
    ],
  },
};
