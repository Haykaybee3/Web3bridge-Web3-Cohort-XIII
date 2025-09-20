# Ethereum Sepolia Deployment Guide

## Prerequisites

Before deploying to Ethereum Sepolia, you need to set up the following:

### 1. Environment Variables
Create a `.env` file in your project root with the following variables:

```
# Your wallet private key (without 0x prefix)
PRIVATE_KEY=your_private_key_here

# Infura API key for Ethereum Sepolia RPC
INFURA_API_KEY=your_infura_api_key_here

# Etherscan API key for contract verification
ETHERSCAN_API_KEY=your_etherscan_api_key_here
```

### 2. Get Required API Keys

#### Infura API Key
1. Go to [Infura](https://infura.io/)
2. Create an account and log in
3. Create a new project
4. Copy the project ID (this is your API key)
5. Add it to your `.env` file as `INFURA_API_KEY`

#### Etherscan API Key
1. Go to [Etherscan](https://etherscan.io/)
2. Create an account and log in
3. Go to your profile and generate an API key
4. Add it to your `.env` file as `ETHERSCAN_API_KEY`

#### Private Key
1. Export your wallet's private key from MetaMask or your wallet
2. Remove the `0x` prefix if present
3. Add it to your `.env` file as `PRIVATE_KEY`

### 3. Get Sepolia ETH
You'll need some Sepolia ETH for gas fees. Get it from:
- [Sepolia Faucet](https://sepoliafaucet.com/)
- [Infura Sepolia Faucet](https://www.infura.io/faucet/sepolia)

## Deployment Commands

### Deploy Contracts
```bash
npx hardhat run scripts/deploy.ts --network sepolia
```

### Verify Contracts (Optional)
After deployment, you can verify your contracts on Etherscan:
```bash
npx hardhat verify --network sepolia <CONTRACT_ADDRESS> [CONSTRUCTOR_ARGS]
```

Example for StakingContract:
```bash
npx hardhat verify --network sepolia <STAKING_CONTRACT_ADDRESS> <TOKEN1_ADDRESS> <TOKEN2_ADDRESS> 604800
```

## Network Information

- **Network Name**: Ethereum Sepolia Testnet
- **Chain ID**: 11155111
- **RPC URL**: https://sepolia.infura.io/v3/YOUR_API_KEY
- **Block Explorer**: https://sepolia.etherscan.io/
- **Currency**: Sepolia ETH

## Security Notes

- Never commit your `.env` file to version control
- Keep your private key secure and never share it
- Use a dedicated wallet for testing, not your main wallet
- The `.env` file is already in `.gitignore` for security
