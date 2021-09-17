'use strict';

const { request, response } = require('express');


const museumModel = require('../models/museum.model');
const getMuseum = (request, response) => {

    museumModel.find((error, museumData) => {
    response.json(museumData)
  });

};



module.exports = {
    getMuseum
}