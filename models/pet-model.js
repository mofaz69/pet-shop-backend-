const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  // id is auto-generated and called "_id"
  typePet: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  adoptionStatus: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  hypoallergenic: {
    type: Boolean,
  },
  dietaryRestrictions: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
});

const Pet = mongoose.model("pets", petSchema);

module.exports = { Pet };