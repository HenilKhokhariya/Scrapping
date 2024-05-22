const mongoose = require("mongoose");
const URL =
  "mongodb+srv://henil:henil123@atlascluster.el84i03.mongodb.net/AmazonData?retryWrites=true&w=majority&appName=AtlasCluster";
const connect = async (req, res) => {
  try {
    mongoose.connect(URL);
  } catch (error) {
    console.log("Not Connect");
  }
};

module.exports = connect;
