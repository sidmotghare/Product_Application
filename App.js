require("dotenv").config();
const express = require("express");
const app = express();
const Routers = require("./Routes/index");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const { startDebug } = require("./Routes/middleware/Debug");
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: false }));
app.use("/api", Routers);

// console.log(process.env.PORT);
// const mongoUrl =
//   "mongodb+srv://sidmotghare:88wMcBXWxicCDJ4l@cluster0.dpqwo.mongodb.net/appdb?retryWrites=true&w=majority";
mongoose.connect(process.env.MONGODBURL);
app.listen(process.env.PORT, (req, res) => {
  startDebug("App: Server started at port 3005");
});
