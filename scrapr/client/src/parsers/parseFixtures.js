const cheerio = require('cheerio');
const Fixture = require('../models/Fixture');
const writeToDisk = require('./writeToDisk');
const fs = require('fs');
const clubInfo = require('../../../json/clubInformationRaw')



function parseFixtures(data){
  $ = cheerio.load(data, {
    normalizeWhitespace: true,
    xmlMode: true
  })

  let fixtures = [];
  let options = {};
  let date, league, homeTeam, awayTeam, time;

  $('table').each((i, tbl) => {
    date = $(tbl).find('th').text();

    $(tbl).children().each((i, fxt) => {
      if(fxt.children.length > 3){

        league = $(fxt).children().eq(0).text();
        home = $(fxt).children().eq(1).text();
        away = $(fxt).children().eq(3).text();
        time = $(fxt).children().eq(4).text();

        options = {
          date: date,
          league: league,
          homeTeam: home,
          awayTeam: away, 
          time: time
        }

        clubInfo.forEach((club => {
          // console.log(options);
          // homeTeam === club.fullName ? options[homeTeam] = club : options[homeTeam] = home;
          if (home === club.fullName){
            console.log('home match!')
            options.homeTeam = club;}
          else if (away === club.fullName){
            console.log('away match!');
            options.awayTeam = club;
          };
        }));
        console.log(options);
        fixtures.push(new Fixture(options));

           } //closes fxt if statement
    }); //closes fxt enumeration
  })//closes tbl enumeration

  // const lokFixtures = fixtures.filter((fixture) => {
  //   // if(fixture.homeTeam === 'Pollok' || fixture.awayTeam === 'Pollok'){return fixture};
  // })

  writeToDisk(fixtures, 'lokFixtures.json');
}//closes function

const loadClubData = () => {
  return new Promise( (resolve, reject) => {
    fs.readFile(__dirname + '/../../../json/clubInformation.json', (err, data) => {
      if(err) return reject(err);
      else resolve(data);
    })
  })
}

function setHomeAndAway(options, clubInfo){
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