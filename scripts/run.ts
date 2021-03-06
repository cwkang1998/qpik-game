import { ethers } from "hardhat";

const main = async () => {
  const gameContractFactory = await ethers.getContractFactory("QpikGame");
  const gameContract = await gameContractFactory.deploy(
    ["LightingCat", "ShoeCat", "BowlCat"],
    [
      "https://media.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif",
      "https://media.giphy.com/media/8vQSQ3cNXuDGo/giphy.gif",
      "https://media.giphy.com/media/v6aOjy0Qo1fIA/giphy.gif",
    ],
    [50, 200, 100],
    [100, 50, 75],
    "Dog Artist",
    "https://media.giphy.com/media/4y6DqPvlICp5S/giphy.gif",
    10000,
    20
  );

  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  const returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);
};

const runMain = async () => {
  try {
    await main();
  } catch (err: any) {
    console.log(err);
  }
};

runMain();
