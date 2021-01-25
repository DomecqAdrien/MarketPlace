const SimpleStorage = artifacts.require("SimpleStorage");
const MarketPlace = artifacts.require("MarketPlace");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(MarketPlace);
};
