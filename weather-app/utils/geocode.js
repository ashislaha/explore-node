const request = require('request');

// geo-coding
// address (mapbox.com)
// https://account.mapbox.com/
const mapBoxEndPoint = "https://api.mapbox.com/search/geocode/v6/forward"
const mapBoxAccessToken = "pk.eyJ1IjoiYXNoaXNsYWhhIiwiYSI6ImNsdmx5azdpdzJsZzYydm4xd25ieWJ0ZzYifQ.G4WPdCr07mRucWgNXewhLg"
const language = "en"
const limit = 1

const getForwardGeocoding = (place, callback) => {
    const url = mapBoxEndPoint + "?q=" + encodeURIComponent(place) + "&access_token=" + mapBoxAccessToken + "&limit=" + `${limit}`
    console.log(url);

    request.get({url: url, json: true}, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Forward geo coding service!', undefined);
        } else if (body.features.length === 0) {
            callback('Invalid location', undefined);

        } else {
            const feature = body.features[0];
            // console.log(feature);
            callback(undefined, {
                statusCode: response.statusCode,
                coordinates: feature.properties.coordinates,
                fullAddress: feature.properties.full_address
            });
        }
    });
}

module.exports = {
    getForwardGeocoding: getForwardGeocoding
};

