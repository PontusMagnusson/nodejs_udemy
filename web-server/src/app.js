const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Configure static resources
app.use(express.static(publicPath))

app.get('', (req, res) => {
    res.render('index', {
         title: 'Sunny weather', 
         name: 'Pontus' 
        })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About this app',
        name: 'Pontus'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help!',
        name: 'Pontus',
        message: 'This is an example message'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Null island',
        forecast: 'Clear forever. Currently 0 degrees outside. 0% chance of rain.'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'This article does not exist', 
        name: 'Pontus'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Oops, the page you are looking for does not exist, sorry about that.',
        name: 'Pontus'
    })
})

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})