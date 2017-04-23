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

  // there are umpteen tables
  // the first <tr> in the table is the date for all the fixtures below it, however many there are.
  // the remaining <tr>s in the table describe one match result.

  // SO...

  // iterate through tables.

  $('table').each((i, tbl) => {

  // hold the date as a 'global' variable for the table
  date = ($(tbl).find('th').text());
  // create a new result based on each <tr>
  $(tbl).children().each((i, rslt) => {
    if(rslt.children.length > 3){      

      league = ($(rslt).children().eq(0).text());
      homeTeam = ($(rslt).children().eq(1).text());
      homeGoals = ($(rslt).children().eq(2).text());
      awayGoals = ($(rslt).children().eq(3).text());
      awayTeam = ($(rslt).children().eq(4).text());

      options = {
        date: date,
        league: league,
        homeTeam: homeTeam,
        homeGoals: homeGoals,
        awayGoals: awayGoals,
        awayTeam: awayTeam
      }

  results.push(new Result(options));

    }
  });

  // add it to the array of results.

})
  



  console.log(results);





}




  // $('.resultsmonth').each((i, div) => {
  //   $(div).find('.result').each((i, tbl) => {
  //     console.log("I'm a table!");
  //     $('th').addClass('date');
  //     date = $(tbl).find('.date').text()

  //     $(tbl).find('tr').each((i, elem) => {
  //       league = $(tbl).find('.league').text();
  //       homeTeam = $(tbl).find('.hometeam').text();
  //       homeGoals = $(tbl).find('.homegoals').text();
  //       awayGoals = $(tbl).find('.awaygoals').text();
  //       awayTeam = $(tbl).find('.awayteam').text();

  //     });
  //   })




  // })




      // if($(table).children().length === 3) date = ;
        // if(this.length > 3){
        //   league = children[1].children[0].data;
        //   homeTeam = children[3].children[0].data;
        //   homeGoals = children[5].children[0].data;
        //   awayGoals = children[7].children[0].data;
        //   awayTeam = children[9].children[0].data;
        // }













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

