const express = require('express');
const router = express.Router();
const redis = require('redis'),
      client = redis.createClient();

/* GET users listing. */
router.get('/', function(req, res) {
  client.on("error", (err) => {
    console.log("Redis error", err);
  });
  client.hgetall("catalogue:1484665725", (err, reply) => {
    if(err) throw err;
    let replyContainer = new Array();
    replyContainer.push(reply);
    res.json(replyContainer);       
  });            
});

module.exports = router;
