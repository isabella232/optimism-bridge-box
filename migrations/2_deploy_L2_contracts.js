
var Greeter = artifacts.require("GreeterL2");

module.exports = async function(deployer) {
  console.log("Deploying L2 Greeter 👋👋", Greeter);
  const instance = await deployer.deploy(Greeter);
};
