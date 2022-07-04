const router = require("express").Router();
const ApiRouter = require("./ApiRouter");
const ApiAuth = require("./ApiAuth");
router.use("/product", ApiRouter);
router.use("/auth", ApiAuth);

module.exports = router;
