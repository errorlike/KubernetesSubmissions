const crypto = require("crypto");

const randomString = crypto.randomBytes(16).toString("hex");

setInterval(() => {
  console.log(`${new Date().toISOString()}: ${randomString}`);
}, 5000);
