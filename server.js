const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const Twitter = require('twitter');
const bodyParser = require('body-parser');
require('dotenv').config()



app.set('port', (process.env.PORT || 3001));
app.use(bodyParser.json());

// if(process.env.NODE_ENV === 'production'){
  // app.use(express.static('client/build'));
// }

app.get('/api/twitter', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://www.example.com:3000');

  var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });

  var params = {screen_name: 'pollokfc'};
  
  client.get('statuses/user_timeline', params, (error, tweets, response) => {
    if (!error) {
      res.send(tweets);
    } else {
      console.error(error);
    }
  })
});

app.get('/api/table', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://www.example.com:3000');
  res.sendFile(path.join(__dirname + '/scrapr/json/leagueTable.json'));
})

app.get('/api/results', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://www.example.com:3000');
  res.sendFile(path.join(__dirname + '/scrapr/json/lokResults.json'));
})

app.get('/api/fixtures', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://www.example.com:3000');
  res.sendFile(path.join(__dirname + '/scrapr/json/lokFixtures.json'));
})

app.get('/api/clubs', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://www.example.com:3000');
  res.sendFile(path.join(__dirname + '/scrapr/json/clubInformation.json'));
})

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`)
});