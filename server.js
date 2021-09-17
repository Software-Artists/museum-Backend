"use strict";

const express = require("express");
const app = express();
const cors = require("cors");
// const mongoose = require("mongoose");
require("dotenv").config();
app.use(cors());
app.use(express.json());

// const PORT = process.env.PORT;
// const MONGO_URL = process.env.MONGO_URL;
// const DB_NAME = process.env.DB_NAME;

// mongoose.connect(MONGO_URL);

const getIndex = require("./controllers/index.controller");
app.get("/", getIndex);

console.log("hi")

app.listen(3020, () => {
    console.log(`Server started on port ${3020}`);
  });