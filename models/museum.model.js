"use strict";
const mongoose = require("mongoose");

const museumSchema = new mongoose.Schema({
  name: { type: String },
  location: { type: String },
  museum_image: { type: String },
  description: { type: String },
  event_description: { type: String },
  event_description_image: { type: String },
  ticket_price: { type: String },
});

class Museum {
  constructor(
    name,
       location,
    event_description,
    event_description_image,
    ticket_price,
    museum_image,
    id
  ) {
    this.name = name;
    this.location = location;
    this.event_description=event_description;
    this.event_description_image=event_description_image;
    this.ticket_price=ticket_price;
    this.museum_image=museum_image;
    this.id=id
    
  }
}
const museumModel = mongoose.model("myMuseum", museumSchema);

module.exports = {
  museumModel,
  Museum,
};
