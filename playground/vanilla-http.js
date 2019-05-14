const https = require('https')
const getKey = require('../weather-app/utils/getKey')
const darkSkyApiKey = getKey('darkSkyApiKey')

const url = `https://api.darksky.net/forecast/${darkSkyApiKey}/0,0?units=si`

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const responseBody = JSON.parse(data)

        console.log(responseBody)
    })
})

request.on('error', (error) => {
    console.log(error)
})

request.end()