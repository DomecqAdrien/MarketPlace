const  assert  = require("assert");

const MarketPlace = artifacts.require("./MarketPlace.sol")

contract("MarketPlace",accounts => {
  it("should store an house with price = 90", async () => {
    const mp = await MarketPlace.deployed();

    await mp.sellHouse(90,50, 90,"a","a","a","a","a");

    const storedData = await mp.getPrice(0);
    console.log(storedData)

    assert.strictEqual(storedData, 90, "non")

    

  })
  it("should return false", async () => {

    const mp = await MarketPlace.deployed();

    await mp.sellHouse(90,50, 90,"a","a","a","a","a");

    const isSold = await mp.getIsSold(0);
    console.log(isSold)


    assert.strictEqual(isSold, false, "non")
  })

  it("should return true", async () => {

    const mp = await MarketPlace.deployed();

    await mp.sellHouse(90,50, 90,"a","a","a","a","a");
    await mp.buyHouse(0,"newAdress")
    const isSold = await mp.getIsSold(0);
    console.log(isSold)


    assert.strictEqual(isSold, false, "non")
  })
})
