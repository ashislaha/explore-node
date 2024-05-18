const path = require('path');

const weatherPath = path.join(__dirname, '../../weather-app/utils/weather')
const weather = require(weatherPath)

const hbs = require('hbs');
const express = require('express');
const app = express()
const PORT = process.env.PORT || 3007;

// Define paths for express config
const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, './templates/views')
const partialPath = path.join(__dirname, './templates/partials')

// set up handle bar engine and views/partials location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

// set up static directory to serve
app.use(express.static(publicPath))
app.use(express.json()) // for parsing 'application/json'
app.use(express.urlencoded({ extended: true })) // for parsing 'application/x-www-urlencoded'

app.get('/', (req, res) => {
    console.log(req.ip)
    res.render('index', {
        title: "Welcome to weather app",
        place: "Seattle",
        name: "Ashis Laha"
    })
});

// about
app.get('/about', (req, res) => {
    res.render('about', {
        title: "About me",
        name: "Ashis Laha",
        place: "Sammamish, WA"
    })
})

// help
app.get('/help', (req, res) => {
    // const helpHtmlFile = path.join(publicPath, "help.html")
    // res.sendFile(helpHtmlFile)
    res.render('help', {
        title: "Help page",
        phone: "+1-123456789",
        mail: "a@b.com",
        name: "Ashis Laha"
    })
})

// weather
app.get('/weather', (req, res) => {
    const address = req.query.address;
    if (!address) {
        // address is missing, send an error message
        return res.send({
            error: 'Address must be there in query params to fetch'
        })
    } else {
        weather.getWeather(address, (errorValue, weatherData = {}) => {
            if (errorValue) {
                res.send({ error: errorValue });
            } else {
                res.send({
                    weatherData: weatherData,
                    address: address
                });
            }
        })
    }
})

// help page not found
app.get('/help/*', (req, res) => {
    res.statusCode = 404;
    res.render('404', {
        title: "Help page not found"
    })
});

// for 404 - page not found (match anything than anything above)
app.get('*', (req, res) => {
    res.statusCode = 404;
    res.render('404', {
        title: "Page Not found"
    })
})

app.listen(PORT, () => {
    console.log('listening to port: ', PORT)
})