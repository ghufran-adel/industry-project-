
const express = require("express");
const router = express.Router();
const fs = require("fs");
const tweets = './data.json';

function getData() {
    const data = fs.readFileSync(tweets);
    const parsedTweets = JSON.parse(data);
    return parsedTweets;
}
tweetsData=getData()

router.get("/search", (req, res) => {
  const { keyword } = req.query;
  
  if (!keyword) {
      return res.status(400).json({ error: 'Keyword parameter is required' });
  }

  const filteredTweets = tweetsData.filter(item => item.keyword.toLowerCase() === keyword.toLowerCase());

  // Extracting tweets from the filtered data
  const tweets = filteredTweets.map(item => item.tweets).flat();

  res.json({ tweets });
});

module.exports = router;