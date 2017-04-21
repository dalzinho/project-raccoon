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

function createJsonFromHtml(data){

  $ = cheerio.load(data, {
    ignoreWhitespace: true,
  });

  var fixtureList = [];

  $('div').each((index, element) => {
    const divChildren = $(this).children();
    const table = divChildren.eq(1).text();
    console.log(table.html()); 
    })
  // $('table.th').each((i, elem) => {
  //   const dateHeadings = elem.children();
  //   console.log(dateHeadings);
  //     var options = {
  //       date: elem.children().text(),
  //     }

  // fixtureList.push(new Fixture(options));
  // })

  // console.log(fixtureList);


}

function app(){
  getCachedHtml(createJsonFromHtml);
}

app();

