const express = require('express');
const path = require('path');
const starScrapper = require('./src/api/star.scrape');
const cors = require('cors');

const app = express();

if (process.env.NODE_ENV === 'production') {
  // Express serve static files on production environment
  app.use(express.static(path.resolve(__dirname, 'public')));
} else {
  // Configuring CORS
  const corsOptions = {
    // Make sure origin contains the url your frontend is running on
    origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://localhost:3000'],
    credentials: true,
  };
  app.use(cors(corsOptions));
}

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

const port = process.env.PORT || 3333;
app.listen(port);
console.log(`listening on port ${port}`);
