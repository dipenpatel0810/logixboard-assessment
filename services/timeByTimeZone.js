const fetch = require('node-fetch');

export async function timeByTimeZone(timezone) {
    var GET_TIME_URL = process.env.TIME_API;
    GET_TIME_URL = GET_TIME_URL.replace("TIME_ZONE", timezone);
    const response = await fetch(GET_TIME_URL);
    return await response.json();
}
