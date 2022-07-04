const ApiRouter = require("express").Router();
const productController = require("../controller/api/ProductController");
const Authz = require("./middleware/Authz");

ApiRouter.get("/list", Authz.verifyAuthz, productController.productList);
ApiRouter.post("/add", Authz.verifyAuthz, productController.addProduct);
ApiRouter.delete("/delete", Authz.verifyAuthz, productController.deleteProduct);
ApiRouter.put("/edit", Authz.verifyAuthz, productController.editProduct);
ApiRouter.get(
  "/get-details",
  Authz.verifyAuthz,
  productController.productDetails
);

module.exports = ApiRouter;
