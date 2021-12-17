import { ethers } from "hardhat";

const main = async () => {
  const gameContractFactory = await ethers.getContractFactory("QpikGame");
  const gameContract = await gameContractFactory.deploy();

  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
  } catch (err: any) {
    console.log(err);
  }
};

runMain();
