const DappToken = artifacts.require("DappToken")
const DaiToken = artifacts.require("DaiToken")
const TokenFarm =artifacts.require("TokenFarm")

module.exports = async function(deployer, network ,accounts) {
// Make sure the DappToken is being deployed
      await deployer.deploy(DaiToken)
      const daiToken = await DaiToken.deployed()

// Make sure the DaiToken is being deployed
      await deployer.deploy(DappToken)
      const dappToken = await DappToken.deployed()

// Make sure the TokenFarm is being deployed

      await deployer.deploy(TokenFarm, dappToken.address, daiToken.address)
      const tokenFarm = await TokenFarm.deployed()

// Transfer
      await tokenFarm.transfer(tokenFarm.address, "1000000000000000000000000")
}

