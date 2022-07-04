const AuthModel = require("../../model/AuthModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const privateKey = process.env.PRIVATE_KEY;
// console.log(privateKey);
let AuthController = {
  createUser: async (req, res) => {
    let data = req.body;
    let salt = await bcrypt.genSalt(10);
    let encryptPassword = await bcrypt.hash(data.password, salt);
    let user = new AuthModel({
      username: data.username,
      password: encryptPassword,
    });
    let result = await user.save();
    res.send(result);
  },
  login: async (req, res) => {
    let data = req.body;
    let result = await AuthModel.findOne({ username: data.username });
    if (result === null) {
      res.send({ status: false, msg: "Invalid Username" });
    } else {
      let is_valid = await bcrypt.compare(data.password, result.password);
      //console.log(is_valid);
      if (is_valid) {
        let user = {
          username: result.username,
          id: result._id,
        };
        let token = await jwt.sign(user, privateKey);
        res.header("access-control-expose-headers", "x_jwt_token");
        res.header("x_jwt_token", token);
        res.send({ status: true });
      } else {
        res.send({ status: false, msg: "invalid Password" });
      }
    }
  },
};
module.exports = AuthController;
