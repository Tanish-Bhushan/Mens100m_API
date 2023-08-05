const mongoose = require("mongoose");
const { stringify } = require("querystring");

const menSchema = new mongoose.Schema({
  ranking: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    reuqired: true,
    trim: true,
  },
  dob: {
    type: Date,
    reuqired: true,
    trim: true,
  },
  country: {
    type: String,
    reuqired: true,
    trim: true,
  },
  score: {
    type: String,
    reuqired: true,
    trim: true,
  },
  event: {
    type: String,
    default: "100m"
  },
});

const MensRanking = mongoose.model("MenRanking", menSchema);
module.exports = MensRanking;
