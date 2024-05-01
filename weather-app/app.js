
const request = require('request');

// https://weatherstack.com/documentation
const weatherStackEndPoint = "http://api.weatherstack.com/current";
const weatherStackAccessToken = "3f2b4de4adf7e149d5839bfd4ef7eccc";

const getWeather = function(place) {
    const url = weatherStackEndPoint + "?access_key=" + weatherStackAccessToken + "&query=" + encodeURIComponent(place);
    console.log(url);
    request.get({url: url, json: true}, (error, response, body) => {
        if (error) {
            console.log('Unable to connect weather service!');
        } else if (body.error) {
            console.log('Error: ', body.error.info);
            
        } else {
            console.log('status code', response.statusCode);
            const currentTemperature = body.current.temperature;
            const precip = body.current.precip;
            const formattedStr = "It's currently " + `${currentTemperature}` + " degree C outside. There is " + `${precip}` + "% chance of rain"
            console.log(formattedStr);
        }
    });
}

// getWeather("seattle");

// geo-coding
// address (mapbox.com) --> lat, lng --> use api to get weather info

// https://account.mapbox.com/
const mapBoxEndPoint = "https://api.mapbox.com/search/geocode/v6/forward"
const mapBoxAccessToken = "pk.eyJ1IjoiYXNoaXNsYWhhIiwiYSI6ImNsdmx5azdpdzJsZzYydm4xd25ieWJ0ZzYifQ.G4WPdCr07mRucWgNXewhLg"
const language = "en"
const limit = 1

const getForwardGeocoding = (place) => {
    const url = mapBoxEndPoint + "?q=" + encodeURIComponent(place) + "&access_token=" + mapBoxAccessToken + "&limit=" + `${limit}`
    console.log(url);

    request.get({url: url, json: true}, (error, response, body) => {
        if (error) {
            console.log('Unable to connect to Forward geo coding service!');
        } else if (body.features.length === 0) {
            console.log('Invalid location');

        } else {
            console.log('status code', response.statusCode);
            const feature = body.features[0];
            const coordinates = feature.properties.coordinates;
            console.log(coordinates);
        }
    });
}

getForwardGeocoding("los angeles");