"use strict";
const mongoose = require("mongoose");

const paintingsSchema = new mongoose.Schema({
  title: { type: String },
  location: { type: String },
  art_image1: { type: String },
  description_image1: { type: String },
  art_image2: { type: String },
  description_image2: { type: String },
  art_image3: { type: String },
  description_image3: { type: String },
  art_image4: { type: String },
  description_image4: { type: String },
  art_image5: { type: String },
  description_image5: { type: String },
});

class Paintings {
  constructor(
    name,
    location,
    art_image1,
    description_image1,
    art_image2,
    description_image2,
    art_image3,
    description_image3,
    art_image4,
    description_image4,
    art_image5,
    description_image5
  ) {
    this.name = name;
    this.location = location;
    this.art_image1 = art_image1;
    this.description_image1 = description_image1;
    this.art_image2 = art_image2;
    this.description_image2 = description_image2;
    this.art_image3 = art_image3;
    this.description_image3 = description_image3;
    this.art_image4 = art_image4;
    this.description_image4 = description_image4;
    this.art_image5 = art_image5;
    this.description_image5 = description_image5;
  }
}

const paintingsModel = mongoose.model("myPaintings", paintingsSchema);

module.exports = {
  paintingsModel,
  Paintings,
};
