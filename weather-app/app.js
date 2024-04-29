
const request = require('request');

const weatherApiKey = "3f2b4de4adf7e149d5839bfd4ef7eccc";
const requestURL = "http://api.weatherstack.com/current?access_key=3f2b4de4adf7e149d5839bfd4ef7eccc&query=Seattle"

request.get({url: requestURL, json: true}, (error, response, body) => {
    if (error) {
        console.log('error', error);
    } else {
        console.log('status code', response.statusCode);
        const currentTemperature = body.current.temperature;
        const precip = body.current.precip;
        const formattedStr = "It's currently " + `${currentTemperature}` + " degree C outside. There is " + `${precip}` + "% chance of rain"
        console.log(formattedStr);
    }
});