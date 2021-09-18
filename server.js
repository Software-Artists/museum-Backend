"use strict";

const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
app.use(cors());
app.use(express.json());




const { getUser } = require("./controllers/museum.controller");
app.get("/", getUser);




app.listen(3026, () => {
  console.log(`Server started on port ${3026}`);
});
