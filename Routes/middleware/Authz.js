const jwt = require("jsonwebtoken");
privateKey = process.env.PRIVATE_KEY;
let Authz = {
  verifyAuthz: async (req, res, next) => {
    let token = req.header("x_auth_token");
    //res.send({ token });
    try {
      let user = await jwt.verify(token, privateKey);
      res["user"] = user;
      next();
    } catch (error) {
      res
        .status(401)
        .send({ status: false, msg: "You are not authorized user" });
      console.log("Unauthorized User Issue");
      return false;
    }
  },
};
module.exports = Authz;
