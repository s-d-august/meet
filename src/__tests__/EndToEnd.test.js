import puppeteer from 'puppeteer';

describe('filter events by city', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:5173/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test("When user hasn't searched for a city, show upcoming events from all cities.", async () => {
    // Select all event items
    const eventItems = await page.$$('.event');
    expect(eventItems.length).toBeGreaterThan(0); // Ensure events are displayed

    // Extract and log the locations of all events
    const eventLocations = await Promise.all(
      eventItems.map(async (event) => {
        const locationElement = await event.$('.event-location'); // Get the element handle
        return await page.evaluate((el) => el.textContent, locationElement); // Extract text content
      })
    );

    // Ensure there are multiple unique locations
    const uniqueLocations = [...new Set(eventLocations)];
    expect(uniqueLocations.length).toBeGreaterThan(1); // Ensure multiple locations are present
  });

  test('User should see a list of suggestions when they search for a city.', async () => {
    await page.click('#city-search .city');
    const suggestionList = await page.$('.suggestions');
    expect(suggestionList).toBeDefined()
  });

  test('User can select a city from the suggested list.', async () => {
    await page.click('#city-search .city');
    const suggestions = await page.$$('.city-suggestion');
    const chosenLocation = suggestions[0];
    const locationValue = await page.evaluate((el) => el.textContent, chosenLocation);
    console.log(locationValue);

    // check to make sure ONLY events for the selected city are shown
    await page.click('.city-suggestion');
    const eventItems = await page.$$('.event');
    expect(eventItems.length).toBeGreaterThan(0); // Ensure events are displayed
    const eventLocations = await Promise.all(
      eventItems.map(async (event) => {
        const locationElement = await event.$('.event-location'); // Get the element handle
        return await page.evaluate((el) => el.textContent, locationElement); // Extract text content
      })
    );

    // Ensure there is only one location, matching the one selected
    const uniqueLocations = [...new Set(eventLocations)];
    console.log(uniqueLocations[0])
    expect(uniqueLocations.length).toBe(1);
    expect(uniqueLocations[0] == locationValue)
  });

})

describe('show/hide event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:5173/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeNull();
  });

});