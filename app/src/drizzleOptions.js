import Web3 from "web3";
import SimpleStorage from "./contracts/SimpleStorage.json";
import MarketPlace from "./contracts/MarketPlace.json"

const options = {
  web3: {
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:9545",
  },
    //block: false,
    //customProvider: new Web3("ws://localhost:8545"),
  },
  contracts: [SimpleStorage,MarketPlace],
  events: {
    SimpleStorage: ["StorageSet"],
  },
};

export default options;
