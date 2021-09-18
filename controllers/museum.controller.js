"use strict";

const axios = require("axios");
require("dotenv").config();

const { museumModel, Museum } = require("../models/museum.model");

const museumData = require("../data/museum.json");

const getMuseum = (request, response) => {
  const museumName = request.query.name;

  if (museumName) {
    const museumArr = museumData.find((item) => {
      return item.name.toLowerCase() === museumName.toLowerCase();
    });
    console.log(museumArr);

    let dataArr = new Museum(
      museumArr.name,
      museumArr.location,
      museumArr.museum_image,
      museumArr.description,
      museumArr.event_description,
      museumArr.event_description_image,
      museumArr.ticket_price
    );
    //   console.log("Museum",Museum)
    response.json(dataArr);
  } else {
    response.json(museumData);
  }
};

module.exports = {
  getMuseum,
};
