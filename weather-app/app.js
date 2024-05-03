
const geoCode = require('./utils/geocode');
const weather = require('./utils/weather');

geoCode.getForwardGeocoding("seattle", (error, geocodeData) => {
    if (error) {
        console.log(error);
    } else {
        console.log(geocodeData);
        weather.getWeather(geocodeData.fullAddress, (error, forecastData) => {
            if (error) {
                console.log(error);
            } else {
                console.log(forecastData);
            }
        })
    }
});