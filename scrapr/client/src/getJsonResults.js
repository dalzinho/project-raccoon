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

  $('table').each((i, tbl) => {
    dateElements = ($(tbl).find('th').text().split(' '));
    dateElements[1] = dateElements[1].split('').reverse();
    dateElements[1].splice(0, 2);
    dateElements[1] = dateElements[1].reverse().join('');
    dateElements.splice(0, 1);
    dateElements = dateElements.join('-')

    date = Date.parse(dateElements) / 1000 + (14 * 3600);

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
      } // closes rslt if-statement
    }); // closes rslt iterator
  }) //closes tbl iterator
  const lokResults = results.filter((result) => {
    if(result.homeTeam === 'Pollok' || result.awayTeam === 'Pollok'){return result};
  })
  writeToDisk(lokResults, 'lokResults.json');
  writeToDisk(results, 'allResults.json');
} // closes function



function writeToDisk(data, filename){
  fs.writeFile(path.join(`../../json/${filename}`), JSON.stringify(data), (error) =>{
    if(error){ console.log('Error:', error)}
      else {console.log(`${filename} written to json folder`)}
    })
}

function app(){
  getCachedHtml(createJsonFromHtml);
}

app();

