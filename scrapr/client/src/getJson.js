const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const Result = require('./models/Result');
const parseTable = require('./parsers/parseTable');
const parseResults = require('./parsers/parseResults');
const parseFixtures = require('./parsers/parseFixtures');

const cachedHtml = "";

const getCachedHtml = (filename, callback) => {
  fs.readFile(__dirname + `/../../cacheData/${filename}`, (err, data) => {
    if(err){
      throw err;
    }
    callback(data);
  })
}

function app(){
  getCachedHtml('cacheResults.html', parseResults);
  getCachedHtml('cacheLeagueData.html', parseTable);
  getCachedHtml('cacheForthcoming.html', parseFixtures);
}

app();

