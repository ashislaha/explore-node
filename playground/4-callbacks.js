// provide to add an address and a callback function after address is converted into lat,lng
const geoCode = (address, callback) => {
    const data = {
        latitude: 0,
        longitude: 0
    };
    callback(data);
}

geoCode("seattle", (coordinate) => {
    console.log(coordinate);
})