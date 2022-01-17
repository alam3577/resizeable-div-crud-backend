const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  desc: {
    type: String,
    trim: true,
    required: true,
  },
  img: {
    type: String,
    trim: true,
    required: true,
  },
});

const Content = mongoose.model("Content", contentSchema);
module.exports = Content;
