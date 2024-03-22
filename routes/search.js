
const express = require("express");
const router = express.Router();
const fs = require("fs");
const tweets = './data.json';

function getData() {
    const data = fs.readFileSync(tweets);
    const parsedTweets = JSON.parse(data);
    return parsedTweets;
}

router
    .route("/search")
    .get((req, res) => {
        const data=getData().tweets;
        const { keyword } = req.query;
        if (!keyword) {
          return res.status(400).json({ error: 'Keyword parameter is required' });
        }
        const filteredTweets = data.filter(tweet =>
          tweet.keyword.toLowerCase() === keyword.toLowerCase()
        );
        res.json({ tweets: filteredTweets });
      });
  

module.exports = router;