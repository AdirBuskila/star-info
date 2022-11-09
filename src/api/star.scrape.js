const puppeteer = require('puppeteer');

const AU_UNIT = 6.6845871222684e-9;
const LM_UNIT = 8.316746396769;

const elementPath = {
  distance: 'body div.container span div:nth-child(1) div.content div.main_content div:nth-child(3) div:nth-child(7) ar',
};

const solarSystem = [
  { starName: 'mercury', xPath: elementPath },
  { starName: 'venus', xPath: elementPath },
  { starName: 'mars', xPath: elementPath },
  { starName: 'jupiter', xPath: elementPath },
  { starName: 'saturn', xPath: elementPath },
  { starName: 'uranus', xPath: elementPath },
  { starName: 'neptune', xPath: elementPath },
];

async function scrapeStar(star) {
  const { starName, xPath } = star;
  const browser = await puppeteer.launch();
  // const browser = await puppeteer.launch({ headless: false, slowMo: 200, devtools: true });
  const page = await browser.newPage();
  await page.goto(`https://theskylive.com/how-far-is-${starName}`);
  console.log('starName :>> ', starName);
  const el = await page.$(xPath.distance);
  const txt = await el.getProperty('textContent');
  const distance = await txt.jsonValue();

  const km = parseInt(distance.split(' ')[0].replace(/,/g, ''));
  const au = kmToAu(km).toFixed(5);
  const lm = auToLm(au);
  const time = calcTime(lm);

  browser.close();
  return { starName: toCapital(starName), distance, au, time };
}

const getStarsData = async () => {
  try {
    const results = await Promise.all(
      solarSystem.map(async (star) => {
        return scrapeStar(star);
      })
    );
    return results;
  } catch (err) {
    console.error(err + 'Problem getting star data at server');
  }
};

const kmToAu = (km) => km * AU_UNIT;
const auToLm = (au) => au * LM_UNIT;
const toCapital = (str) => str.substring(0, 1).toUpperCase() + str.substring(1);
const calcTime = (lm) => {
  let hours, minutes, seconds;
  hours = Math.floor(lm / 60);
  minutes = Math.floor(((lm / 60) % 1) * 60);
  seconds = Math.floor(((((lm / 60) % 1) * 60) % 1) * 60);
  return { hours, minutes, seconds };
};

module.exports = {
  getStarsData,
};
