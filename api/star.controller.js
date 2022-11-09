const { getStarsData } = require('./star.scrape');

async function getStars(req, res) {
  try {
    const Board = await getStarsData();
    res.json(Board);
  } catch (err) {
    res.status(500).send({ err: 'Failed to get Board' });
  }
}

module.exports = {
  getStars,
};
