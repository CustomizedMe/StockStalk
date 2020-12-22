const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TimeseriesSchema = new Schema({
    symbol: {
        type: String,
        required : true
      },
    interval:{
        type : String,
        required : true
    },
    lastrefresh :{
        type:Date,
        required :true
    },
    data: [
        {
          open: {
            type: Number,
            required: true
          },
          close: {
            type: Number,
            required: true
          },
          high: {
            type: Number,
            required: true
          },
          low: {
            type: Number,
            required: true
          },
          volume: {
            type: Number,
            required: true
          },
          time: {
            type: Date,
            required: true
          }
        }
      ]

});

module.exports = Timeseries = mongoose.model('Timeseries', TimeseriesSchema);