var Greeter = artifacts.require("GreeterL2");

/**
 * Deploy L2 Contract
 * Run this migration on L2 to deploy the Greeter contract.
 */
module.exports = async function (deployer) {
  console.log("Deploying L2 Greeter 👋👋");
  const instance = await deployer.deploy(Greeter);
};
