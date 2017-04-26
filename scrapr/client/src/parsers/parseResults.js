const cheerio = require('cheerio');
const Result = require('../models/Result');
const writeToDisk = require('./writeToDisk');

function parseResults(data){
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

module.exports = parseResults;