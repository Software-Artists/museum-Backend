"use strict";

const axios = require("axios");
require("dotenv").config();

const { museumModel, Museum } = require("../models/museum.model");

const museumData = require("../data/mus.json");
// console.log(museumData)
const getMuseum = (request, response) => {
  const museumName = request.query.name;

  if (museumName) {
    const museumArr = museumData.filter((item) => {
     
      return  item.name.toLowerCase() === museumName.toLowerCase();
        
    });

    
    // console.log(museumArr);
    let arr1=museumArr.map((mus) => {
     return new Museum(
      mus.name,
      mus.location,
      mus.event_description,
      mus.event_description_image,
      mus.ticket_price,
      mus.museum_image,
     
     
    );
  });
      console.log("Museum",arr1)
    response.json(arr1);
  } else {
    response.json(museumData);
  }
};

module.exports = {
  getMuseum,
};
