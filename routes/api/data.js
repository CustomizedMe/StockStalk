const express = require("express");
const router = express.Router();
const company = require("../../models/Company");
const request = require("request");
const config = require("config");
const fetch = require("node-fetch");
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
      //console.log(body);
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

//@route GET api/data/:symbol1/:symbol2/:duration
//@desc Get compare company timeseries data
//@access Pubic
router.get("/:symbol1/:symbol2/:duration", async (req, res) => {
  try {
    if (counter == 4) counter = 0;
    else counter = counter + 1;
    let key = alphaKey[counter];
    const request1 = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_${req.params["duration"]}_ADJUSTED&symbol=BSE:${req.params["symbol1"]}&apikey=${key}`
    );
    var data1 = await request1.json();
    const request2 = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_${req.params["duration"]}_ADJUSTED&symbol=BSE:${req.params["symbol2"]}&apikey=${key}`
    );
    var data2 = await request2.json();

    return res.json(data1);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
    console.log(err);
  }
});

// // @route    GET api/data/news
// // @desc     Get news
// // @access   Public
// router.get("/news", async (req, res) => {
//   try {
//     const uri = encodeURI(
//       `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${newsApi}`
//     );
//     const headers = {
//       "user-agent": "node.js",
//       Authorization: `token ${config.get("githubToken")}`,
//     };

//     const gitHubResponse = await axios.get(uri, { headers });
//     return res.json(gitHubResponse.data);
//   } catch (err) {
//     console.error(err.message);
//     return res.status(404).json({ msg: "No Github profile found" });
//   }
// });
module.exports = router;
