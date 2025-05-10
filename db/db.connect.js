const mongoose = require("mongoose");

require("dotenv").config();

const MONGOURI = process.env.MONGODB;

async function connectToDb() {
  await mongoose
    .connect(MONGOURI)
    .then(() => {
      console.log("Connect to DB");
    })
    .catch((e) => {
      console.log("Error occured to while connecting to DB");
    });
}

module.exports = { connectToDb };
