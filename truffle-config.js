const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "salt picnic ramp shell consider capital trip brain coconut hospital project mutual";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "app/src/contracts"),
  networks: {
    /*develop: { // default with truffle unbox is 7545, but we can use develop to test changes, ex. truffle migrate --network develop
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      gasPrice:10000000000,
      gasLimit:300000
    }*/
    kovan: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://kovan.infura.io/v3/1c02e4fe027b4c8fab94acb61d18047a")
      },
      network_id: 42,
      gasPrice:10000000000
    }
  },
};
