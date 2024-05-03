
const geoCode = require('./utils/geocode');
const weather = require('./utils/weather');

geoCode.getForwardGeocoding("seattle", (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});

weather.getWeather("seattle", (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
})