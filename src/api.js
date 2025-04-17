import mockData from './mock-data'
import nProgress from 'nprogress';

/**
 *
 * @param {*} events:
 * The following function should be in the “api.js” file.
 * This function takes an events array, then uses map to create a new array with only locations.
 * It will also remove all duplicates by creating another new array using the spread operator and spreading a Set.
 * The Set will remove all duplicates from the array.
 */
export const extractLocations = (events) => {
  const extractedLocations = events.map((event) => event.location);
  const locations = [...new Set(extractedLocations)];
  return locations;
};

export const isOnline = async () => {
  try {
    const response = await fetch('https://www.google.com', { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    return false;
  }
};

if (navigator.onLine) {
  console.log('Currently online');
} else {
  console.log('Currently offline');
}

// Register event listeners globally
window.addEventListener('online', () => {
  console.log('Online!');
});

window.addEventListener('offline', () => {
  console.log('Offline detected');
});

/**
 *
 * This function will fetch the list of all events
 */
export const getEvents = async () => {
  if (window.location.href.startsWith("http://localhost")) {
    return mockData;
  }

  window.addEventListener('online', () => {
    console.log('Online!');
  });

  window.addEventListener('offline', () => {
    console.log('Offline detected');
    const events = localStorage.getItem("lastEvents");
    nProgress.done();
    console.log("Events loaded");
    return events ? JSON.parse(events) : console.log("No events found.");
  });

  //  const online = await isOnline();
  /* if (!online) {
    console.log("Offline detected");
    const events = localStorage.getItem("lastEvents");
    nProgress.done();
    console.log("Events loaded");
    return events ? JSON.parse(events) : console.log("No events found.");
  } */

  const token = await getAccessToken();

  const removeQuery = () => {
    let newurl;
    if (window.history.pushState && window.location.pathname) {
      newurl =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname;
      window.history.pushState("", "", newurl);
    } else {
      newurl = window.location.protocol + "//" + window.location.host;
      window.history.pushState("", "", newurl);
    }
  };

  if (token) {
    removeQuery();
    const url = "https://y485oai93b.execute-api.us-east-2.amazonaws.com/dev/api/get-events" + "/" + token;
    const response = await fetch(url);
    console.log(response)
    const result = await response.json();
    if (result) {
      nProgress.done();
      localStorage.setItem("lastEvents", JSON.stringify(result.events));
      console.log("Events cached")
      return result.events;
    } else if (localStorage.getItem("lastEvents")) {
      console.log("Offline. Loading events from cache.")
      return localStorage.getItem("lastEvents");
    }
    else console.log("Offline. No cached events found.");

  }
};

const getToken = async (code) => {
  const encodeCode = encodeURIComponent(code);
  const response = await fetch(
    'https://y485oai93b.execute-api.us-east-2.amazonaws.com/dev/api/token' + '/' + encodeCode
  );
  const { access_token } = await response.json();
  access_token && localStorage.setItem("access_token", access_token);

  return access_token;
};

export const getAccessToken = async () => {
  const accessToken = localStorage.getItem('access_token');

  const checkToken = async (accessToken) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
      );
      const result = await response.json();
      return result
    } catch (error) {
      console.log("Offline detected.")
    }

  };

  const tokenCheck = accessToken && (await checkToken(accessToken));


  if (!accessToken || tokenCheck.error) {
    await localStorage.removeItem("access_token");
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get("code");
    if (!code) {
      const response = await fetch(
        "https://y485oai93b.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url"
      );
      const result = await response.json();
      const { authUrl } = result;
      return (window.location.href = authUrl);
    }
    return code && getToken(code);
  }
  return accessToken;

}