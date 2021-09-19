"use strict";

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
app.use(cors());
app.use(express.json());

const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL);

//============================= modal,controller, seed were added:
const {
  getFeedBack,
  createFeedBack,
} = require("./controllers/feedback.controller");



const seedFeedBack = require("./helper/feedback.seed");
// seedFeedBack();

app.get("/feedback", getFeedBack);
app.post("/feedback", createFeedBack);

//============================================================

const getIndex = require("./controllers/index.controller");
app.get("/", getIndex);

const { getMuseum } = require("./controllers/museum.controller");
app.get("/museum", getMuseum);

const { getPainting } = require("./controllers/paintings.controller");
app.get("/paintings", getPainting);

console.log("hi");

app.listen(3020, () => {
  console.log(`Server started on port ${3020}`);
});
