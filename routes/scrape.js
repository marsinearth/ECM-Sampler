const express = require('express');
const router = express.Router();
const Nightmare = require('nightmare');
const vo = require('vo');
const Xvfb = require('xvfb');
const xvfb = new Xvfb();
const redis = require('redis'),
      client = redis.createClient();
const URL = 'https://www.ecmrecords.com/catalogue/1484665725';

//nightmare scraping function of ECM pages
function *run(){ 
  let nightmare = new Nightmare({ 
    width: 1280,
    height: 700,
    show: false
  });

  return yield nightmare
    .goto(URL)
    .wait('#mainpage .product .tracklisting')
    .evaluate(() => {                  
      let doc = document, release, rMod, tracks;      
      let albumObj = { catl: "", title: "", artists: "", release: "", album_jacket: "", description: "", sample_tracks: 0 };
      albumObj.catl = '1484665725';
      albumObj.title = doc.querySelector('#mainpage .product .top .images img').title;
      albumObj.album_jacket = doc.querySelector('#mainpage .product .top .images img').src;
      albumObj.artists = doc.querySelector('#mainpage .product .container .content .row .col-md-6 h2').textContent;
      release = doc.querySelector('#mainpage .product .container .content .row .col-md-6 .ps').innerHTML;
      rMod = release.substring(14, release.indexOf('<br'));
      albumObj.release = rMod.substr(3,2)+"."+rMod.substr(0,2)+"."+rMod.substr(6,4);   
      albumObj.description = doc.querySelector('#mainpage .product .press-item p').textContent;      
      tracks = doc.querySelectorAll('#mainpage .product .container .row .tracklisting .playable');      
      albumObj.sample_tracks = tracks.length;
      albumObj.genre = tracks[0].getAttribute('data-movement').length === 0 ? 'Jazz' : 'Classical';
      for(let i = 0; i < tracks.length; i++) {
	albumObj["sample_track" + String([i]) + ":title"] = tracks[i].getAttribute('data-title');
	albumObj["sample_track" + String([i]) + ":movement"] = tracks[i].getAttribute('data-movement');
	albumObj["sample_track" + String([i]) + ":artists"] = tracks[i].getAttribute('data-artist');
	albumObj["sample_track" + String([i]) + ":composer"] = tracks[i].getAttribute('data-composer');
	albumObj["sample_track" + String([i]) + ":URL"] = tracks[i].getAttribute('data-track');
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
      //put data with catalogue hash
      client.hmset("catalogue:" + result.catl, result);
    });   
  });  
}); 

module.exports = router;
