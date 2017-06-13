var express = require('express');
const fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var router = express.Router();

router.get('/', function(req, res, next){
  //sample page
  const url = 'https://www.ecmrecords.com/catalogue/1487251170/small-town-bill-frisell-thomas-morgan';
  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);
      var title, release, rating;
      var json = { title: "", release: "", rating: "" };
      $('.title_wrapper').filter(function(){
	var data = $(this);
	title = data.children().first().contents().filter(function(){
	  return this.nodeType == 3;
	}).text().trim();
	json.title = title;
      });
      $('#titleYear').filter(function(){
	var data = $(this);
	release = data.text().replace(/\(|\)/g, '');
	json.release = release;
      });
      $('.ratingValue').filter(function(){
	var data = $(this);
	rating = data.children().first().text();
	json.rating = rating;
      });
      res.json(json);
    } 
  });  
});

module.exports = router;
