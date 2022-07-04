const mongoose = require("mongoose");
const AuthModuleSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});
const AuthModel = mongoose.model("user", AuthModuleSchema);
module.exports = AuthModel;
