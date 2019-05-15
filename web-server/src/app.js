const path = require('path')
const express = require('express')

const app = express()

// Configure static resources
app.use(express.static(path.join(__dirname, '../public')))

app.get('/weather', (req, res) => {
    res.send({
        location: 'Null island',
        forecast: 'Clear forever. Currently 0 degrees outside. 0% chance of rain.'
    })
})

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})