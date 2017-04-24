const cheerio = require('cheerio');
const Fixture = require('../models/Fixture');
const writeToDisk = require('./writeToDisk');
const fs = require('fs');

let fixtures = [];
let options = {};
let date, league, homeTeam, awayTeam, time;

function parseFixtures(data){
  $ = cheerio.load(data, {
    normalizeWhitespace: true,
    xmlMode: true
  })

  

  $('table').each((i, tbl) => {
    date = $(tbl).find('th').text();

    $(tbl).children().each((i, fxt) => {
      if(fxt.children.length > 3){

        league = $(fxt).children().eq(0).text();
        homeTeam = $(fxt).children().eq(1).text();
        awayTeam = $(fxt).children().eq(3).text();
        time = $(fxt).children().eq(4).text();

        options = {
          date: date,
          league: league,
          homeTeam: homeTeam,
          awayTeam: awayTeam,
          time: time
        }

        const clubInfo = loadClubData()
        .then( (data) => JSON.parse(data))
        .then( (json) => setHomeAndAway(json));




           } //closes fxt if statement
    }); //closes fxt enumeration
  })//closes tbl enumeration

  const lokFixtures = fixtures.filter((fixture) => {
    if(fixture.homeTeam === 'Pollok' || fixture.awayTeam === 'Pollok'){return fixture};
  })

  writeToDisk(lokFixtures, 'lokFixtures.json');
}//closes function

const loadClubData = () => {
  return new Promise( (resolve, reject) => {
    fs.readFile(__dirname + '/../../../json/clubInformation.json', (err, data) => {
      if(err) return reject(err);
      resolve(data);
    })
  })
}

function setHomeAndAway(clubInfo){
  const clubs = clubInfo;
  const home = options.homeTeam;
  const away = options.awayTeam;

  clubs.forEach( (club) => {
    //set hometeam
    if(club.fullName === home){
      options.homeTeam = club;
    }
      //set awayteam
    if(club.fullName === away){
      options.awayTeam = club;
    }    
  }) 
}

module.exports = parseFixtures;