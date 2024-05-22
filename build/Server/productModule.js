const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  trand: {
    type: String,
  },
  title: {
    type: String,
  },
  url: {
    type: String,
  },
  reting: {
    type: String,
  },
  price: {
    type: String,
  },
  total_reating: {
    type: String,
  },
  image: {
    type: String,
  },
});
const Product = new mongoose.model("Product", productSchema);
module.exports = { Product };
