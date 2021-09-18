"use strict";

const axios = require("axios");
require("dotenv").config();



const museumData = require("../data/mus.json");

const getUser = (request, response) => {
 
  response.json(museumData);
};

module.exports = {
  getUser,
};
