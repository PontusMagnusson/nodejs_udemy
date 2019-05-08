const chalk = require('chalk')
const notes = require('./notes.js')

const firstNote = notes()

console.log(firstNote)

console.log(chalk.green('Success!'))