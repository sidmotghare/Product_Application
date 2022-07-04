const mongoose = require("mongoose");
const schema = mongoose.Schema;
const productDetailsSchema = new schema({
  productName: { type: String },
  productPrice: { type: Number },
  productFeatures: { type: String },
});
const ProductDetailsModel = mongoose.model("products", productDetailsSchema);
module.exports = ProductDetailsModel;
