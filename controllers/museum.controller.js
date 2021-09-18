"use strict";
const CircularJSON = require('circular-json');
const axios = require("axios");
require("dotenv").config();

const { museumModel, Museum } = require("../models/museum.model");


// const museumData = require("../data/mus.json");
// console.log(museumData)
const getMuseum = async (request, response) => {
  // const museumData = await axios.get('https://api-server-museum.herokuapp.com');

  
 await axios.get('https://api-server-museum.herokuapp.com').then((museumData)=>{
  
  const museumName = request.query.name;

  if (museumName) {
    const museumArr = museumData.data.filter((item) => {
     
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
    response.json(museumData.data)
  }
}).catch((error)=>{
  console.log(error);
  });
};

module.exports = {
  getMuseum,
};
