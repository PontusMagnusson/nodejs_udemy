const fs = require('fs')

getKey = (key) => {
    debugger
    const keys = JSON.parse(fs.readFileSync('./api-keys.json'))

    return keys[key]
}

module.exports = getKey
