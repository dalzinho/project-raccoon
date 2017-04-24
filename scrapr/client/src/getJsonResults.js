const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const Result = require('./models/Result');
var Team = require('./models/Team');
var Table = require('./models/Table');

const cachedHtml = "";

const getCachedHtml = (filename, callback) => {
  fs.readFile(__dirname + `/../../cacheData/${filename}`, (err, data) => {
    if(err){
      throw err;
    }
    callback(data);
  })
}

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

function parseTable(data){
  $ = cheerio.load(data, {
    ignoreWhitespace: true,
  });

  var table = new Table();

  $('tr').each(function(i, tr){
    var children = $(this).children();
    var options = {
      rank: children.eq(0).text(),
      name: children.eq(1).text(),
      p: children.eq(2).text(),
      ow: children.eq(3).text(),
      od: children.eq(4).text(),
      ol: children.eq(5).text(),
      of: children.eq(6).text(),
      oa: children.eq(7).text(),
      hw: children.eq(8).text(),
      hd: children.eq(9).text(),
      hl: children.eq(10).text(),
      hf: children.eq(11).text(),
      ha: children.eq(12).text(),
      aw: children.eq(13).text(),
      ad: children.eq(14).text(),
      al: children.eq(15).text(),
      af: children.eq(16).text(),
      aa: children.eq(17).text(),
      gd: children.eq(18).text(),
      pts: children.eq(19).text(),
    };
    var team = new Team(options);
    table.addTeam(team);
  }); 

  table.teams = table.teams.splice(2, 12);
  table.setStats(); 
  writeToDisk(table.teams, 'leagueTable.json')
}

function writeToDisk(data, filename){
  fs.writeFile(path.join(`../../json/${filename}`), JSON.stringify(data), (error) =>{
    if(error){ console.log('Error:', error)}
      else {console.log(`${filename} written to json folder`)}
    })
}

function app(){
  getCachedHtml('cacheResults.html', parseResults);
  getCachedHtml('cacheLeagueData.html', parseTable);
}

app();

