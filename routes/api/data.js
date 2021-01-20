const express = require("express");
const router = express.Router();
const company = require("../../models/Company");
const request = require("request");
const config = require("config");

//const Exchange = "BSE";
let counter = config.counter;
const alphaKey = config.alphaKeys;

//@route GET api/data/info/:symbol
//@desc Get company info
//@access Pubic
router.get("/info/:symbol", (req, res) => {
  try {
    if (counter == 4) counter = 0;
    else counter = counter + 1;
    key = alphaKey[counter];
    //console.log(key);
    const options = {
      uri: `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=BSE:${req.params["symbol"]}&apikey=${key}`,
      method: "GET",
      headers: { "user-agent": "node.js" },
    };
    request(options, (error, response, body) => {
      if (error) {
        throw error;
      }
      body = JSON.parse(body);
      console.log(body);
      if (body.Note) {
        return res.status(500).json({ msg: "Please wait" });
      }
      if (
        response.statusCode !== 200 ||
        Object.keys(body["Global Quote"]).length == 0
      ) {
        return res.status(404).json({ msg: "No company or relevant data" });
      }

      return res.json(body);
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
    console.log(err);
  }
});

//@route GET api/data/:symbol/:duration
//@desc Get company timeseries data
//@access Pubic
router.get("/:symbol/:duration", (req, res) => {
  try {
    if (counter == 4) counter = 0;
    else counter = counter + 1;
    let key = alphaKey[counter];
    console.log(key);
    const options = {
      uri: `https://www.alphavantage.co/query?function=TIME_SERIES_${req.params["duration"]}_ADJUSTED&symbol=BSE:${req.params["symbol"]}&apikey=${key}`,
      method: "GET",
      headers: { "user-agent": "node.js" },
    };
    request(options, (error, response, body) => {
      if (error) {
        throw error;
      }
      body = JSON.parse(body);
      console.log(body);
      if (body["Error Message"]) {
        return res.status(500).json({ msg: "Please wait" });
      }
      if (response.statusCode !== 200 || Object.keys(body).length === 1) {
        return res.status(404).json({ msg: "No company or relevant data" });
      }

      return res.json(body);
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
    console.log(err);
  }
});

//@route GET api/data/news
//@desc Get company timeseries data
//@access Public

module.exports = router;
