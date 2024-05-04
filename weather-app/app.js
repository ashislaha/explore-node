
const geoCode = require('./utils/geocode');
const weather = require('./utils/weather');

geoCode.getForwardGeocoding("seattle", (error, {fullAddress} = {}) => {
    if (error) {
        console.log(error);
    } else {
        weather.getWeather(fullAddress, (error, {descriptionString} = {}) => {
            if (error) {
                console.log(error);
            } else {
                console.log(descriptionString);
            }
        })
    }
});