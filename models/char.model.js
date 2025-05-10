const mongoose = require("mongoose");

const charSchema = new mongoose.Schema(
  {
    charName: {
      type: String,
      required: true,
    },
    charSeries: {
      type: String,
      required: true,
    },
    charAuth: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("pg50char", charSchema);
