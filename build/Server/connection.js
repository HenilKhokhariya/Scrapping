const mongoose = require("mongoose");
const URL = process.env.URL;
const connect = async (req, res) => {
  try {
    mongoose.connect(URL);
  } catch (error) {
    console.log("Not Connect");
  }
};

module.exports = connect;
