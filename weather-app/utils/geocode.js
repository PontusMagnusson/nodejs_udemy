const request = require('request')
const readKeys = require('./readKeys')


const keyData = readKeys()
const mapboxApiKey = keyData.mapbox

const geocode = (address, callback) => {
    const encodedAddress = encodeURIComponent(address)
    const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedAddress}.json?access_token=${mapboxApiKey}`

    request({url: mapboxUrl, json: true}, (err, response) => {
        if (err) {
            callback('Unable to contact location services', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location, please try again with a different search term', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode