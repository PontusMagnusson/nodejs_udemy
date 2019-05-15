const path = require('path')
const express = require('express')

const app = express()

app.set('view engine', 'hbs')

// Configure static resources
app.use(express.static(path.join(__dirname, '../public')))

app.get('', (req, res) => {
    res.render('index', {
         title: 'Sunny weather', 
         name: 'Pontus' 
        })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About this app',
        name: 'War kitteh'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'This is an example message'
    })
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