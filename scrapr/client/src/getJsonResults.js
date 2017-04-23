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
    normalizeWhitespace: true,
    xmlMode: true
  });

  

  $('th').each((i, elem) => {
    const options = {};
    options.date = elem.children[0].data
    let fixture = new Fixture(options);
    fixtureList.push(fixture);
  })
}

function createJsonFromHtml(data){
  $ = cheerio.load(data, {
    normalizeWhitespace: true,
    xmlMode: true
  });

  // const date = aTable.find('th').text();

  // get an example of one table
  // each table exists inside a div .resultsmonth
  // each div has <h3> (to be ignored fttb)
  // element[1] of div is table

  const aTable = $('.resultsmonth').children().eq(1);

  // go through remaining <tr>s
  aTable.find('tr').each((i, tr) => {
    const children = tr.children;
    if(children.length === 3){
      console.log(this);
    }


  });

  

  // use regex? to get the one containing Pollok

  // use data from that row to complete result object

  // add result object to results array

  // refactor code for enumeration over all tables

  // save that array to disk as results.json
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

