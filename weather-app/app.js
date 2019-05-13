const request = require('request')
const geocode = require('./utils/geocode')
const readKeys = require('./utils/readKeys')


// Get API keys
const keyData = readKeys()
const darkskyApiKey = keyData.darksky


// Weather service
const darkskyUrl = `https://api.darksky.net/forecast/${darkskyApiKey}/37.8267,-122.4233?units=si`

request({url: darkskyUrl, json: true}, (err, response) => {
    if(err) {
        console.log('Unable to contact DarkSky weather service, please try again later...')
    } else if(response.body.error) {
        console.log(response.body.error)
    } else {
        console.log('%s It is currently %f degrees out. There is a %f\% of rain.', response.body.daily.data[0].summary, response.body.currently.temperature, response.body.currently.precipProbability)
    }
})


// // Geocoding
// const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Varberg.json?access_token=${mapboxApiKey}`

// request({url: mapboxUrl, json: true}, (err, response) => {

//     if (err) {
//         console.log('Unable to contact Mapbox services, please try again later...')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location, please try again with a different search term')
//     } else {
//         const lat = response.body.features[0].center[1]
//         const long = response.body.features[0].center[0]
//         console.log('Lat: ' + lat)
//         console.log('Long: ' + long)
//     }
// })

geocode('Gothenburg usa', (err, data) => {
    console.log(err)
    console.log(data)
})

