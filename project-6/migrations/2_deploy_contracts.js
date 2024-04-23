const SupplyChain = artifacts.require("./SupplyChain.sol");

module.exports = function(deployer) {
   deployer.deploy(SupplyChain);
};
