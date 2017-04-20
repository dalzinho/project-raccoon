const express = require('express');
// const router = express.Router();
const app = express();
const fs = require('fs');
const path = require('path');

app.set('port', (process.env.PORT || 3001));

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
}

app.get('/api/table', (req, res) => {
  res.sendFile(path.join(__dirname + '/site_scraper/leagueTable.json'));
})

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`)
});