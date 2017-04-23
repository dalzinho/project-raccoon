const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const Result = require('./models/Result');

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
    normalizeWhitespace: true,
    xmlMode: true
  });

  let results = [];
  let options = {};
  let date, league, homeTeam, homeGoals, awayGoals, awayTeam;

  $('.resultsmonth').each((i, div) => {
    $('.result').each((i, table) => {
        console.log(table.children[1].children[1].children[0].data);
      $('tr').each((i, tr) => {
        options[date] = 'date';
        const children = tr.children;

        if(children.length > 3){
          league = children[1].children[0].data;
          homeTeam = children[3].children[0].data;
          homeGoals = children[5].children[0].data;
          awayGoals = children[7].children[0].data;
          awayTeam = children[9].children[0].data;
        }

        options = {
          date: date,
          league: league,
          homeTeam: homeTeam,
          homeGoals: homeGoals,
          awayGoals: awayGoals,
          awayTeam: awayTeam
        }

        results.push(new Result(options));

      });
    });
  });
  // console.log(results);
}





    // } else if (children.length === 3){
    //   date = (children[1].children[0].data);
    // }





 // console.log(results);

  // use regex? to get the one containing Pollok

  // use data from that row to complete result object

  // add result object to results array

  // refactor code for enumeration over all tables

  // save that array to disk as results.json});

  // go through remaining <tr>s



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

