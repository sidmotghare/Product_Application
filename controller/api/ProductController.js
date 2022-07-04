const ProductDetailsModel = require("../../model/ProductDetailsModel");
const productController = {
  //Requesting All Product Details as list-----Read Opertaion
  productList: async (req, res) => {
    try {
      let result = await ProductDetailsModel.find();
      // console.log(result);
      res.send({ status: true, result });
    } catch (error) {
      console.log(error);
    }
  },
  productDetails: async (req, res) => {
    let { id } = req.query;
    //console.log(id);
    let result = await ProductDetailsModel.findById(id);
    if (result !== null) {
      res.send({ status: true, result });
    } else {
      res.send({ status: false, msg: "Product Details not found" });
    }
  },
  //Create Operation----Add
  addProduct: async (req, res) => {
    let data = req.body;
    // console.log(data);
    let newProduct = new ProductDetailsModel({
      productName: data.productName,
      productPrice: data.productPrice,
      productFeatures: data.productFeatures,
    });
    let result = await newProduct.save();
    res.send({ status: true, result, msg: "Product added successfully" });
  },
  deleteProduct: async (req, res) => {
    let { id } = req.query;
    let result = await ProductDetailsModel.deleteOne({ _id: id });
    if (result.deletedCount > 0) {
      res.send({ status: true, result, msg: "Product deleted successfully" });
    } else {
      res.send({ status: false, result, msg: "Product details not found" });
    }
  },
  editProduct: async (req, res) => {
    // ?\let { id } = req.query;
    let data = req.body;
    let result = await ProductDetailsModel.findById(data._id).count();
    if (result !== 0) {
      let { modifiedCount } = await ProductDetailsModel.updateOne(
        { _id: data._id },
        {
          productName: data.productName,
          productPrice: data.productPrice,
          productFeatures: data.productFeatures,
        }
      );
      if (modifiedCount > 0) {
        res.send({
          status: true,
          result,
          msg: "Product details updated successfully",
        });
      } else {
        res.send({ status: false, result, msg: "Product details not updated" });
      }
    }
  },
};
module.exports = productController;
