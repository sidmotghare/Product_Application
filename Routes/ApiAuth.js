const ApiAuthRouter = require("express").Router();
const AuthController = require("../controller/api/AuthController");
ApiAuthRouter.post("/create-user", AuthController.createUser);
ApiAuthRouter.post("/login", AuthController.login);
module.exports = ApiAuthRouter;
