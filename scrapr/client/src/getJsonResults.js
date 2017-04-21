const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const cachedHtml = "";

const getCachedHtml = (callback) => {
  fs.readFile(__dirname + '/../../cacheData/cacheResults.html', (err, data) => {
    if(err){
      throw err;
    }
    callback(data);
  })
}

function createJsonFromHtml(data){

  $ = cheerio.load(data, {
    ignoreWhitespace: true,
  });

  var fixtureList = [];

  $('table').each((i, table) => {
    const date = $(this).children('th');
    console.log(date.text());
  })


}

function app(){
  getCachedHtml(createJsonFromHtml);
}

app();

