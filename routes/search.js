const express = require("express");
const router = express.Router();
const fs =require ("fs");
const tweets ='../data.json'


// function getData(){
//     const data=fs.readFileSync(tweets);
// }
console.log(getData());

router
    .route("/search")
    .post(( (req, res) =>{
const {keyWord}= req.body;




    }));


// post (word)



// get=>
// mentions 

//  [
//  time (time would be dynamic)
//  tweets
//  user name ]


// num of mentions 

// top three accounts 

module.exports = router;