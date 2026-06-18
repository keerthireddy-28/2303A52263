const axios = require("axios");

const BASE_URL =
  "http://4.224.186.213/evaluation-service/logs";

async function Log(
  stack,
  level,
  packageName,
  message,
  token
) {
  try {
    const response = await axios.post(
      BASE_URL,
      {
        stack,
        level,
        package: packageName,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Log Error:",
      error.response?.data || error.message
    );
  }
}

module.exports = Log;