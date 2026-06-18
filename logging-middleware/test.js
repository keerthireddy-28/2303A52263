require("dotenv").config();

const Log = require("./logger");

async function testLogger() {
  const result = await Log(
    "backend",
    "info",
    "service",
    "Logging middleware test successful",
    process.env.ACCESS_TOKEN
  );

  console.log(result);
}

testLogger();