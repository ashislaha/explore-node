// there are 2 core modules which are helping us to make http request.
// http and https
const http = require('http');

const weatherStackEndPoint = "http://api.weatherstack.com/current";
const weatherStackAccessToken = "3f2b4de4adf7e149d5839bfd4ef7eccc";
const url = weatherStackEndPoint + "?access_key=" + weatherStackAccessToken + "&query=seattle";

const request = http.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    });
    response.on('end', () => {
        const object = JSON.parse(data);
        console.log(object);
    })
});

request.on('error', (error) => {
    console.log(error)
})

request.end()


