
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
        const { keyword } = req.query;
        const data = getData();
        
        const responseData = data.find(tweet => tweet.keyword === keyword);
        res.json({ responseData }); // Changed from res.send.json to res.json
    });

module.exports = router;