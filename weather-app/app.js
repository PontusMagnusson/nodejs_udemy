var request = require('request')
var fs = require('fs')

// Get API keys
const keyData = readKeys()
let darkskyApiKey = keyData.darksky
// Used for geocoding
let mapboxApiKey = keyData.mapbox

const darkskyUrl = `https://api.darksky.net/forecast/${darkskyApiKey}/37.8267,-122.4233?units=si`
const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${mapboxApiKey}`

request({url: darkskyUrl, json: true}, (err, response) => {
    console.log('%s It is currently %f degrees out. There is a %f\% of rain.', response.body.daily.data[0].summary, response.body.currently.temperature, response.body.currently.precipProbability)
})


request({url: mapboxUrl, json: true}, (err, response) => {
    const lat = response.body.features[0].center[1]
    const long = response.body.features[0].center[0]
    console.log('Lat: ' + lat)
    console.log('Long: ' + long)
})

function readKeys() {
    return JSON.parse(fs.readFileSync('api-keys.json'))
}