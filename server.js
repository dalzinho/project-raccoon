const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.set('port', (process.env.PORT || 3001));

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
}

app.get('/api/table', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://www.example.com:3000');
  res.sendFile(path.join(__dirname + '/scrapr/json/leagueTable.json'));
})

app.get('/api/results', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://www.example.com:3000');
  res.sendFile(path.join(__dirname + '/scrapr/json/lokResults.json'));
})

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`)
});