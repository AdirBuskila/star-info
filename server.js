const puppeteer = require('puppeteer');
const express = require('express');
const path = require('path');
const starScrapper = require('./src/api/star.scrape');
const port = process.env.PORT || 4000;

const app = express();

app.get('/cors', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send({ msg: 'This has CORS enabled 🎈' });
});

app.get('/api/star-info', async (req, res) => {
  // const results = await scrapeStar({ starName: 'neptune', xPath: neptunePath });
  const results = await starScrapper.getStarsData();
  console.log('results in req :>> ', results);
  res.json(results);
});

app.use(express.static('public'));
app.get('/**', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(port);
console.log(`listening on port ${port}`);
