require("dotenv").config();
const express = require("express");
const configExpress = require("./config/express");
const connectDB = require("./config/express");

const app = express();
connectDB();
configExpress(app);

module.exports = app;
