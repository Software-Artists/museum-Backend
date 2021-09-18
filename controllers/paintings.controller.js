"use strict";

const axios = require("axios");
require("dotenv").config();

const { paintingsModel, Paintings } = require("../models/paintings.model");

// const museumData = require("../data/mus.json");

const getPainting = async (request, response) => {
  await axios
    .get("https://api-server-museum.herokuapp.com")
    .then((museumData) => {
      const museumName = request.query.name;

      if (museumName) {
        const museumArr = museumData.data.filter((item) => {
          return item.name.toLowerCase() === museumName.toLowerCase();
        });
        // console.log(museumArr);
        let arr1 = museumArr.map((paint) => {
          return new Paintings(
            paint.name,
            paint.title,
            paint.artist_display,
            paint.image_id
          );
        });
        console.log("Museum", arr1);
        response.json(arr1);
      } else {
        response.json(museumData.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = {
  getPainting,
};
