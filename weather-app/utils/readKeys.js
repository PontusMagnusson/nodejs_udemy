const fs = require('fs')

readKeys = () => {
    return JSON.parse(fs.readFileSync('api-keys.json'))
}

module.exports = readKeys