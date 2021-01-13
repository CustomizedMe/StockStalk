const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  sector: {
    type: String,
  },
  exchange: {
    type: String,
  },
  price: {
    type: Number,
  },
  open: {
    type: Number,
  },
  close: {
    type: Number,
  },
  latestclosing: {
    type: Date,
    default: Date.now,
  },
  volume: {
    type: Number,
  },
  previousclose: {
    type: Number,
  },
  changePercent: {
    type: Number,
  },
  change: {
    type: Number,
  },
  yearHigh: {
    type: Number,
  },
  yearLow: {
    type: Number,
  },
});
module.exports = Company = mongoose.model("company", CompanySchema);
