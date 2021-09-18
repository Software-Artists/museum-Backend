"use strict";

const axios = require("axios");
require("dotenv").config();

const { paintingsModel, Paintings } = require("../models/paintings.model");

const museumData = require("../data/museum.json");

const getPainting = (request, response) => {
  const museumName = request.query.name;

  if (museumName) {
    const museumArr = museumData.find((item) => {
      return item.name.toLowerCase() === museumName.toLowerCase();
    });
    console.log(museumArr);

    let dataArr = new Paintings(
      museumArr.name,
      museumArr.location,
      museumArr.art_image1,
      museumArr.description_image1,
      museumArr.art_image2,
      museumArr.description_image2,
      museumArr.art_image3,
      museumArr.description_image3,
      museumArr.art_image4,
      museumArr.description_image4,
      museumArr.art_image5,
      museumArr.description_image5
    );
    //   console.log("Museum",Museum)
    response.json(dataArr);
  } else {
    response.json(museumData);
  }
};

module.exports = {
  getPainting,
};
