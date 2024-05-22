console.log('client side javascript file loaded');

function fetchWeather(location, callback) {
    fetch('/weather?address=' + location)
        .then(response => {
            return response.json()
        })
        .then(data => {
            if (data.error) {
                callback(data.error, undefined)
            } else {
                callback(undefined, data)
            }
        })
        .catch(error => {
            console.log('There is a problem in fetch request:', error)
        })
}

const weatherForm = document.querySelector('form')
const searchInput = document.querySelector('input')
const weatherInfo = document.querySelector('#weather_message')
const weatherError = document.querySelector('#weather_error')

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    weatherInfo.textContent = ''
    weatherError.textContent = ''

    const location = searchInput.value
    if (location) {
        fetchWeather(location, (error, data) => {
            if (error) {
                weatherError.textContent = error
            } else {
                const message = "Weather in " + data.address + " - " + data.weatherData.descriptionString
                weatherInfo.textContent = message
            }
        })
    } else {
        console.log('provide a valid location to search')
    }
})