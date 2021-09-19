"use strict";

const feedBackModel = require("../models/feedback.modal");

const seedFeedBack = () => {
  //=============================================== First Feedack:
  const firstFeedBack = new feedBackModel({
    name: "Imad Elfarageen",
    feedBackMessage: "Thiswebsite  is really good !",
  });
  firstFeedBack.save();

  //=============================================== Second Feedack:
  const secondFeedBack = new feedBackModel({
    name: "Mohammad Hamzeh",
    feedBackMessage: "good website !",
  });
  secondFeedBack.save();

  const thirdFeedBack = new feedBackModel({
    name: "Gaith Sameer",
    feedBackMessage: "good website, with good data representation !",
  });
  thirdFeedBack.save();
};

module.exports = seedFeedBack;
