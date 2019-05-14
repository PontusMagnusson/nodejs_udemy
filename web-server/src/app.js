const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
})

app.get('/help', (req, res) => {
    res.send([{
        name: 'Pontus',
        age: 24
    },{
        name: 'David',
        age: 29
    }
    ])
})

app.get('/about', (req, res) => {
    res.send('<h1>About us!</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Null island',
        forecast: 'Clear forever. Currently 0 degrees outside. 0% chance of rain.'
    })
})

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})