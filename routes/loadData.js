const express = require('express');
const router = express.Router();
const redis = require('redis'),
      client = redis.createClient();
let multi;

/* GET users listing. */
router.get('/', (req, res) => {
  client.on("error", err => {
    console.log("Redis error", err);
  });
  client.multi([
    ["hgetall","catalogue:1484665725"],
    ["lrange","catalogue:1484665725:tracklist",0,-1]
  ]).exec((err, replies) => {
    if(err) throw err;
    let replyContainer = [], albumResultSet = replies[0];
    albumResultSet.tracklist = JSON.parse(`[${replies[1]}]`);
    replyContainer.push(albumResultSet);
    res.json(replyContainer);       
  });            
});

module.exports = router;
