const puppeteer = require('puppeteer');

test('An event element is collapsed by default', async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.goto('http://localhost:5173/'); // If your Vercel app is running in a different port please update it here

  await page.waitForSelector('.event');

  const eventDetails = await page.$('.event .details');
  expect(eventDetails).toBeNull();
  await browser.close();
});