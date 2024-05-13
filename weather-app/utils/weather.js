const request = require('request');

// https://weatherstack.com/documentation
const weatherStackEndPoint = "http://api.weatherstack.com/current";
const weatherStackAccessToken = "3f2b4de4adf7e149d5839bfd4ef7eccc";

const getWeather = function (place, callback) {
    const url = weatherStackEndPoint + "?access_key=" + weatherStackAccessToken + "&query=" + encodeURIComponent(place);
    console.log(url);
    request.get({ url: url, json: true }, (error, response, body) => {
        if (error) {
            callback('Unable to connect weather service!', undefined);
        } else if (body.error) {
            callback('Error: ' + body.error.info, undefined)
        } else {
            const currentTemperature = body.current.temperature;
            const precip = body.current.precip;
            const formattedStr = "It's currently " + `${currentTemperature}` + " degree C outside. There is " + `${precip}` + "% chance of rain"

            callback(undefined, {
                statusCode: response.statusCode,
                temperature: currentTemperature,
                precipitation: precip,
                descriptionString: formattedStr
            })
        }
    });
}

module.exports = {
    getWeather: getWeather
}