const express = require('express');
const router = express.Router();
const Nightmare = require('nightmare');
const vo = require('vo');
const Xvfb = require('xvfb');
const xvfb = new Xvfb();
const redis = require('redis'),
      client = redis.createClient();
const jsesc = require('jsesc');

//nightmare scarping function of ECM pages
function *run(){ 
  var nightmare = new Nightmare({ 
    width: 1280,
    height: 700,
    show: false
  });

  //h3.mid
  return yield nightmare
    .goto('https://www.ecmrecords.com/catalogue/1484665725')
    .wait('#mainpage .product .tracklisting')
    .evaluate(() => {
      let doc = document, release, rMod, tracks;      
      let albumObj = { title: "", contents: { artists: "", release: "", album_jacket: "", description: "" }};
      albumObj.title = doc.querySelector('#mainpage .product .top .images img').title;
      albumObj.contents.album_jacket = doc.querySelector('#mainpage .product .top .images img').src;
      albumObj.contents.artists = doc.querySelector('#mainpage .product .container .content .row .col-md-6 h2').textContent;
      release = doc.querySelector('#mainpage .product .container .content .row .col-md-6 .ps').innerHTML;
      rMod = release.substring(14, release.indexOf('<br'));
      albumObj.contents.release = rMod.substr(3,2)+"."+rMod.substr(0,2)+"."+rMod.substr(6,4);      
      albumObj.contents.description = doc.querySelector('#mainpage .product .press-item p').textContent;
      tracks = doc.querySelectorAll('#mainpage .product .container .row .tracklisting .playable');
      for(let i = 0; i < tracks.length; i++) {
	albumObj.contents["sample_track" + String([i]) + ":title"] = tracks[i].getAttribute('data-title');
	albumObj.contents["sample_track" + String([i]) + ":movement"] = tracks[i].getAttribute('data-movement');
	albumObj.contents["sample_track" + String([i]) + ":artists"] = tracks[i].getAttribute('data-artist');
	albumObj.contents["sample_track" + String([i]) + ":composer"] = tracks[i].getAttribute('data-composer');
	albumObj.contents["sample_track" + String([i]) + ":URL"] = tracks[i].getAttribute('data-track');
      }
      return albumObj;
    })
    .end();    
}

router.get('/', (req, res) => {

  client.on("error", (err) => {
    console.log("Redis error", err);
  });

 xvfb.start(() => {
   vo(run)((err, result) => {
     if(err) throw err;
     xvfb.stop();
     client.hmset("aTitle:" + result.title, result.contents);
     client.hgetall("aTitle:" + result.title, (err2, reply) => {
       if(err2) throw err2; 
       res.json({ title: result.title, contents: reply })       
     });
   });   
 });  
}); 

module.exports = router;
