const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const Fixture = require('./models/Fixture');

const cachedHtml = "";

const getCachedHtml = (callback) => {
  fs.readFile(__dirname + '/../../cacheData/cacheResults.html', (err, data) => {
    if(err){
      throw err;
    }
    callback(data);
  })
}

function setFixtureDate(data){
  var fixtureList = [];

  $ = cheerio.load(data, {
    ignoreWhitespace: true,
  });

  

  $('th').each((i, elem) => {
    const options = {};
    options.date = elem.children[0].data
    let fixture = new Fixture(options);
    fixtureList.push(fixture);
  })
}

function createJsonFromHtml(data){
  $ = cheerio.load(data);
  $('table.result').each((i, elem) => {
    const tableChildren = elem.children;
    // writeToDisk(tableChildren.json());
    console.log(tableChildren[0]);
  })
}

function writeToDisk(data){
  fs.writeFile(path.join('cheerioObject.json'), data, (error) =>{
    if(error){ console.log('Error:', error)}
      else {console.log('cheerio stuff successfully written to', __dirname)}
  })
}

function app(){
  getCachedHtml(createJsonFromHtml);
}

app();

